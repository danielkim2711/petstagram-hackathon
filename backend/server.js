const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const port = process.env.PORT || 8000;
const connectDB = require('./config/db');

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.status(200);
  res.json({ message: "Welcome to Petstagram's API" });
});

// Middleware for POST and PUT requests.
// This is because we are sending data to the server
// and asking the server to accept or store that data (object)
// Find more information on the link below:
// https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/pets', require('./routes/petRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));

app.listen(port, () => console.log(`Server started on PORT ${port}`));
