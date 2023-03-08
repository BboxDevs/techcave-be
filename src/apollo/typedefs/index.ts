import { pathJoin, readFile } from '@/utils/helpers';

export const typeDefs = readFile(pathJoin(__dirname, 'schema.graphql'));
