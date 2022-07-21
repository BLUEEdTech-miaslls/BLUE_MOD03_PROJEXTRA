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
import { validMoodId, validMoodBody } from '../middleware/product.middleware.js';

router.get('/', getAllProductsController);
router.post('/', validMoodBody, addProductController);
router.get('/:id', validMoodId, findProductByIdController);
router.put('/:id', validMoodId, validMoodBody, updateProductController);
router.delete('/:id', validMoodId, deleteProductController);

export default router;
