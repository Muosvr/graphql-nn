const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://jason:jason123@cluster0-xsswl.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))

const app = express();
const port = process.env.PORT || 4000

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));


app.listen(port, () => console.log(`App listening on port ${port}`));