import recipeStore from "../store/recipeStore";
import { Link } from "@tanstack/react-router";

const RecipeList = () => {
  const recipes = recipeStore((state) => state.recipe);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">All Recipes</h1>

      {recipes?.length === 0 ? (
        <p className="text-gray-500 text-center">No recipes found</p>
      ) : (
        <div className="space-y-4">
          {recipes?.map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipe/${recipe?.id}`}
              className="block p-4 bg-white rounded-xl shadow hover:bg-blue-100 transition"
            >
              <div className="text-lg font-medium text-blue-800">
                {recipe?.title}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;
