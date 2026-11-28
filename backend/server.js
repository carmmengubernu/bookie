require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Home Page');
});

const usersRouter = require('./routes/users');
const recipesRouter = require('./routes/recipes');

app.use('/users', usersRouter);
app.use('/recipes', recipesRouter);

app.listen(process.env.PORT || 3000, () => console.log('Server running'));
