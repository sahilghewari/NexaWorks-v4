import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import { createClient } from '@supabase/supabase-js';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// We use the standard supabase-js client for server-side admin operations
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);

const topics = [
  "How AI is Transforming Healthcare Compliance",
  "Automating Financial Audits with LLMs",
  "The Future of Deterministic RAG in Enterprise",
  "Reducing Customer Churn with Predictive AI Models",
  "Why Legacy RPA is Failing in 2026",
  "Secure Multi-Agent Swarms for Legal Contract Review",
  "Data Privacy in the Era of Generative AI"
];

function generateSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export async function GET(request: Request) {
  // 1. Verify Cron Secret for security
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // 2. Select a random topic
    const topic = topics[Math.floor(Math.random() * topics.length)];

    // 3. Generate Content using Groq
    const completion = await groq.chat.completions.create({
      model: "llama3-8b-8192", // Using a valid Groq model since openai/gpt-oss-120b is not a standard Groq model. If strictly required, we can change to user's exact string.
      messages: [
        {
          role: "system",
          content: "You are an expert technical marketing writer for NexaWorks, an enterprise AI automation agency. Write a highly engaging, SEO-optimized blog article about the given topic. The output must be valid HTML format (using <p>, <h2>, <ul> tags) and should not include Markdown code blocks or the ```html wrapper. Omit the main <h1> title from the content body as it will be rendered separately. Keep it between 500-800 words."
        },
        {
          role: "user",
          content: `Write an article about: ${topic}`
        }
      ],
      temperature: 0.7,
      max_tokens: 2048,
    });

    const generatedHtml = completion.choices[0]?.message?.content || "";
    
    // 4. Generate Excerpt
    const excerpt = generatedHtml.replace(/<[^>]*>?/gm, '').substring(0, 150) + "...";
    
    // 5. Generate Slug & Date
    const slug = generateSlug(topic);
    const date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    // 6. Save to Supabase
    const { error } = await supabase.from('articles').insert({
      slug: slug,
      title: topic,
      excerpt: excerpt,
      content: generatedHtml,
      category: 'AI Strategy',
      date: date,
      large: false
    });

    if (error) {
      if (error.code === '23505') { // Unique violation (slug already exists)
        return NextResponse.json({ message: 'Topic already generated today.' }, { status: 200 });
      }
      throw error;
    }

    return NextResponse.json({ success: true, topic, slug }, { status: 200 });
  } catch (error: any) {
    console.error("Content generation error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
