'use strict';

import {
  getAllProductsService,
  addProductService,
  findProductByIdService,
  updateProductService,
  deleteProductService,
} from '../services/product.services.js';

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

export const findProductByIdController = async (req, res) => {
  try {
    const idParam = req.params.id;

    const product = await findProductByIdService(idParam);

    if (!product) {
      res.status(404).send({ message: 'not found' });
    }

    res.send(product);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const updateProductController = async (req, res) => {
  try {
    const idParam = req.params.id;
    const body = req.body;

    const productById = await findProductByIdService(idParam);

    if (!productById) {
      res.status(404).send({ message: 'not found' });
    }

    const product = await updateProductService(idParam, body);

    res.send(product);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const deleteProductController = async (req, res) => {
  try {
    const idParam = req.params.id;

    const productById = await findProductByIdService(idParam);

    if (!productById) {
      res.status(404).send({ message: 'not found' });
    }

    await deleteProductService(idParam);

    res.send({ message: 'deleted' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
