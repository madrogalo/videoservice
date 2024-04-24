const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
const pool = new Pool({
  user: 'user', //  your PostgreSQL user
  host: 'db', // the name of the PostgreSQL service in the docker-compose.yml file
  database: 'postgres_db', // the name of your database
  password: 'j49OPekq9PlKj', // password to the database
  port: 5432, // port from docker-compose.yml
});

app.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT NOW()');
    res.send(`Current time: ${rows[0].now}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Endpoint to retrieve all users
app.get('/users', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});