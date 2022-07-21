'use strict';

import express from 'express';
const router = express.Router();

import {
  getAllProductsController,
  addProductController,
  findProductByIdController,
  updateProductController,
  deleteProductController,
} from '../controllers/product.controllers.js';
import {} from '../middleware/product.middleware.js';

router.get('/', getAllProductsController);
router.post('/', addProductController);
router.get('/:id', findProductByIdController);
router.put('/:id', updateProductController);
router.delete('/:id', deleteProductController);

export default router;
