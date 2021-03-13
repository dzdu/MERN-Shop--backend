const SubCategory = require('../models/sub');
const slugify = require('slugify');

exports.create = async (req, res) => {
  try {
    const { name, parent } = req.body;
    const sub = await new SubCategory({ name, parent, slug: slugify(name) }).save();
    res.json(sub);
  } catch (error) {
    console.log(error);
    res.status(400).send('Create sub-category failed');
  }
};
exports.read = async (req, res) => {
  try {
    const sub = await SubCategory.findOne({ slug: req.params.slug }).exec();
    res.json(sub);
  } catch (error) {
    console.error;
    res.status(400).send('Read sub-category failed');
  }
};
exports.update = async (req, res) => {
  try {
    const { name, parent } = req.body;
    const update = await SubCategory.findOneAndUpdate(
      { slug: req.params.slug },
      { name: name, parent, slug: slugify(name) },
      { new: true },
    ).exec();
    res.json(update);
  } catch (error) {
    console.log(error);
    res.status(400).send('Sub Update failed');
  }
};
exports.remove = async (req, res) => {
  try {
    const deleted = await SubCategory.findOneAndDelete({ slug: req.params.slug });
    res.json(deleted);
  } catch (error) {
    console.log(error);
    res.status(400).send('Sub Remove failed');
  }
};
exports.list = async (req, res) => {
  try {
    const list = await SubCategory.find({}).sort({ createdAt: -1 }).exec();
    res.json(list);
  } catch (error) {
    console.log(error);
    res.status(400).send('SUB - something went wrong');
  }
};
