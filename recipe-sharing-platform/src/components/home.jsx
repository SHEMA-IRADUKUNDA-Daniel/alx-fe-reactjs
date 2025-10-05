import React from "react";
import { useEffect, useState } from "react";
import recipesData from "../data.json";
export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <h1 className="text-3xl font-bold text-center text-primary mb-10">
        🍽️ Delicious Recipes
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {recipe.title}
              </h2>
              <div className="mt-2 flex justify-between text-sm text-gray-600">
                <span> {recipe.summary}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
