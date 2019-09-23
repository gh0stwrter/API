import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import {ApolloServer, gql} from "apollo-server-express";
import resolvers from './graphql/resolvers/user';
import typeDefs from './graphql/typeDefs/index';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/GhostComposer-DB', {useNewUrlParser: true});
mongoose.set('debug', true);

const app = express();

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connected')
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const SERVER = new ApolloServer({
        typeDefs: typeDefs,
        resolvers,
});

SERVER.applyMiddleware({
  app,
  path: "/api"
});



app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
});