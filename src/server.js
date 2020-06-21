import express from 'express';
import require from 'requirejs';
import graphqlHTTP from 'express-graphql';
import dotenv from 'dotenv';
import { schema, resolver } from './graphql/schema.js';
import MongoClient from './mongodb/mongoClient.js';
const expressPlayground = require('graphql-playground-middleware-express')
  .default

// env config
dotenv.config();

// environment
const { APP_PORT } = process.env;

const mongoClient = new MongoClient();

// Connect to database
mongoClient.connect();

const app = express();

// In order to test the API's
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolver,
  graphiql: true,
}));

app.get('/playground', expressPlayground({ endpoint: '/graphql' }))

app.listen(APP_PORT);
console.log(`Running a GraphQL API server at http://localhost:${APP_PORT}/graphql`);