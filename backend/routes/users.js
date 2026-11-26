const express = require('express');
const router = express.Router();
const pool = require('../db');
const bcrypt = require('bcryptjs');

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Introdu emailul si parola' });
    }

    const [users] = await pool.query(
      'SELECT id, full_name, email, location, password, created_at FROM users WHERE email = ?',
      [email],
    );

    if (users.length === 0) {
      return res.status(401).json({ message: 'Incorrect email or password.' });
    }

    const user = users[0];

    const correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword) {
      return res.status(401).json({ message: 'Incorrect password.' });
    }

    res.status(200).json({
      id: user.id,
      full_name: user.full_name,
      email: user.email,
      location: user.location,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Database error',
      error: error.message,
    });
  }
});

router.post('/signup', async (req, res) => {
  try {
    const { full_name, email, location, password } = req.body;

    if (!full_name || !email || !location || !password) {
      return res.status(400).json({ message: 'Completeaza toate campurile' });
    }

    const hash = await bcrypt.hash(password, 10);

    const [result] = await pool.query(
      'INSERT INTO users (full_name, email, location, password) VALUES (?, ?, ?, ?)',
      [full_name, email, location, hash],
    );

    res.status(201).json({
      message: 'User created successfully',
      userId: result.insertId,
      full_name,
      email,
      location,
    });
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      return res
        .status(409)
        .json({ message: 'Exista deja un cont cu acest email' });
    }
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
  }
});

router.get('/:id', (req, res) => {
  res.send(`Get User with ID ${req.params.id}`);
});
router.put('/:id', (req, res) => {
  res.send(`Update User with ID ${req.params.id}`);
});
router.delete('/:id', (req, res) => {
  res.send(`Delete User with ID ${req.params.id}`);
});

module.exports = router;
