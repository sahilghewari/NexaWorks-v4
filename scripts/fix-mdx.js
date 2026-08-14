const { Client } = require('pg');

async function fixMDX() {
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
    // Select all articles
    const res = await client.query('SELECT id, content FROM articles');
    
    for (let row of res.rows) {
      let content = row.content;
      // Very naive fix: replace any < followed by a number with &lt;
      let fixed = content.replace(/<(\d)/g, '&lt;$1');
      if (content !== fixed) {
        await client.query('UPDATE articles SET content = $1 WHERE id = $2', [fixed, row.id]);
        console.log(`Fixed MDX for article ID: ${row.id}`);
      }
    }
    console.log('Done fixing MDX records.');
  } catch(e) {
    console.error(e);
  } finally {
    client.end();
  }
}

fixMDX();
