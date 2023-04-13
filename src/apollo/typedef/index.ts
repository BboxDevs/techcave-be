import { readFile } from '@/utils/helpers';

// absolute path to schema.graphql to make sure that it's always pointing at src
// emitted code after compilation doesn't copy schema.graphql
export const typeDef = readFile('src/apollo/typedef/schema.graphql');
