import 'dotenv/config';
import './database/datasource';
import express from 'express';
import cors from 'cors';
import { router } from './routers/index';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

export { app };
