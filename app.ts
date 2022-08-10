import dotenv from 'dotenv';

// Config dotenv, environment variables
dotenv.config();

import Server from './models/server';

const server = new Server();

server.listen();
