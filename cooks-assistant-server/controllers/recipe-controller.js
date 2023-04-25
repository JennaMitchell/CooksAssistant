const RecipeCardSchema = require("../models/recipe-data");
const UserSchema = require("../models/user-schema");
const { validationResult } = require("express-validator");
exports.getAllRecipeData = async (req, res) => {
  try {
    const result = await RecipeCardSchema.find();
    return res.status(201).json({
      message: "Data Retrieved!",
      retrievedData: result,
      status: 201,
    });
  } catch (err) {
    return res.status(401).json({
      message: `Server Error!`,
      error: [{ error: "Server Error" }],
    });
  }
};

exports.getRecipeDataByRating = async (req, res) => {
  try {
    const greaterThan = req.params.greaterThan;
    const lessThan = req.params.lessThan;

    if (+greaterThan === 5 && +lessThan === 5) {
      const result = await RecipeCardSchema.find({
        ratings: 5,
      });

      return res.status(201).json({
        message: "Data Retrieved!",
        retrievedData: result,
        status: 201,
      });
    } else {
      const result = await RecipeCardSchema.find({
        ratings: { $gte: +greaterThan, $lte: +lessThan },
      });

      return res.status(201).json({
        message: "Data Retrieved!",
        retrievedData: result,
        status: 201,
      });
    }
  } catch (err) {
    return res.status(401).json({
      message: `Server Error!`,
      error: [{ error: "Server Error" }],
    });
  }
};

exports.getRecipeDataWithFilter = async (req, res) => {
  try {
    const filter = req.params.filter;

    const result = await RecipeCardSchema.find({ tags: { $all: filter } });

    return res.status(201).json({
      message: "Data Retrieved!",
      retrievedData: result,
      status: 201,
    });
  } catch (err) {
    return res.status(401).json({
      message: `Server Error!`,
      error: [{ error: "Server Error" }],
    });
  }
};

exports.getRecipeDataById = async (req, res) => {
  try {
    const id = req.params.sentId;

    const result = await RecipeCardSchema.find({ _id: id });

    return res.status(201).json({
      message: "Data Retrieved!",
      retrievedData: result,
      status: 201,
    });
  } catch (err) {
    return res.status(401).json({
      message: `Server Error!`,
      error: [{ error: "Server Error" }],
    });
  }
};
exports.getRecipeDataByTitle = async (req, res) => {
  try {
    const title = req.params.title;

    const result = await RecipeCardSchema.find({
      title: {
        $regex: title,
      },
    });

    return res.status(201).json({
      message: "Data Retrieved!",
      retrievedData: result,
      status: 201,
    });
  } catch (err) {
    return res.status(401).json({
      message: `Server Error!`,
      error: [{ error: "Server Error" }],
    });
  }
};

exports.createNewRecipe = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(401).send({
      error: errors.array(),
      message: `${errors["errors"][0].msg}`,
    });
  }

  try {
    const newRecipeCard = new RecipeCardSchema({
      title: req.body.title,
      cookingTime: req.body.cookingTime,
      tags: req.body.tags,
      quote: req.body.quote,
      servings: req.body.servings,
      prepTime: req.body.prepTime,
      ingredientsList: req.body.ingredientsList,
      directionsList: req.body.directionsList,
      notes: req.body.notes,
      username: req.body.username,
      selectedTemplateIndex: req.body.selectedTemplateIndex,
      description: "",
      selectedRecipeDishImageIndex: req.body.selectedRecipeDishImageIndex,
      ratings: req.body.ratings,
      numberOfMakes: req.body.numberOfMakes,
    });
    await newRecipeCard.save();

    return res.status(201).json({
      message: "Recipe Card Added !",
      newRecipeCard: newRecipeCard,
      status: 201,
    });
  } catch (err) {
    return res.status(401).json({
      message: "Server Error",
      error: [{ error: err }],
    });
  }
};

exports.getRecipeDataByTitle = async (req, res) => {
  try {
    const title = req.params.title;
    const result = await RecipeCardSchema.find({
      title: {
        $regex: title,
      },
    });

    return res.status(201).json({
      message: "Data Retrieved!",
      retrievedData: result,
      status: 201,
    });
  } catch (err) {
    return res.status(401).json({
      message: `Server Error!`,
      error: [{ error: "Server Error" }],
    });
  }
};

exports.updateRecipeDataRatings = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const newRatingsArray = req.body;

    const recipeToUpdate = await RecipeCardSchema.findById({ _id: recipeId });

    recipeToUpdate.ratings = newRatingsArray;

    recipeToUpdate.save();

    return res.status(201).json({
      message: "Recipe Rating Updated!",
      status: 201,
    });
  } catch (err) {
    return res.status(401).json({
      message: `Server Error!`,
      error: [{ error: "Server Error" }],
    });
  }
};

exports.updateRecipeDataNumberOfMakes = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const newNumberOfMakes = req.body.numberOfMakes;

    const recipeToUpdate = await RecipeCardSchema.findById({ _id: recipeId });

    recipeToUpdate.numberOfMakes = newNumberOfMakes;

    recipeToUpdate.save();

    return res.status(201).json({
      message: "Recipe Number of Makes Updated!",
      status: 201,
    });
  } catch (err) {
    return res.status(401).json({
      message: `Server Error!`,
      error: [{ error: "Server Error" }],
    });
  }
};
exports.updateCreatedRecipesIdArray = async (req, res) => {
  try {
    console.log(225);
    const username = req.body.username;
    console.log(username);
    const newCreatedIdsArray = req.body.createdIdsArray;
    console.log(newCreatedIdsArray);
    const userDataToUpdate = await UserSchema.find({ username: username });
    userDataToUpdate[0].recipesCreatedIdsArray = newCreatedIdsArray;
    userDataToUpdate[0].save();

    return res.status(201).json({
      message: "User Data Updated!",
      status: 201,
    });
  } catch (err) {
    return res.status(401).json({
      message: `Server Error!`,
      error: [{ error: "Server Error" }],
    });
  }
};
