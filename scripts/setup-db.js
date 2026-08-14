const { Client } = require('pg');

async function setupDatabase() {
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

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS articles (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        slug TEXT UNIQUE NOT NULL,
        title TEXT NOT NULL,
        excerpt TEXT,
        content TEXT NOT NULL,
        category TEXT,
        date TEXT,
        large BOOLEAN DEFAULT false,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
      );
    `;
    
    await client.query(createTableQuery);
    console.log('Table "articles" created or already exists.');

    // Optionally set up RLS if needed, but for now we will disable it to allow direct inserts from server.
    // If we use the service role key, it bypasses RLS anyway.
    
    console.log('Database setup complete.');
  } catch (err) {
    console.error('Error setting up database:', err);
  } finally {
    await client.end();
  }
}

setupDatabase();
