const jwt = require('jsonwebtoken');
const User = require("../models/userModel");
const AppError = require("../util/appError");
const asyncCatcher = require("../util/asyncCatcher");

exports.signUp = asyncCatcher(async (req, res, next) => {
  const { email, name, password } = req.body;
  const newUser = await User.create({
    email,
    name,
    password,
  })
  const token = jwt.sign({ id: newUser._id, expiresIn: '90d' }, process.env.SECRET)
  res.status(201).json({
    status: "success",
    token,
  });
});

exports.login = asyncCatcher(async (req, res, next) => {
  const { email, password } = req.body
  const user = await User.findOne({ email: email.toLowerCase() }).select('+password');
  if (!user)
    return next(new AppError(401, "Username not valid"))

  const decoded = await user.checkPassword(password, user.password)
  if (!decoded)
    return next(new AppError(401, "Password not valid"))
  const token = jwt.sign({ id: user._id, expiresIn: '90d' }, process.env.SECRET)
  res.status(200).json({
    status: 'success',
    token
  })
})