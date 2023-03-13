//-------- top level import and addAlias for compiled js -------------------------------
import { addAlias } from 'module-alias';
addAlias('@', __dirname);
// -------------------------------------------------------------------------------------

import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import cors from 'cors';
import express from 'express';
import http from 'http';

import { ApolloContext, resolvers, typeDef as typeDefs } from '@/apollo';
import { PORT } from '@/config/internal';

const app = express();
const httpServer = http.createServer(app);

const apolloServer: ApolloServer = new ApolloServer<ApolloContext>({
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
      // async ({req, res}) => {} express middleware context
      context: async () => {
        // this is just a place holder for now
        return { token: 'token' };
      },
    })
  );

  httpServer.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on port ${PORT}`);
  });
})();
