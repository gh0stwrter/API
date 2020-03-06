import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import {ApolloServer, makeExecutableSchema, GraphQLUpload} from "apollo-server-express";
import resolvers from './api/graphql/resolvers/index';
import typeDefs from './api/graphql/typeDefs/index';
import mongoose from 'mongoose';
import authRouter from "./routes/auth";
import path from "path"
if (process.env.PROD)
  mongoose.set('debug', true);

const app = express();
const schema = makeExecutableSchema({
  typeDefs: typeDefs,
   resolvers,
   maxFileSize: 10000000, 
  maxFiles: 10
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(authRouter)
app.use("/upload", express.static(path.join(__dirname, "./api/graphql/services/CompositionService/compositions")))
const server = new ApolloServer({
  schema,
  introspection: true,
  
});

server.applyMiddleware({
  app,
  path: "/api"
});

mongoose.connect(process.env.MONGO, {useNewUrlParser: true, useUnifiedTopology: true });


app.listen(process.env.PORT, process.env.URL , () => {
  console.log('Server is running in url  : http://' + process.env.URL + ':' + process.env.PORT + '/api');
});