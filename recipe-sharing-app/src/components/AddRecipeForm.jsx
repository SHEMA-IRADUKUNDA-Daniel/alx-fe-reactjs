import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        gap: "10px",
        maxWidth: "60%",
        margin: "0 auto",
        marginTop: "200px",
      }}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{
          width: "400px",
          padding: "15px",
          // backgroundColor: "gray",
          border: "1px solid green",

          borderRadius: "10px",
        }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{
          width: "400px",
          padding: "15px",
          // backgroundColor: "gray",
          borderRadius: "10px",
          border: "1px solid green",
        }}
      />
      <button
        style={{
          backgroundColor: "blue",
          padding: "15px 25px ",
          color: "white",

          border: "none",
          cursor: "pointer",
          borderRadius: "8px",
          fontWeight: "bold",
        }}
        type="submit"
      >
        Add Recipe
      </button>
    </form>
  );
};
export default AddRecipeForm;
