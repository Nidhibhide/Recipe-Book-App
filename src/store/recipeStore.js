//add to fav
//--and jab recipedetails dikhenge tab fav ka button nhi dikhana hai ( matlb check krna padgea curr id find krna hai in fav array agar ha toh return true otherwise false) kuch tag add krte hai and but remove from fav ka button dikhana hai
import { create } from "zustand";
import { persist } from "zustand/middleware";

const recipeStore = create(
  persist(
    (set, get) => ({
      recipe: [],
      favorite: [],

      addToStore: (item) => {
        set((state) => ({
          recipe: [...state.recipe, item],
        }));
      },
      getById: (id) => get().recipe.find((item) => item.id === id),
      removeFromStore: (id) => {
        set((state) => ({
          recipe: state.recipe.filter((item) => item.id !== id),
        }));
      },
      addtoFav: (item) => {
        set((state) => ({
          favorite: [...state.favorite, item],
        }));
      },
      checkFav: (id) => {
        return get().favorite.some((item) => id === item.id);
      },
      removeFromFav: (id) => {
        set((state) => ({
          favorite: state.favorite.filter((item) => item.id !== id),
        }));
      },
    }),
    {
      name: "recipe-storage",
    }
  )
);

export default recipeStore;
