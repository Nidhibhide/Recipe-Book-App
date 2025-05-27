import { useNavigate } from "@tanstack/react-router";
import { Route } from "../routes/recipe.$id";
import recipeStore from "../store/recipeStore";

function RecipeDetails() {
  const { id } = Route.useParams();
  const navigate = useNavigate();

  const recipe = recipeStore((state) => state.getById(Number(id)));
  const removeFromList = recipeStore((state) => state.removeFromStore);
  const removeFromFav = recipeStore((state) => state.removeFromFav);
  const addtoFav = recipeStore((state) => state.addtoFav);
  const hasFavorite = recipeStore((state) => state.checkFav(Number(id)));

  if (!recipe) {
    return <div className="text-center text-red-500">Recipe not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 mt-8 bg-white rounded-lg shadow">
      <h2 className="text-3xl font-bold mb-4 text-blue-800">{recipe.title}</h2>
      <p className="text-sm text-gray-500 mb-2">{recipe.category}</p>

      <div className="mb-4">
        <h3 className="font-semibold text-lg text-gray-700 mb-1">
          Ingredients
        </h3>
        <p className="text-gray-800 whitespace-pre-line">
          {recipe.ingredients}
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-lg text-gray-700 mb-1">
          Instructions
        </h3>
        <p className="text-gray-800 whitespace-pre-line">
          {recipe.instructions}
        </p>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => {
            hasFavorite ? removeFromFav(recipe.id) : addtoFav(recipe);
            hasFavorite
              ? navigate({ to: "/" })
              : navigate({ to: "/favorites" });
          }}
          className="px-4 py-2 rounded-lg text-white  bg-green-600
           hover:opacity-90"
        >
          {hasFavorite ? "Remove from Favorite" : "Add to Favorite"}
        </button>
        {!hasFavorite && (
          <button
            onClick={() => {
              removeFromList(recipe.id);
              navigate({ to: "/" });
            }}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
          >
            Remove from List
          </button>
        )}
      </div>
    </div>
  );
}

export default RecipeDetails;
