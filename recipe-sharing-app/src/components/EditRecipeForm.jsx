import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

export default function EditRecipeForm({ recipe }) {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ ...recipe, title, description });
    alert("Recipe updated!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 border-t pt-4 mt-4">
      <h2 className="text-xl font-semibold">Edit Recipe</h2>
      <div>
        <label className="block mb-1">Title</label>
        <input
          className="border rounded px-2 py-1 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-1">Description</label>
        <textarea
          className="border rounded px-2 py-1 w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save Changes
      </button>
    </form>
  );
}
