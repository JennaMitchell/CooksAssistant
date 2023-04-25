const express = require("express");
const { body } = require("express-validator");
const authController = require("../controllers/auth-controller");
const isAuth = require("../middlewear/is-auth");
const router = express.Router();
const UserSchema = require("../models/user-schema");
router.put(
  "/signup",
  [
    body("email")
      .isEmail()
      .custom((value, { req }) => {
        return UserSchema.findOne({ email: value }).then((foundEmail) => {
          if (foundEmail) {
            return Promise.reject("E-mail address already in use!");
          }
        });
      })
      .normalizeEmail(),
    body("password").trim().isLength({ min: 8 }),
    body("username")
      .trim()
      .not()
      .isEmpty()
      .custom((value, { req }) => {
        return UserSchema.findOne({ username: value }).then((foundUsername) => {
          if (foundUsername) {
            return Promise.reject("Username in use !");
          }
        });
      }),
  ],
  authController.signup
);

router.post("/login", [
  body("email")
    .isEmail()
    .custom((value, { req }) => {
      return (
        UserSchema.findOne({ email: value })
          .then((foundEmail) => {
            if (!foundEmail) {
              return Promise.reject("No email found!");
            }
          })
          .normalizeEmail(),
        body("password").trim().isLength({ min: 8 })
      );
    }),
]);
router.put(
  "/update-userRatedRecipesArray",
  isAuth,
  authController.updateUserRatedRecipesArray
);

router.put(
  "/update-userMadeRecipesArray",
  isAuth,
  authController.updateUserRecipesMadeArray
);

module.exports = router;
