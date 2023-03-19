const express = require("express");
const { body } = require("express-validator");
const recipeController = require("../controllers/recipe-controller");
const isAuth = require("../middlewear/is-auth");
const router = express.Router();
// const {
//   acceptedRecipeCuisineTag,
//   acceptedRecipePreferenceTags,
//   acceptedRecipeTimes,
// } = require("../utilities/constants");
router.get("/get-all-recipe-data", recipeController.getAllRecipeData);
router.put(
  "/new-recipe",
  isAuth,
  [
    body("title").trim().not().isEmpty(),
    body("cookingTime").trim().not().isEmpty(),
  ],
  recipeController.createNewRecipe
);

router.get(
  "/get-filtered-recipe-data/:filter",
  recipeController.getRecipeDataWithFilter
);
module.exports = router;
