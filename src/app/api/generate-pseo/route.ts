import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'http://localhost',
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 'dummy'
);

function generateSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export async function GET(request: Request) {
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // 1. Gather Competitor News
    // Using dummy news if search API is not fully configured yet
    const competitors = ["UiPath", "Automation Anywhere", "Scale AI", "LangChain"];
    const targetCompetitor = competitors[Math.floor(Math.random() * competitors.length)];
    let searchContext = `Recent industry trends suggest ${targetCompetitor} is facing scaling challenges and price hikes in enterprise deployments.`;

    // 2. Generate the pSEO Landing Page
    const systemPrompt = `You are a ruthless, highly technical Product Marketing Manager at NexaWorks.
Your task is to write a highly aggressive, programmatic SEO (pSEO) landing page comparing NexaWorks vs. ${targetCompetitor}.

REQUIREMENTS:
1. Use the following news context: "${searchContext}"
2. Output in MDX format (Markdown with JSX).
3. Do NOT wrap the response in a markdown code block (\`\`\`md).
4. First line MUST be the title starting with "# " (e.g., "# NexaWorks vs. ${targetCompetitor}: Why Enterprises are Switching").
5. Second line MUST be a 1-sentence excerpt starting with "> ".
6. Naturally include at least one <AEOAnswerBlock question="..." answer="..." tag="Competitor Intel" /> component.
7. CRITICAL: Escape all < and > math symbols as &lt; and &gt;. Do not use Mermaid graphs.
8. Length: 500-700 words, highly persuasive, highlighting NexaWorks' deterministic architecture advantages.`;

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: "Generate the competitor comparison page." }
      ],
      temperature: 0.9,
      max_tokens: 2500,
    });

    const rawOutput = completion.choices[0]?.message?.content?.trim() || "";
    const lines = rawOutput.split('\n');
    let title = `NexaWorks vs ${targetCompetitor}`;
    let excerpt = `A deep dive into why ${targetCompetitor} is failing the modern enterprise.`;
    
    if (lines[0].startsWith('# ')) {
      title = lines[0].replace('# ', '').trim();
      lines.shift();
    }
    
    while (lines.length > 0 && lines[0].trim() === '') lines.shift();
    if (lines.length > 0 && lines[0].startsWith('> ')) {
      excerpt = lines[0].replace('> ', '').trim();
      lines.shift();
    }

    const content = lines.join('\n').trim();
    // We prefix the slug with the competitor name for the /vs/[competitor] route
    const slug = targetCompetitor.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    // 3. Save to Supabase
    const { error } = await supabase.from('competitor_pages').upsert({
      slug: slug,
      title: title,
      excerpt: excerpt,
      content: content,
      competitor_name: targetCompetitor
    }, { onConflict: 'slug' });

    if (error) {
      throw error;
    }

    return NextResponse.json({ success: true, competitor: targetCompetitor, slug }, { status: 200 });
  } catch (error: any) {
    console.error("pSEO generation error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
