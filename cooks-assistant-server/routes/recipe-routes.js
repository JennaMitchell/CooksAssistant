const express = require("express");
const { body } = require("express-validator");
const recipeController = require("../controllers/recipe-controller");
const isAuth = require("../middlewear/is-auth");
const router = express.Router();

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

router.put(
  "/update-user-data-createdRecipesIdArray",
  isAuth,
  recipeController.updateCreatedRecipesIdArray
);

router.get(
  "/get-filtered-recipe-data/:filter",
  recipeController.getRecipeDataWithFilter
);

router.get("/get-recipe-by-id/:sentId", recipeController.getRecipeDataById);
router.get(
  "/get-recipe-by-title/:title",
  recipeController.getRecipeDataByTitle
);
router.get(
  "/get-recipe-by-rating/:greaterThan&&:lessThan",
  recipeController.getRecipeDataByRating
);
router.put(
  "/update-recipe-rating/:id",
  recipeController.updateRecipeDataRatings
);

router.put(
  "/update-recipe-numberOfMakes/:id",
  recipeController.updateRecipeDataNumberOfMakes
);

module.exports = router;
