import express, { Application } from 'express';
import cors from 'cors';

import userRouter from '../routes/user';
import db from '../db/connection';
import { validateJSON } from '../middleware/validate-fields';

class Server {
    private app: Application;
    private port: string;
    private paths = {
        users: '/api/users/'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        // Connect DB
        this.connectionDb();

        this.middlewares();

        // Define the routes
        this.routes();
    }

    routes() {
        this.app.use(this.paths.users, userRouter);
    }

    async connectionDb() {
        try {
            await db.authenticate();
            console.log('Database connected');
        } catch (error: any) {
            throw new Error(error);
        }
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Parse body
        this.app.use(express.json());

        // Check JSON format
        this.app.use(validateJSON);

        // Public directory
        this.app.use(express.static('public'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running in port: ${this.port}`);
        });
    }
}

export default Server;
