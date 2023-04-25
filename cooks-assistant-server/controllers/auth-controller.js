const { validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserSchema = require("../models/user-schema");

exports.signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(401).json({
      error: errors.array(),
      message: `${errors["errors"][0].msg}`,
    });
    return;
  }

  const recievedEmail = req.body.email;
  const recievedUsername = req.body.username;
  const recievedPassword = req.body.password;
  const recipeRatedIdsArray = req.body.recipesRatedIdArray;
  const recipesCreatedIdsArray = req.body.recipesCreatedIdsArray;
  const recipesMadeIdsArray = req.body.recipesMadeIdsArray;

  try {
    const hashedPw = await bcrypt.hash(recievedPassword, 12);
    const currentDate = new Date();

    const newUser = new UserSchema({
      email: recievedEmail,
      password: hashedPw,
      username: recievedUsername,
      recipeRatedIdsArray: recipeRatedIdsArray,
      recipesCreatedIdsArray: recipesCreatedIdsArray,
      recipesMadeIdsArray: recipesMadeIdsArray,
      createdAt: currentDate,
    });
    const result = await newUser.save();

    const token = jwt.sign(
      {
        email: recievedEmail,
        userId: result._id,
      },
      process.env.JSW_PASS,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      message: "User created!",
      userId: result._id,
      token: token,
      status: 201,
    });
  } catch (err) {
    return res.status(401).json({
      message: `Server Error!`,
      error: [{ error: "Server Error" }],
    });
  }
};

exports.login = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(401).json({
      error: errors.array(),
      message: `${errors["errors"][0].msg}`,
    });
    return;
  }

  const recievedEmail = req.body.email;
  const recievedPassword = req.body.password;
  let loadedUser;

  try {
    const user = await UserSchema.findOne({ email: recievedEmail });

    loadedUser = user;
    const usernameMatched = await bcrypt.compare(
      recievedPassword,
      user.password
    );

    if (!usernameMatched) {
      res.status(401).json({
        message: `Invalid Password!`,
        error: [{ error: "Invalid Password" }],
      });
      return;
    }

    const token = jwt.sign(
      {
        email: loadedUser.email,
        userId: loadedUser._id.toString(),
      },
      process.env.JSW_PASS,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      token: token,
      userId: loadedUser._id.toString(),
      email: loadedUser.email,
      message: "Logged In",
      username: loadedUser.username,
    });
  } catch (err) {
    return res.status(401).json({
      message: `Server Error!`,
      error: [{ error: "Server Error" }],
    });
  }
};

exports.updateUserRatedRecipesArray = async (req, res) => {
  try {
    const username = req.body.username;
    const newRatedArray = req.body.recipeRatingArray;

    const userDataToUpdate = await UserSchema.find({ username: username });

    userDataToUpdate[0].recipesRatedIdArray = newRatedArray;
    userDataToUpdate[0].save();

    return res.status(201).json({
      message: "User Recipe Ratings Array Updated!",
      status: 201,
    });
  } catch (err) {
    return res.status(401).json({
      message: `Server Error!`,
      error: [{ error: "Server Error" }],
    });
  }
};
exports.updateUserRatedRecipesArray = async (req, res) => {
  try {
    const username = req.body.username;
    const newRatedArray = req.body.recipeRatingArray;

    const userDataToUpdate = await UserSchema.find({ username: username });

    userDataToUpdate[0].recipesRatedIdArray = newRatedArray;
    userDataToUpdate[0].save();

    return res.status(201).json({
      message: "User Recipe Ratings Array Updated!",
      status: 201,
    });
  } catch (err) {
    return res.status(401).json({
      message: `Server Error!`,
      error: [{ error: "Server Error" }],
    });
  }
};
exports.updateUserRecipesMadeArray = async (req, res) => {
  try {
    const username = req.body.username;
    const newRecipesMadeIdsArray = req.body.recipeMadeArray;
    console.log(163);

    const userDataToUpdate = await UserSchema.find({ username: username });

    userDataToUpdate[0].recipesMadeIdsArray = newRecipesMadeIdsArray;

    userDataToUpdate[0].save();
    return res.status(201).json({
      message: "User Recipe Ratings Array Updated!",
      status: 201,
    });
  } catch (err) {
    return res.status(401).json({
      message: `Server Error!`,
      error: [{ error: "Server Error" }],
    });
  }
};
