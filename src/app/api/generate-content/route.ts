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
    const systemPrompt = `You are the lead AI Architect at NexaWorks, an elite enterprise automation agency. 
Your task is to write a highly technical, engaging, and authoritative blog post about a cutting-edge AI or automation topic (e.g., Deterministic RAG, legacy ERP integration, agents replacing RPA, compliance, etc.).

REQUIREMENTS:
1. Brainstorm a completely novel, highly specific topic that enterprise CTOs would care about.
2. Write the output in MDX format (Markdown with JSX).
3. Do NOT wrap the response in a markdown code block (\`\`\`md).
4. The first line of your response MUST be the title starting with "# ".
5. The second line MUST be a short 1-sentence excerpt starting with "> ".
6. The rest is the article content.
7. You MUST include at least one <AEOAnswerBlock question="The question" answer="The precise answer" tag="Executive Briefing" /> component in the content to provide an interactive summary.
8. Naturally weave in mentions to NexaWorks architecture or services.
9. Keep it around 600-900 words, highly structured with H2 and H3 headers, lists, and code snippets if applicable.`;

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

    return NextResponse.json({ success: true, topic: title, slug }, { status: 200 });
  } catch (error: any) {
    console.error("Content generation error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
