import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import { createClient } from '@supabase/supabase-js';

// We use the standard supabase-js client for server-side admin operations
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'http://localhost',
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 'dummy'
);

function generateSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export async function GET(request: Request) {
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

  // 1. Verify Cron Secret for security
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // 2. Generate Highly Specific Topic & MDX Content in one mega-prompt
    const systemPrompt = `You are an elite, high-level growth hacker and expert content marketer at NexaWorks, an AI automation agency. 
Your goal is to write brilliant, persuasive, and highly engaging blog posts designed to capture competitor audiences and drive inbound leads. You do not sound like a generic LLM; you sound like a seasoned marketing executive writing a high-value piece.

REQUIREMENTS:
1. Focus heavily on Competitor Research and Industry Alternatives. Brainstorm topics that capture people searching for competitors: e.g., "Why businesses are leaving traditional RPA for NexaWorks AI", "The hidden costs of popular automation platforms", "How your competitors are using AI (and what you're missing)", or comparisons against generalized legacy tools.
2. Write the output in MDX format (Markdown with JSX).
3. Do NOT wrap the response in a markdown code block (\`\`\`md).
4. The first line of your response MUST be the title starting with "# ". Make it a magnetic, click-worthy hook.
5. The second line MUST be a short 1-sentence excerpt starting with "> ".
6. The rest is the article content.
7. You MUST include at least one <AEOAnswerBlock question="The question" answer="The precise answer" tag="Marketer's Insight" /> component in the content to provide an interactive summary.
8. Position NexaWorks as the superior, modern alternative to legacy systems or generic competitors. Focus on ROI, time-saving value, and why our tailored approach wins.
9. Keep it around 600-900 words, highly structured with H2 and H3 headers, and lists.
10. CRITICAL: Because this is MDX, you MUST escape any mathematical less-than or greater-than symbols as &lt; and &gt;. NEVER use raw < or > unless it is for the <AEOAnswerBlock> JSX tag.
11. AUTHOR ATTRIBUTION: At the very top of your content (below the excerpt), you MUST include a bold author byline picking ONE of these exact names randomly: **By James D'Souza**, **By Setu Balan**, **By Pawan Babar**, or **By Mangala Sawant**.
12. NO HALLUCINATIONS: Do not claim any fake stories or fictional case studies.
13. NO MERMAID: Do not use Mermaid.js diagram syntax. Use standard markdown tables or bullet points instead if you need to show structure.`;

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: "Generate today's high-quality technical MDX article." }
      ],
      temperature: 0.8,
      max_tokens: 3000,
    });

    const rawOutput = completion.choices[0]?.message?.content?.trim() || "";
    
    // 3. Parse the output
    const lines = rawOutput.split('\n');
    let title = "Generated NexaWorks Article";
    let excerpt = "Technical insights from the NexaWorks engineering team.";
    
    // Extract Title from first line
    if (lines[0].startsWith('# ')) {
      title = lines[0].replace('# ', '').trim();
      lines.shift();
    }
    
    // Extract Excerpt from next available line
    while (lines.length > 0 && lines[0].trim() === '') lines.shift();
    if (lines.length > 0 && lines[0].startsWith('> ')) {
      excerpt = lines[0].replace('> ', '').trim();
      lines.shift();
    }

    const content = lines.join('\n').trim();
    const slug = generateSlug(title);
    const date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    // 4. Save to Supabase
    const { error } = await supabase.from('articles').insert({
      slug: slug,
      title: title,
      excerpt: excerpt,
      content: content,
      category: 'Architecture',
      date: date,
      large: false
    });

    if (error) {
      if (error.code === '23505') return NextResponse.json({ message: 'Topic already generated.' }, { status: 200 });
      throw error;
    }

    // 5. Autonomous Social Syndication
    try {
      const socialPrompt = `You are the lead Social Media Manager for NexaWorks.
Your task is to take the following technical article and generate:
1. A professional, authoritative LinkedIn post. Prefix with [LINKEDIN]. Do NOT use any Markdown formatting (no **bolding**, no *italics*, no # headers). Write it as clean, plain text with emojis.

Include relevant hashtags. The article url will be: https://nexaworks.tech/blog/${slug}

ARTICLE:
${title}
${excerpt}
${content}`;

      const socialCompletion = await groq.chat.completions.create({
        model: "openai/gpt-oss-120b",
        messages: [{ role: "user", content: socialPrompt }],
        temperature: 0.7,
        max_tokens: 1500,
      });

      const socialOutput = socialCompletion.choices[0]?.message?.content || "";
      
      // If LinkedIn token exists, post to LinkedIn
      if (process.env.LINKEDIN_ACCESS_TOKEN && process.env.LINKEDIN_AUTHOR_URN) {
        const linkedinMatch = socialOutput.match(/\[LINKEDIN\]([\s\S]*)$/);
        if (linkedinMatch && linkedinMatch[1]) {
          await fetch('https://api.linkedin.com/v2/ugcPosts', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN}`,
              'Content-Type': 'application/json',
              'X-Restli-Protocol-Version': '2.0.0'
            },
            body: JSON.stringify({
              author: process.env.LINKEDIN_AUTHOR_URN,
              lifecycleState: 'PUBLISHED',
              specificContent: {
                'com.linkedin.ugc.ShareContent': {
                  shareCommentary: { text: linkedinMatch[1].trim() },
                  shareMediaCategory: 'NONE'
                }
              },
              visibility: { 'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC' }
            })
          });
          console.log("Successfully posted to LinkedIn.");
        }
      } else {
        console.log("LinkedIn keys missing, skipping syndication.");
      }
    } catch (socialError) {
      console.error("Social syndication failed (non-fatal):", socialError);
    }

    return NextResponse.json({ success: true, topic: title, slug }, { status: 200 });
  } catch (error: any) {
    console.error("Content generation error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
