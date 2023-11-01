import HomeLayout from "../componenet/layout/HomeLayout";
import DashboardLayout from "../componenet/layout/DashboradLayout";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
]);
