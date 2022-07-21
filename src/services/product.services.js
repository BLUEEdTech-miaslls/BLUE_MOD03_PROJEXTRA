'use strict';

import Product from '../model/Product.js';

export const getAllProductsService = () => Product.find();

export const addProductService = (body) => Product.create(body);

export const findProductByIdService = (id) => Product.findById(id);

export const updateProductService = (id, body) => {
  return Product.findByIdAndUpdate(id, body).setOptions({ returnOriginal: false });
};
