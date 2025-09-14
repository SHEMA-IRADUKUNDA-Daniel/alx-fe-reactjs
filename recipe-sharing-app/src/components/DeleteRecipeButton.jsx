import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";
export default function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(recipeId);
      alert("Recipe deleted!");
      navigate("/App");
    }
  };
  const navigate = useNavigate();

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-600"
    >
      Delete Recipe
    </button>
  );
}
