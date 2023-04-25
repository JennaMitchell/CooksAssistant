const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, require: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  recipesRatedIdArray: { type: Array, required: true },
  recipesCreatedIdsArray: { type: Array, required: true },
  createdAt: { type: Date, expires: 3600 },
  recipesMadeIdsArray: { type: Array, required: true },
});

module.exports = mongoose.model("UserSchema", UserSchema);
