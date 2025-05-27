import recipeStore from "../store/recipeStore";
import { useNavigate } from "@tanstack/react-router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function AddRecipe() {
  const navigate = useNavigate();
  const addRecipe = recipeStore((state) => state.addToStore);
  // Validation Schema
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    ingredients: Yup.string().required("Ingredients are required"),
    instructions: Yup.string().required("Instructions are required"),
    category: Yup.string().required("Category is required"),
  });

  // Submit handler
  const handleSubmit = (values) => {
    const id = Math.floor(10 + Math.random() * 90);
    values.id = id;
    addRecipe(values);
    navigate({ to: "/" });
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-8 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">
        Add a New Recipe
      </h2>

      <Formik
        initialValues={{
          title: "",
          ingredients: "",
          instructions: "",
          category: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <Field
              name="title"
              type="text"
              placeholder="Enter recipe title"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Ingredients
            </label>
            <Field
              name="ingredients"
              as="textarea"
              rows="3"
              placeholder="List ingredients (e.g., flour, sugar...)"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <ErrorMessage
              name="ingredients"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Instructions */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Instructions
            </label>
            <Field
              name="instructions"
              as="textarea"
              rows="4"
              placeholder="Step-by-step cooking instructions"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <ErrorMessage
              name="instructions"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <Field
              name="category"
              as="select"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select category</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Dessert">Dessert</option>
            </Field>
            <ErrorMessage
              name="category"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Recipe
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddRecipe;
