import { GraphQLScalarType, Kind } from 'graphql';

import { returnValidatedURL } from '@/utils/helpers';

export const urlScalar = new GraphQLScalarType({
  name: 'Url',
  description: 'Url custom scalar type',
  serialize(value) {
    return returnValidatedURL(value, () => {
      throw Error('GraphQL Url scalar type is expecting url string');
    });
  },
  parseValue(value) {
    return returnValidatedURL(value, () => {
      throw Error('GraphQL Url scalar type is expecting url string');
    });
  },
  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING) {
      return null;
    }

    return returnValidatedURL(ast.value, () => {
      throw Error('GraphQL Url scalar type is expecting url string');
    });
  },
});

export const roleEnum = {
  APPLICANT: 'APPLICANT',
  EMPLOYER: 'EMPLOYER',
  ADMIN: 'ADMIN',
};
