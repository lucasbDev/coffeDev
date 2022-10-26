import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors"
import { routes } from './modules/routes/routes';

const app = express();

app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            message: err.message,
        })
    }
})

app.listen(3000, () => {
    console.log('server is runnin')
})