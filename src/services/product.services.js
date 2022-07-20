'use strict';

import Product from '../model/Product.js';

export const getAllProductsService = () => Product.find();

export const addProductService = (body) => Product.create(body);
