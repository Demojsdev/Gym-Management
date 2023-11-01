import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../componenet/layout/HomeLayout';
import Home from '../pages/home/Home';
import DashboardLayout from '../componenet/layout/DashboradLayout';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '',
        element: <h1>All Clients</h1>,
      },
      {
        path: 'connect',
        element: <h1>Connect</h1>,
      },
      {
        path: 'Pending',
        element: <h1>Pending</h1>,
      },
      {
        path: 'offline',
        element: <h1>Offline</h1>,
      },
      {
        path: 'activition',
        element: <h1>Waiting Activation</h1>,
      },
      {
        path: 'programming',
        element: <h1>Need Programing</h1>,
      },
      {
        path: 'archived',
        element: <h1>Archived</h1>,
      },
    ],
  },
]);
