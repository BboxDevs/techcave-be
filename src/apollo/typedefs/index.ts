import path from 'path';

import { readFile } from '@/utils/helpers';

export const typeDefs = readFile(path.join(__dirname, 'schema.graphql'));
