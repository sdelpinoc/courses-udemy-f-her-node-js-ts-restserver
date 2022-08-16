# Notes - Section 17

- `npm init -y`

## Installations

- Typescript(Globally and locally)
    - `npm install --location=global typescript`
    - `npm install typescript --save-dev`

- ESLint
    - `npm install eslint --save-dev`

- Express, Cors, Dotenv
    - `npm install express cors dotenv`

- Install types of Cors:
    - `npm i --save-dev @types/cors`

- [sequelize](https://sequelize.org/docs/v6/getting-started/)
    - `npm install --save sequelize`
    - `npm install --save mysql2`

- express-validator
    - `npm install express-validator`

## Typescript

- Configure typescrip:
    - `tsc --init`
    - Create the tsconfig.json file

## ESLint

- Configure ESLint:
    - `npm init @eslint/config`

## Server express
- Create directory models, file server.ts

- To import express module, you need to add/install the declaration type of that module, as a development dependency
    - `npm i --save-dev @types/express`
- [More info](https://stackoverflow.com/a/51320328/19344890)

## Compile / Runñ

- To compile the .ts files(these compiled files will remain in the dist directory), we use:
    - `tsc`

- To run the application:
    - `nodemon dist/app.js`
    - `npm run dev` -> "scripts": "node ./dist/app.js"

- To watch the changes in the .ts files, we can use:
    - `tsc --watch`
- This must be implement in another terminal, since it should always be running

## Date base:

- Install mysql and phpmyadmin
