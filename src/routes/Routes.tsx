import HomeLayout from "../componenet/layout/HomeLayout";
import DashboardLayout from "../componenet/layout/DashboradLayout";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
]);
