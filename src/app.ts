import express, { Express } from 'express';

import rateLimiter from './middlewares/rateLimiter';
import setupSwagger from './swagger';
import bookRouter from './routes/bookRouter';
import MongoSanitize from './utils/mongoSanitize';
import './database/index'


const app: Express = express();

app.use(express.json());
setupSwagger(app);
// Use routes
app.use('/api', bookRouter);
app.use(MongoSanitize)
app.use(rateLimiter)

export default app;
