const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(bodyParser.json());

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

app.post('/users', async (req, res) => {
  try {
    console.log('Creating a new use...', req.body);
    const { name, surname, email } = req.body;
    const { rows } = await pool.query(
      'INSERT INTO users (name, surname, email) VALUES ($1, $2, $3) RETURNING *',
      [name, surname, email]
    );
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});


app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'DELETE FROM users WHERE id = $1 RETURNING *',
      [id]
    );

    if (result.rowCount === 0) {
      res.status(404).send('User not found');
    } else {
      res.json(result.rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});