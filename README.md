# Techcave Backend API

## Tech stacks

- Express
- GraphQL
- Prisma

## Requirements

- Node.js v16
- Yarn (preferred) >= v1

## Running on local development

1. Run `yarn` to install of the dependencies
2. Run `yarn dev` to run local server

## Additional information

This section is not necessarily needed in development. But just some notes included during setup

### Graphql types

1. Run `yarn add -D @graphql-codegen/cli`. This module is used to generate types based from graphql type definitions
2. Run `npx graphql-codegen init`. Follow the prompts
3. Run `yarn` to install additional dependencies added during init
4. Run `yarn [codegen]` to generate the types where [codegen] is the answer you provided in one of the prompts from step 3 (What script in package.json should run the codegen?)

**Note:** If you have implemented strict linting, you would need to add `/* eslint-disable @typescript-eslint/ban-types */` on the generated file, or add the file to `ignorePatterns` on eslint.

### Module-Alias

Since path mapping has been implemented on tsconfig, issues arise when src was compiled as the mapping didn't really work on the compiled javascript codes.

- Added package [module-alias](https://www.npmjs.com/package/module-alias) to fix the issues.

- Included the following code on the top level of the entrypoint file:
  ```
  import { addAlias } from 'module-alias';
  addAlias('@', __dirname);
  ```
- The reason for adding this programmatically and not on the package.json is due to issues when running `yarn dev`. There's no guarantee that `dist` folder exists at the time on running locally on dev.
