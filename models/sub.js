const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const subCategorySchema = new mongoose.Schema(
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
    parent: { type: ObjectId, ref: 'Category', required: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model('SubCategory', subCategorySchema);
