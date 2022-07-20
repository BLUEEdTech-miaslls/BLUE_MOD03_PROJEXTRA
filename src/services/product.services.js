'use strict';

import Product from '../model/Product.js';

export const getAllProductsService = () => Product.find();
