// import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = document.getElementById("root") as HTMLElement;
if (!root) {
  throw new Error("Root element not found");
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/shop",
        element: <div>Shop</div>,
      },
    ],
  },
]);

container.render(<RouterProvider router={router} />);
