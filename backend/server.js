const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const port = process.env.PORT || 8000;
const connectDB = require('./config/db');

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Routes
app.use('/api/users', require('./routes/userRoutes'));

app.listen(port, () => console.log(`Server started on PORT ${port}`));
