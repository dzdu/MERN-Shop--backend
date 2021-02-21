const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: 'Name i required',
      minlength: [2, 'To short'],
      maxlength: [15, 'To long'],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Category', categorySchema);
