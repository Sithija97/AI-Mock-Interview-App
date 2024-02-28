import { createBrowserRouter } from "react-router-dom";
import { Home, Layout, Auth } from "../pages";

export const ROOT = "/";
export const AUTH = "/auth";

export const PROTECTED = "/protected";
export const HOME = "/protected/home";

export const router = createBrowserRouter([
  { path: ROOT, element: <Auth /> },
  { path: AUTH, element: <Auth /> },
  {
    path: PROTECTED,
    element: <Layout />,
    children: [
      {
        path: HOME,
        element: <Home />,
      },
    ],
  },
]);
