import { Footer, Header } from "@/molecules";
import { Outlet } from "react-router-dom";

export const PublicLayout = () => {
  return (
    <div className="w-full">
      {/* handler to store the user data */}
      <Header />
      <p>public</p>
      <Outlet />
      <Footer />
    </div>
  );
};
