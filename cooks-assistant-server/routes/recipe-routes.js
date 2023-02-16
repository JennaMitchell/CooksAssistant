const express = require("express");
const { body } = require("express-validator");
const recipeController = require("../controllers/recipe-controller");
const isAuth = require("../middlewear/is-auth");
const router = express.Router();
const {
  acceptedRecipeCuisineTag,
  acceptedRecipePreferenceTags,
  acceptedRecipeTimes,
} = require("../utilities/constants");
router.get("/get-all-recipe-data", recipeController.getAllRecipeData);
router.post(
  "/new-recipe",
  isAuth,
  [
    body("title").trim().not().isEmpty(),
    body("cookingTimeInMinutes").trim().not().isEmpty(),
    body("imageUrl").trim().not().isEmpty(),
    body("tags").custom((value, { req }) => {
      const recipeTagsArray = JSON.parse(value);
      const seperatedRecievedCuisineTags = [];
      const seperatedRecievedPreferenceTags = [];
      const seperatedRecievedRecipeTimesTags = [];

      for (
        let seperateCuisineTagIndex = 0;
        seperateCuisineTagIndex < recipeTagsArray;
        seperateCuisineTagIndex++
      ) {
        if (
          acceptedRecipeCuisineTag.contains(
            recipeTagsArray[seperateCuisineTagIndex]
          )
        ) {
          seperatedRecievedCuisineTags.push(
            recipeTagsArray[seperateCuisineTagIndex]
          );
        }
      }
      for (
        let seperatePerferenceTagIndex = 0;
        seperatePerferenceTagIndex < recipeTagsArray;
        seperatePerferenceTagIndex++
      ) {
        if (
          acceptedRecipePreferenceTags.contains(
            recipeTagsArray[seperatePerferenceTagIndex]
          )
        ) {
          seperatedRecievedPreferenceTags.push(
            recipeTagsArray[seperatePerferenceTagIndex]
          );
        }
      }

      for (
        let seperateRecipeTagIndex = 0;
        seperateRecipeTagIndex < recipeTagsArray;
        seperateRecipeTagIndex++
      ) {
        if (
          acceptedRecipeTimes.contains(recipeTagsArray[seperateRecipeTagIndex])
        ) {
          seperatedRecievedRecipeTimesTags.push(
            recipeTagsArray[seperateRecipeTagIndex]
          );
        }
      }

      // Check to see if any invalid Tags were added

      if (
        seperatedRecievedCuisineTags.length +
          seperatedRecievedPreferenceTags.length +
          seperatedRecievedRecipeTimesTags.length !==
        recipeTagsArray.length
      ) {
        return Promise.reject("Invalid recipe tag detected!");
      }

      return true;
    }),
  ],
  recipeController.createNewRecipe
);
module.exports = router;
