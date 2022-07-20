'use strict';

import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    barCode: { type: Number, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    amount: { type: Number, required: true },
  },
  { versionKey: false },
);

const Product = mongoose.model('Product', ProductSchema, 'products');

export default Product;
