import Recipe from "@/models/recipeModel";


export default async function GetRecipieUI() {

  try {
    const recipes = await Recipe.find({});
    if (recipes.length === 0) {
      return <h1>No recipes</h1>;
    } else {
      return (
        <div>
          {recipes.map((recipe) => (
            <div key={recipe._id as unknown as string}>
              <h3>{recipe.title as string}</h3>
              <p>{recipe.ingredients[0] as string}</p>
              <p>{recipe.steps[0] as string}</p>
            </div>
          ))}
        </div>
      );
    }
  } catch (error) {
    console.log(error);
  }
}