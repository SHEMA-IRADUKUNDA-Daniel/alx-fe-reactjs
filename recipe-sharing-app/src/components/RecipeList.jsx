import { useRecipeStore } from "./recipeStore";

const RecipeList = ({ onSelectRecipe }) => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        // border: "1px solid red",
        maxWidth: "600px",
        margin: "0 auto",
        marginTop: "40px",
      }}
    >
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          onClick={() => onSelectRecipe(recipe.id)}
          style={{
            border: "1px solid green ",
            width: "100%",
            margin: "5px",
            borderRadius: "10px",
            padding: " 10px",
          }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};
export default RecipeList;
