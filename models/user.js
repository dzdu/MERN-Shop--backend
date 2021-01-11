const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

export const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      index: true,
    },
    role: {
      type: String,
      default: 'subscriber',
    },
    cart: {
      type: Array,
      default: [],
    },
    address: String,
    // wishlist: [{ type: ObjectId, ref: 'Product' }],
  },
  { timestamps: true },
);

console.log(userSchema);
