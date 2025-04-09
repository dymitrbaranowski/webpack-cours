// import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LazyAbout } from "./pages/about/About.lazy";
import { Shop } from "./pages/Shop";
import { Suspense } from "react";

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
        element: (
          <Suspense fallback={"Loading..."}>
            <LazyAbout />
          </Suspense>
        ),
        // element: <About />,
      },
      {
        path: "/shop",
        element: (
          <Suspense fallback={"Loading..."}>
            <Shop />
          </Suspense>
        ),
        // element: <Shop />,
      },
    ],
  },
]);

container.render(<RouterProvider router={router} />);
