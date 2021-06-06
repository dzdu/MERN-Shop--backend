const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlexngth: 32,
      text: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
      text: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      maxlexngth: 32,
      text: true,
    },
    // category: {
    //     type: ObjectId,
    //     ref: "Category"
    // },
    // subs: [{
    //     type: ObjectId,
    //     ref: "SubCategory"
    // }],
    quantity: Number,
    sold: {
      type: Number,
      default: 0,
    },
    // images: {
    //     type: Array
    // },
    shipping: {
      type: String,
      enum: ['Yes', 'No'],
    },
    color: {
      type: String,
      enum: ['Black', 'White', 'Red', 'Gold', 'Silver', 'Green', 'Blue', 'Multicolor'],
    },
    brand: {
      type: String,
      enum: ['Apple', 'Samsung', 'HP', 'Xiaomi', 'Lenovo', 'LG', 'Microsoft', 'Huawei', 'Asus'],
    },
    // rating: [{
    //     star: Number,
    //     postedBy: {type: ObjectId, ref: "User"}
    // }]
  },
  { timestamps: true },
);

module.exports = mongoose.model('Product', productSchema);
