const mongoose = require("mongoose");

const RecipeCardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cookingTimeInMinutes: { type: String, required: true },
  tags: { type: Array, required: true },
  imageUrl: { type: String, required: true },
});

module.export = mongoose.model("RecipeCardSchema", RecipeCardSchema);
