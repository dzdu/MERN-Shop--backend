const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { readdirSync } = require('fs');

require('dotenv').config();

const app = express();

// db

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected to database'))
  .catch((err) => console.log(err, 'connection error'));

// middlewears
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '3mb' }));
app.use(cors());

// route

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', (req, res) => {
  res.send(`
      <h1>Link to all API routes</h1>
      <hr/>
      <a href="http://localhost:8000/api/create-or-update-user">Create or update user api</a>
      <hr/>
      <a href="http://localhost:8000/api/user">User api</a>
      <hr/>
    `);
});

//routes

readdirSync('./routes').map((r) => app.use('/api', require('./routes/' + r)));

// PORT
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server is running on ${PORT}`));
