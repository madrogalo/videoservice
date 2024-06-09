const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const initializePassport = require('./passport-config');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 8080;

initializePassport(passport);

app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

const pool = new Pool({
  user: 'user',
  host: 'db',
  database: 'postgres_db',
  password: 'j49OPekq9PlKj',
  port: 5432,
});

// JWT secret
const JWT_SECRET = 'your_jwt_secret';

// Middleware for checking JWT
function authenticateJWT(req, res, next) {
  const token = req.cookies.token;

  if (token) {
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
}

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.post('/register', async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const { rows } = await pool.query(
      'INSERT INTO users (name, surname, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, surname, email, hashedPassword]
    );
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send(eirr.message);
  }
});

app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(400).json({ message: info.message });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      // Generate JWT
      const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
      // Set cookie
      res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
      return res.json({ message: 'Logged in successfully', user });
    });
  })(req, res, next);
});

app.get('/protected', authenticateJWT, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

app.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT NOW()');
    res.send(`Current time: ${rows[0].now}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

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
