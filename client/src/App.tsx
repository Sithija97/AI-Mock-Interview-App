import { ClerkProvider } from "@clerk/clerk-react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      signInForceRedirectUrl="/dashboard"
    >
      <section
        className={`min-h-screen bg-white text-black ${
          import.meta.env.VITE_DEV_ENV === "development" ? "debug-screens" : ""
        }`}
      >
        <RouterProvider router={router} />
      </section>
    </ClerkProvider>
  );
}

export default App;
