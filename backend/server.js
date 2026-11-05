require('dotenv').config();

const express = require('express'); //import express module
const app = express(); //initialize express app

app.get('/', (req, res) => {
  console.log('Here');
  res.send('Home Page');
});

const usersRouter = require('./routes/users');
const recipesRouter = require('./routes/recipes');

app.use('/users', usersRouter);
app.use('/recipes', recipesRouter);

app.listen(process.env.PORT || 3000, () => console.log('Server running'));
