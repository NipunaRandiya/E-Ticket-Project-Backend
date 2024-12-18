const Checker = require("../model/Checker");
const asyncHandler = require("express-async-handler");
const bycrypt = require("bcrypt");
const fsPromises = require("fs").promises;

const getCheckers = asyncHandler(async (req, res) => {
  const checkers = await Checker.find().select("-password").lean();

  if (!checkers) {
    return res.sendStatus(404);
  }
  if (!checkers.length) {
    return res.sendStatus(204);
  }
  res.json(checkers);
});

//add a checker
const addChecker = asyncHandler(async (req, res) => {
  console.log("now called add checker function");
  const { name, email, password, telephone, companyName } = req.body;

  if (!name || !email || !password || !telephone || !companyName) {
    res.sendStatus(400);
  }

  //check if the checker already exists
  const checkerExists = await Checker.findOne({ name });

  if (checkerExists) {
    return res.sendStatus(409);
  }

  //hash the password
  const hashedPassword = await bycrypt.hash(password, 10);
  const checker = new Checker({
    name,
    email,
    password: hashedPassword,
    telephone,
    companyName,
    url: req.file.filename,
  });

  await checker.save();

  res.sendStatus(201);
});

//delete a checker
const deleteChecker = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.sendStatus(400);
  }
  const checkerUrl = await Checker.findById(id).select("url");

  await Checker.findByIdAndDelete(id);

  await fsPromises.unlink(`./uploads/checkers/${checkerUrl.url}`);

  res.sendStatus(200);
});

module.exports = { getCheckers, addChecker, deleteChecker };
