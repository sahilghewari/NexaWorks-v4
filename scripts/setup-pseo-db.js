const { createClient } = require('@supabase/supabase-js');

async function setup() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://cpachxvecoxzmrmicrcd.supabase.co';
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'NexaWorks@2004'; // Just using postgres directly is easier for DDL since REST api doesn't do DDL natively

  const { Client } = require('pg');
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
    await client.query(`
      CREATE TABLE IF NOT EXISTS competitor_pages (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        slug TEXT UNIQUE NOT NULL,
        title TEXT NOT NULL,
        excerpt TEXT,
        content TEXT NOT NULL,
        competitor_name TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
      );
    `);
    console.log('Successfully created competitor_pages table.');
  } catch (err) {
    console.error('Error creating table:', err);
  } finally {
    await client.end();
  }
}

setup();
