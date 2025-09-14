import { createBrowserRouter } from "react-router";
import App from "../App";
import RecipeDetails from "./RecipeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/recipe/:id",
    Component: RecipeDetails,
  },
]);
export default router;
