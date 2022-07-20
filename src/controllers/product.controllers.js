'use strict';

import { getAllProductsService } from '../services/product.services.js';

export const getAllProductsController = async (req, res) => {
  const products = await getAllProductsService();

  if (!products) {
    res.status(404).send({ message: 'not found' });
  }

  res.send(products);
};
