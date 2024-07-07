import { createBrowserRouter } from "react-router-dom";

// Import the layouts
import { DashboardLayout, RootLayout } from "../layouts";

// Import the components
import {
  DashboardPage,
  InvoicesPage,
  RootPage,
  SignInPage,
  SignUpPage,
} from "../pages";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <RootPage /> },
      { path: "/sign-in/*", element: <SignInPage /> },
      { path: "/sign-up/*", element: <SignUpPage /> },
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
