
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import About from "./pages/About.jsx"
import Menu from "./pages/Menu.jsx";
import Drinks from "./pages/Drinks.jsx"
import Team from "./pages/Team.jsx"

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Menu",
    element: <Menu />,
  },
  {
    path: "/Drinks",
    element: <Drinks />,
  },
  {
    path: "/Team",
    element: <Team />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);