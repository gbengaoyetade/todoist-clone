require('dotenv').config();
const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema');
const auth = require('./middleware/auth');
const resolvers = require('./resolvers');

const app = express();

app.use(cors());
app.use(auth);
app.use('/graphql', graphqlHTTP({ schema, rootValue: resolvers, graphiql: true }));

app.get('/*', (req, res) => {
  res.send({ message: 'Welcome to graphql' });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

mongoose
  .connect(process.env.DB_URL, { useNewUrlParser: true })
  .then(() => {
    console.log('Database connection established');
  })
  .catch(() => {
    console.log('Error connecting to the database');
    process.exit(1);
  });
