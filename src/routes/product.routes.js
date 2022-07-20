'use strict';

import express from 'express';
const router = express.Router();

import {
  getAllProductsController,
  addProductController,
} from '../controllers/product.controllers.js';
import {} from '../middleware/product.middleware.js';

router.get('/', getAllProductsController);
router.post('/', addProductController);

export default router;
