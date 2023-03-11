const mongoose = require("mongoose");

const RecipeCardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cookingTimeInMinutes: { type: String, required: true },
  tags: { type: Array, required: true },
  imageUrl: { type: String, required: true },
  recipeId: { type: String, required: true, unique: true },
  quote: { type: String, required: true },
  servings: { type: String, required: true },
  prepTime: { type: String, required: true },
  cookingTime: { type: String, required: true },
  ingredientsList: { type: Array, required: true },
  directionsList: { type: Array, required: true },
  notes: { type: Array, required: true },
  username: { type: String, required: true },
  selectedTemplateIndex: { type: String, required: true },
});

module.export = mongoose.model("RecipeCardSchema", RecipeCardSchema);
