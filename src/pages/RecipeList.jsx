import React from 'react'
import { Link } from '@tanstack/react-router';

const RecipeList = () => {
    const staticRecipes = [
  { id: 1, title: 'Spaghetti Carbonara' },
  { id: 2, title: 'Chicken Tikka Masala' },
  { id: 3, title: 'Beef Stroganoff' },
  { id: 4, title: 'Vegetable Stir Fry' },
  { id: 5, title: 'Paneer Butter Masala' },
];
  return (
   <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">All Recipes</h1>
      
      {staticRecipes.length === 0 ? (
        <p className="text-gray-500 text-center">No recipes found</p>
      ) : (
        <div className="space-y-4">
          {staticRecipes.map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipe/${recipe.id}`}
              className="block p-4 bg-white rounded-xl shadow hover:bg-blue-100 transition"
            >
              <div className="text-lg font-medium text-blue-800">{recipe.title}</div>
            </Link>
          ))}
        </div>
      )}
    </div> 
  )
}

export default RecipeList