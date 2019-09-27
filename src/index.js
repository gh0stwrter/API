import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import {ApolloServer, gql} from "apollo-server-express";
import resolvers from './api/graphql/resolvers/user';
import typeDefs from './api/graphql/typeDefs/index';
import mongoose from 'mongoose';
import authRouter from "./routes/auth";

if (process.env.PROD)
  mongoose.set('debug', true);

const app = express();

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(authRouter)
const server = new ApolloServer({
        typeDefs: typeDefs,
        resolvers,
});

server.applyMiddleware({
  app,
  path: "/api"
});

mongoose.connect(process.env.MONGO, {useNewUrlParser: true});


app.listen(process.env.PORT, process.env.URL , () => {
  console.log('Server is running in url  : http://' + process.env.URL + ':' + process.env.PORT + '/api');
});