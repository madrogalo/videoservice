const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'user',
  host: 'db',
  database: 'postgres_db',
  password: 'j49OPekq9PlKj',
  port: 5432,
});

function initialize(passport) {
  const authenticateUser = async (email, password, done) => {
    try {
      const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
      if (rows.length > 0) {
        const user = rows[0];

        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Incorrect password' });
        }
      } else {
        return done(null, false, { message: 'No user with that email' });
      }
    } catch (err) {
      return done(err);
    }
  };

  passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async (id, done) => {
    try {
      const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
      if (rows.length > 0) {
        done(null, rows[0]);
      } else {
        done(new Error('User not found'));
      }
    } catch (err) {
      done(err);
    }
  });
}

module.exports = initialize;
