const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM recipes');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

router.get('/new', (req, res) => {
  res.send('New Recipe Form');
});

router.get('/:id', (req, res) => {
  const recipeId = req.params.id;
  res.send(`Recipe Details for ID: ${recipeId}`);
});

module.exports = router;
