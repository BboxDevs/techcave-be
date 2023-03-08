import { pathJoin, readFile } from '@/utils/helpers';

export const typeDef = readFile(pathJoin(__dirname, 'schema.graphql'));
