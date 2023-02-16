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

  try {
    const hashedPw = await bcrypt.hash(recievedPassword, 12);
    const currentDate = new Date();

    const newUser = new UserSchema({
      email: recievedEmail,
      password: hashedPw,
      username: recievedUsername,
      createdAt: currentDate,
    });
    const result = await newUser.save();

    res.status(201).json({
      message: "User created!",
      userId: result._id,
      status: 201,
    });
  } catch (err) {
    console.log(err);
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
      isSeller: loadedUser.isSeller,
      message: "Logged In",
      username: loadedUser.username,
    });
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      message: `Server Error!`,
      error: [{ error: "Server Error" }],
    });
  }
};
