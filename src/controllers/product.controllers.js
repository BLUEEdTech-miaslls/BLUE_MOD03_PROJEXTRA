'use strict';

import { getAllProductsService, addProductService } from '../services/product.services.js';

export const getAllProductsController = async (req, res) => {
  try {
    const products = await getAllProductsService();

    if (!products) {
      res.status(404).send({ message: 'not found' });
    }

    res.send(products);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const addProductController = async (req, res) => {
  try {
    const body = req.body;

    const product = await addProductService(body);

    res.send(product);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
