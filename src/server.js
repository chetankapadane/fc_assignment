import express from 'express';
import graphqlHTTP from 'express-graphql';
import dotenv from 'dotenv';
import { schema, resolver } from './graphql/schema.js';
import MongoClient from './mongodb/mongoClient.js';

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

app.listen(APP_PORT);
console.log(`Running a GraphQL API server at http://localhost:${APP_PORT}/graphql`);