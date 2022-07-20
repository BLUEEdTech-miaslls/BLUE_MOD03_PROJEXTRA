'use strict';

import express from 'express';
import cors from 'cors';
import databaseConnection from './database/dbConnection.js';
import productRoutes from './routes/product.routes.js';
import {} from './middleware/product.middleware.js';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

databaseConnection();

app.use(cors());
app.use(express.json());
app.use('/product', productRoutes);

app.listen(port, () => console.log(`server running @ port ${port}`));
