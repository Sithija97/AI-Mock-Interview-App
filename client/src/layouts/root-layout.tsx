import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import { cn } from "../lib/utils";
import { Header, SideNavBar } from "../components";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

export const RootLayout = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
      signInForceRedirectUrl="/dashboard"
    >
      <section
        className={cn(
          "min-h-screen bg-white text-black ",
          import.meta.env.VITE_DEV_ENV === "development" ? "debug-screens" : ""
        )}
      >
        {/* <header className="header">
          <div>
            <SignedIn>
              <UserButton afterSignOutUrl="/sign-in" />
            </SignedIn>
            <SignedOut>
              <Link to="/sign-in">Sign In</Link>
            </SignedOut>
          </div>
        </header> */}
        <>
          <div className="md:block h-screen fixed border-r">
            <SideNavBar />
          </div>
          <div className="md:ml-64">
            {/* Header  */}
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* user used render page route  */}
              <div className="md:col-span-2">
                <Outlet />
              </div>
              {/* Right Most Section of page */}
              <div className="p-5 flex justify-center">Side Section</div>
            </div>
          </div>
        </>
      </section>
    </ClerkProvider>
  );
};
