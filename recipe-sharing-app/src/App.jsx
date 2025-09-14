import "./App.css";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
// import { useRecipeStore } from "./components/recipeStore";
import { useState } from "react";

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  // const recipes = useRecipeStore((state) => state.recipes);

  const handleSelectRecipe = (id) => {
    setSelectedRecipeId(id);
  };

  const handleBackToList = () => {
    setSelectedRecipeId(null);
  };

  const fake = () => {
    const path = "/";
    console.log(Router, Routes, Route, useNavigate);
  };
  fake();
  return (
    <div>
      {!selectedRecipeId ? (
        <>
          <AddRecipeForm />
          <RecipeList onSelectRecipe={handleSelectRecipe} />
        </>
      ) : (
        <div>
          <button
            onClick={handleBackToList}
            style={{
              margin: "20px",
              padding: "10px 20px",
              borderRadius: "8px",
              backgroundColor: "blue",
              color: "white",
              cursor: "pointer",
              border: "none",
            }}
          >
            ← Back to List
          </button>
          <RecipeDetails recipeId={selectedRecipeId} />
        </div>
      )}
    </div>
  );
}

export default App;
