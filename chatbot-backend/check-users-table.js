import pg from 'pg';

const pool = new pg.Pool({
  user: 'spirolink_user',
  password: 'StrongPassword123!@#',
  host: 'localhost',
  port: 5432,
  database: 'theepan'
});

(async () => {
  try {
    const result = await pool.query(`
      SELECT column_name, data_type, is_nullable, column_default
      FROM information_schema.columns 
      WHERE table_name = 'users'
      ORDER BY ordinal_position
    `);
    
    console.log('\n📊 USERS TABLE STRUCTURE:\n');
    console.log('Column Name              | Data Type        | Nullable | Default');
    console.log('-------------------------------------------------------------------');
    result.rows.forEach(row => {
      const col = row.column_name.padEnd(24);
      const type = row.data_type.padEnd(16);
      const nullable = (row.is_nullable === 'YES' ? 'YES' : 'NO').padEnd(8);
      const def = row.column_default || '';
      console.log(`${col} | ${type} | ${nullable} | ${def}`);
    });
    
    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
})();
