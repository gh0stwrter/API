import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import {ApolloServer, gql} from "apollo-server-express";
import resolvers from './graphql/resolvers/user';
import typeDefs from './graphql/typeDefs/index';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO, {useNewUrlParser: true});
console.log(process.env.MONGO)
if (process.env.PROD)
  mongoose.set('debug', true);

const app = express();

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const SERVER = new ApolloServer({
        typeDefs: typeDefs,
        resolvers,
});

SERVER.applyMiddleware({
  app,
  path: "/API"
});

app.listen(process.env.PORT, process.env.URL , () => {
  console.log('Server is running in url  : http://' + process.env.URL + ':' + process.env.PORT + '/API');
});