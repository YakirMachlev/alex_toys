const Toy = require("../models/toyModel");
const asyncCatcher = require("../util/asyncCatcher");

exports.getToys = asyncCatcher(async (req, res) => {
  const pageNum = req.query.page;
  const toys = await Toy.find().skip(pageNum * 10).limit(10);
  res.status(202).json({
    status: "success",
    data: toys,
  });
});

exports.createToy = asyncCatcher(async (req, res) => {
  const { name, info, category, img_url, price } = req.body;
  const userId = req.userId;
  const newToy = await Toy.create({ name, info, category, img_url, price, userId });
  res.status(201).json({
    status: "success",
    data: newToy,
  });
})

exports.fillterToys = asyncCatcher(async (req, res) => {
  const { search, pageNum } = req.query;
  const result = await Toy.find({ $or: [{ name: search, info: search }] }).skip(pageNum * 10).limit(10);
  res.status(203).json({
    status: "success",
    data: toys,
  })
});

exports.getToyByCat = asyncCatcher(async (req, res) => {
  const { pageNum } = req.query;
  const { catname } = req.params;
  const toys = await Toy.find({ category: catname }).skip(pageNum * 10).limit(10);
  res.status(203).json({
    status: "success",
    data: toys,
  })
});

exports.updateToy = asyncCatcher(async (req, res) => {
  const { name, info, category, img_url, price } = req.body;
  const { editId } = req.params;
  const userId = req.userId;
  const editedToy = await Toy.findByIdAndUpdate(editId, { name, info, category, img_url, price, userId })
  res.status(200).json({
    status: "success",
    data: editedToy,
  })
});

exports.deleteToy = asyncCatcher(async (req, res) => {
  const { delId } = req.params;
  const deletedToy = await Toy.findByIdAndDelete(delId);
  res.status(204).json({
    status: "success",
    data: deletedToy,
  })
});

exports.fillterToysByPrice = asyncCatcher(async (req, res) => {
  const { pageNum, min, max } = req.query;
  const fillteredToys = await Toy.find({ price: { $gt: min, $lt: max } }).skip(pageNum * 10).limit(10);
  res.status(203).json({
    status: "success",
    data: fillteredToys,
  })
});

exports.getToyById = asyncCatcher(async (req, res) => {
  const { id } = req.params;
  const toy = await Toy.findById(id);
  res.status(201).json({
    status: "success",
    data: toy,
  })
});