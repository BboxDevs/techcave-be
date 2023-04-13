import * as queries from './query';
import { roleEnum, urlScalar } from './scalar';

export const resolvers = {
  Url: urlScalar,
  Role: roleEnum,
  Query: queries,
};
