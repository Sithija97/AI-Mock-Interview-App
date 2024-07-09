import { Outlet } from "react-router-dom";
import { Header, SideNavBar } from "../components";
import { cn } from "../lib/utils";

export const RootLayout = () => {
  return (
    <section className={cn("min-h-screen w-full flex")}>
      {/* sidebar */}
      <div className="border-r">
        <SideNavBar />
      </div>

      {/* main page */}
      <div className="w-full">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-2 bg">
            <Outlet />
          </div>
          <div className="p-5 flex justify-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/004/759/797/non_2x/cute-panda-working-in-front-of-laptop-vector.jpg"
              alt="panda-side-section"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
