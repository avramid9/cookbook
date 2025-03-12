// Importing mongoose library along with Document and Model types from it
import mongoose, { Model } from "mongoose";

// Defining the structure of a recipe using TypeScript interfaces
export interface IRecipe {
  title: string;
  ingredients: [string];
  steps: [string];
}

// Defining a mongoose schema for the recipe document, specifying the types 
// and constraints
const recipeSchema = new mongoose.Schema<IRecipe>({
  title: String,
  ingredients: [String],
  steps: [String]
});

// Creating a mongoose model for the recipe document
const Recipe: Model<IRecipe> =
  mongoose.models?.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;