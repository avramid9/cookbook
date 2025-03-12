import Recipe from "@/models/recipeModel";
import { ViewRecipe } from "@/components/buttons";


export default async function GetRecipieUI() {

  try {
    const recipes = await Recipe.find({});
    if (recipes.length === 0) {
      return <h1>No recipes</h1>;
    } else {
      return (
        <div className="grid grid-cols-4 gap-4 place-items-center">
          {recipes.map((recipe) => (
            <div key={recipe._id as unknown as string}>
              <div className="card bg-base-100 w-96 shadow-sm">
                <div className="card-body">
                  <h2 className="card-title">{recipe.title as string}</h2>
                  <p>Yummy!</p>
                  <div className="card-actions justify-end">
                    <ViewRecipe id={recipe._id as unknown as string}/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  } catch (error) {
    console.log(error);
  }
}