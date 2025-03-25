import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import MainLayout from "./Layout/MainLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Overview from "./pages/Overview/Overview.jsx";
import WorkEntry from "./pages/WorkEntry/WorkEntry.jsx";
import store from "./app/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/overview",
        element: <Overview></Overview>,
      },
      {
        path: "/",
        element: <WorkEntry></WorkEntry>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
