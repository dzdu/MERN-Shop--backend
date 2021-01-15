const User = require('../models/user');
exports.createOrUpdateUser = async (req, res) => {
  try {
    const { name, picture, email } = req.user;
    const user = await User.findOneAndUpdate(
      { email },
      { name: email.split('@')[0], picture },
      { new: true },
    );
    if (user) {
      console.log('User updated', user);
      res.json(user);
    } else {
      const newUser = await new User({
        name: email.split('@')[0],
        email,
        picture,
      }).save();
      console.log('User created', newUser);
      res.json(newUser);
    }
  } catch (err) {
    console.log(err);
  }
};

exports.currentUser = async (req, res) => {
  try {
    User.findOne({ email: req.user.email }).exec((err, user) => {
      if (err) throw new Error(err);
      res.json(user);
    });
  } catch (e) {
    console.log(e);
  }
};
