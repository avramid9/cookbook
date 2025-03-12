import Recipe from "@/models/recipeModel";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  try {
    const recipe = await Recipe.findById((await props.params).id);
    return (
      <div>
        {recipe?.title as string}
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}
