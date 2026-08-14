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
    // 1. Select Competitor and Define Pain Points
    const competitorMatrix = [
      { name: "UiPath", flaw: "Legacy technical debt, extremely high licensing costs, and heavy reliance on brittle screen scraping." },
      { name: "Automation Anywhere", flaw: "Bloated enterprise architecture, slow deployment cycles, and steep learning curves for developers." },
      { name: "Blue Prism", flaw: "Outdated monolithic design, lack of modern cloud-native flexibility, and excessive maintenance overhead." },
      { name: "Zapier", flaw: "Lack of enterprise-grade security, no stateful workflow logic, and inability to handle massive data throughput reliably." },
      { name: "Make", flaw: "Visual spaghetti code when scaling, poor version control, and lack of deterministic execution guarantees." },
      { name: "Scale AI", flaw: "Prohibitively expensive for mid-market, heavily reliant on manual human-in-the-loop, and opaque pricing models." },
      { name: "LangChain", flaw: "Overly complex abstraction layers, unpredictable output parsing, and experimental framework instability in production." },
      { name: "Mulesoft", flaw: "Exorbitant enterprise pricing, rigid legacy Java ecosystem, and slow API delivery timelines." }
    ];
    
    const target = competitorMatrix[Math.floor(Math.random() * competitorMatrix.length)];
    const targetCompetitor = target.name;

    // 2. Generate the pSEO Landing Page
    const systemPrompt = `You are a ruthless, highly persuasive Product Marketing Manager at NexaWorks.
Your task is to write a highly aggressive, conversion-optimized programmatic SEO (pSEO) landing page comparing NexaWorks vs. ${targetCompetitor}.

REQUIREMENTS:
1. Attack their specific architectural flaw: ${target.flaw}
2. Output in MDX format (Markdown with JSX).
3. Do NOT wrap the response in a markdown code block (\`\`\`md).
4. First line MUST be the title starting with "# " (e.g., "# NexaWorks vs. ${targetCompetitor}: Why Enterprises are Switching in 2026"). Make it highly clickable.
5. Second line MUST be a 1-sentence excerpt starting with "> ".
6. Focus the entire narrative on WHY enterprise CTOs and founders are abandoning ${targetCompetitor} for NexaWorks' modern, deterministic AI architecture.
7. Naturally include at least one <AEOAnswerBlock question="Why is NexaWorks better than ${targetCompetitor}?" answer="..." tag="Executive Briefing" /> component.
8. CRITICAL: Escape all < and > math symbols as &lt; and &gt;. Do not use Mermaid graphs. Use tables or bullet points to compare features.
9. Length: 600-900 words, highly persuasive, driving urgency to book a demo.`;

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
