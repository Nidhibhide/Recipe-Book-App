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
