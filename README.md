# Techcave Backend API

## Tech stacks

- Express
- Apollo Server
- GraphQL
- Prisma
- Postgres

## Requirements

- Node.js v16
- Yarn (preferred) >= v1

## Running on local development

1. Run `yarn` to install of the dependencies
2. Run `yarn dev` to run local server
3. Run `yarn db:reset` to migrate prisma models to database. Be warned that this command will delete all of the existing data on your database

## Running on docker development

### Requirements

1. Docker
2. Docker-compose

### Development

1. To start docker services, run `yarn dev:docker:up`. This will pull all the images from the registry if it's not already in your local computer. This will also migrate the models into the database and does the seeding as well
2. To stop docker services, run `yarn dev:docker:down`. `-v` was not passed on the actual docker-compose command to have the data persist.

## Models

There are two different models used for this project:

1. Graphql - for any requests

   - Run `yarn generate` after making any changes in `schema.graphql`. This will update the generated types for ts.

2. Prisma - for database service

   - Run `yarn db:migrate` after making any changes in `schema.prisma`. This will update the connected database and the prisma client.

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

### Prisma

- `prisma generate` is included under the hood of `prisma migrate dev`
- `prisma migrate dev` and `prisma reset` also runs the seeding automatically as long as the following can be found on package.json
  ```
  "prisma": {
      "seed": [seeding script here]
  }
  ```
  1. You can skip the seeding by adding `--skip-seed` flag on `prisma migrate dev` or `prisma migrate rest`
  2. Some note: for some reason, seeding was not working on `prisma migrate dev`. There might be some missing information. Please add to issue if reason behind it is found.
