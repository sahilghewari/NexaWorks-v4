import { Client } from 'pg';
import { blogPosts } from '../src/data/blogPosts';

async function seedDatabase() {
  const client = new Client({
    host: 'db.cpachxvecoxzmrmicrcd.supabase.co',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'NexaWorks@2004',
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    console.log('Connected to Supabase PostgreSQL database.');

    for (const post of blogPosts) {
      const query = `
        INSERT INTO articles (slug, title, excerpt, content, category, date, large)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        ON CONFLICT (slug) DO NOTHING;
      `;
      const values = [
        post.slug,
        post.title,
        post.excerpt,
        post.content,
        post.category,
        post.date,
        post.large || false
      ];
      await client.query(query, values);
      console.log(`Inserted ${post.slug}`);
    }

    console.log('Database seed complete.');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    await client.end();
  }
}

seedDatabase();
