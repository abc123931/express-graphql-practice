import { resolvers } from './presentation/resolver';
import cors from 'cors';
import { ApolloServer, gql } from 'apollo-server-express';
import setupDbConnection from './setup';
import { configure, getLogger } from 'log4js';
import compression from 'compression';
import express from 'express';

const log = getLogger();
configure({
  appenders: { out: { type: 'stdout' } },
  categories: { default: { appenders: ['out'], level: 'info' } },
});

const port = process.env.PORT || 3000;

const app = express();

const typeDefs = gql`
  type Query {
    tags: [Tag]!
  }

  type Mutation {
    addTag(name: String!): Tag
  }

  type Tag {
    id: String!
    name: String!
  }
`;

// debugをfalseにするとエラーレスポンスにstacktraceはでない
// NODE_ENVをproduction or testにするでもでなくなるらしい
const apolloServer = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers as any,
  debug: false,
  formatError: function(err) {
    if (err.message.startsWith('test')) {
      log.error(err.message);
    }

    return err;
  },
});

app.use('*', cors());
app.use(compression());
apolloServer.applyMiddleware({ app, path: '/graphql' });

async function init() {
  await setupDbConnection();
  app.listen(port, () => {
    console.log(`Running on http://localhost:3000`);
  });
}

init();
