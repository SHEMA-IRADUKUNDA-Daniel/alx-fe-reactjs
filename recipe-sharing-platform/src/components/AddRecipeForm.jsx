import { useState } from "react";

export default function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim() || ingredients.split(",").length < 2)
      newErrors.ingredients =
        "Enter at least two ingredients, separated by commas";
    if (!instructions.trim())
      newErrors.instructions = "Instructions are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newRecipe = {
      id: Date.now(),
      title: title.trim(),
      ingredients: ingredients.split(",").map((i) => i.trim()),
      instructions: instructions.split("\n").map((s) => s.trim()),
      description: instructions.substring(0, 100) + "...",
      image: "/assets/placeholder-recipe.jpeg",
    };

    onAddRecipe(newRecipe);

    setTitle("");
    setIngredients("");
    setInstructions("");
    setErrors({});
  };

  return (
    <div className="max-w-3xl mx-auto p-5 md:p-6 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Add a New Recipe
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.title
                ? "border-red-500 ring-red-300"
                : "border-gray-300 ring-primary"
            }`}
            placeholder="Recipe Title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold text-gray-700 mb-1">
            Ingredients
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.ingredients
                ? "border-red-500 ring-red-300"
                : "border-gray-300 ring-primary"
            }`}
            placeholder="List ingredients separated by commas"
            rows={3}
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold text-gray-700 mb-1">
            preparation steps
          </label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.instructions
                ? "border-red-500 ring-red-300"
                : "border-gray-300 ring-primary"
            }`}
            placeholder="Step-by-step instructions"
            rows={5}
          ></textarea>
          {errors.instructions && (
            <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-primary-light text-blue-500 font-bold py-3 px-4 rounded-lg shadow-lg hover:from-primary-dark hover:to-primary-dark transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}
