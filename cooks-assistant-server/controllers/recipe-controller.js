const RecipeCardSchema = require("../models/recipe-data");
const { validationResult } = require("express-validator");
exports.getAllRecipeData = async (req, res) => {
  try {
    console.log(RecipeCardSchema);
    const result = await RecipeCardSchema.find();
    return res.status(201).json({
      message: "Data Retrieved!",
      retrievedData: result,
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

exports.createNewRecipe = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(401).send({
      error: errors.array(),
      message: `${errors["errors"][0].msg}`,
    });
  }
  const title = req.body.title;
  const cookingTimeInMinutes = req.body.cookingTimeInMinutes;
  const imageUrl = req.body.imageUrl;
  const tempTags = req.body.tags;
  const jsonedTags = JSON.parse(tempTags);

  try {
    const newRecipeCard = new RecipeCardSchema({
      title: title,
      cookingTimeInMinutes: cookingTimeInMinutes,
      imageUrl: imageUrl,
      tags: jsonedTags,
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
