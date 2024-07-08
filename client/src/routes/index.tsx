import { createBrowserRouter } from "react-router-dom";

import { DashboardLayout, RootLayout } from "../layouts";

import {
  DashboardPage,
  InvoicesPage,
  RootPage,
  SignInPage,
  SignUpPage,
} from "../pages";

export const router = createBrowserRouter([
  { path: "/sign-in/*", element: <SignInPage /> },
  { path: "/sign-up/*", element: <SignUpPage /> },
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <RootPage /> },
      {
        element: <DashboardLayout />,
        path: "dashboard",
        children: [
          { path: "/dashboard", element: <DashboardPage /> },
          { path: "/dashboard/invoices", element: <InvoicesPage /> },
        ],
      },
    ],
  },
]);
