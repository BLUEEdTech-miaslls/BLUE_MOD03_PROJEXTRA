'use strict';

import express from 'express';
const router = express.Router();

import { getAllProductsController } from '../controllers/product.controllers.js';
import {} from '../middleware/product.middleware.js';

router.get('/', getAllProductsController);

export default router;
