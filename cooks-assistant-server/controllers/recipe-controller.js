const RecipeCardSchema = require("../models/recipe-data");
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

exports.getRecipeDataWithFilter = async (req, res) => {
  try {
    const filter = JSON.parse(req.params.filter);
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
    console.log(39);
    const id = req.params.sentId;
    console.log(id);
    const result = await RecipeCardSchema.find({ _id: id });
    console.log(result);
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
      selectedTemplateIndex: req.body.selectedRecipeDishImageIndex,
      description: "",
      selectedRecipeDishImageIndex: req.body.selectedRecipeDishImageIndex,
      ratings: req.body.ratings,
      numberOfMakes: req.body.numberOfMakes,
    });
    await newRecipeCard.save();

    return res.status(201).json({
      message: "Recipe Card Added !",
      status: 201,
    });
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      message: "Server Error",
      error: [{ error: err }],
    });
  }
};
