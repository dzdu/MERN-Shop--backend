const Category = require('../models/category');
const slugify = require('slugify');

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await new Category({ name, slug: slugify(name) }).save();
    res.json(category);
  } catch (error) {
    console.log(error);
    res.status(400).send('Create category failed');
  }
};
exports.read = async (req, res) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug }).exec();
    res.json(category);
  } catch (error) {
    console.error;
    res.status(400).send('Read category failed');
  }
};
exports.update = async (req, res) => {
  try {
    const { name } = req.body;
    const update = await Category.findOneAndUpdate(
      { slug: req.params.slug },
      { name: name, slug: slugify(name) },
      { new: true },
    ).exec();
    res.json(update);
  } catch (error) {
    console.log(error);
    res.status(400).send('Update failed');
  }
};
exports.remove = async (req, res) => {
  try {
    const deleted = await Category.findOneAndDelete({ slug: req.params.slug });
    res.json(deleted);
  } catch (error) {
    console.log(error);
    res.status(400).send('Remove failed');
  }
};
exports.list = async (req, res) => {
  try {
    const list = await Category.find({}).sort({ createdAt: -1 }).exec();
    res.json(list);
  } catch (error) {
    console.log(error);
    res.status(400).send('something went wrong');
  }
};
