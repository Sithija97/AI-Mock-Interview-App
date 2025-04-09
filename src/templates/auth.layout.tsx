import { Outlet } from "react-router-dom";

export const AuthenticationLayout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center relative">
      <Outlet />
    </div>
  );
};
