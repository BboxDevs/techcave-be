import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import cors from 'cors';
import express from 'express';
import http from 'http';

import { ApolloContext, resolvers, typeDef as typeDefs } from '@/apollo';

const app = express();
const httpServer = http.createServer(app);

const apolloServer = new ApolloServer<ApolloContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

(async () => {
  await apolloServer.start();

  app.use(
    '/',
    cors(),
    express.json(),
    expressMiddleware(apolloServer, {
      context: async ({ req }) => {
        // this is just a place holder for now
        return { token: 'token' };
      },
    })
  );

  httpServer.listen(4000, () => {
    // eslint-disable-next-line no-console
    console.log('Listening on port 4000');
  });
})();
