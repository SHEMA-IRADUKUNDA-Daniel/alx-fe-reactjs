import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import { RouterProvider } from "react-router";
import router from "./components/Route.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
