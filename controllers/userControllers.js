const User = require("./../models/userModel");
const asyncCatcher = require("../util/asyncCatcher");
const mongoose = require("mongoose");

exports.getUserById = asyncCatcher(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findById(id);
  res.status(200).json({
    status: "success",
    user,
  });

});


