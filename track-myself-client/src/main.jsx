import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import MainLayout from "./Layout/MainLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Overview from "./pages/Overview/Overview.jsx";
import WorkEntry from "./pages/WorkEntry/WorkEntry.jsx";
import store from "./app/store";
import { Provider } from "react-redux";
import MonthlyTarget from "./pages/Overview/Monthly/MonthTarget/MonthlyTarget.jsx";
import AllSkills from "./pages/WorkEntry/AllSkills/AllSkils.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/overview",
        element: <Overview></Overview>,
        children:[
          {
            path:"monthly",
            element:<MonthlyTarget></MonthlyTarget>
          },{
            path:'dashboard',
            element:<AllSkills></AllSkills>
          }
        ]
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
