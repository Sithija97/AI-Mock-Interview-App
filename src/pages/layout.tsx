import { Navigate, Outlet } from "react-router-dom";
import { RootState, useAppSelector } from "../store";
import { LOGIN } from "../router";
import { Header } from "components";
import { cn } from "lib/utils";

type IProps = {
  children: React.ReactNode;
};

export const PrivateRoute = ({ children }: IProps) => {
  const { user } = useAppSelector((state: RootState) => state.auth);

  if (!user) {
    return <Navigate to={LOGIN} />;
  }

  return children;
};
export const Layout = () => {
  console.log(import.meta.env.VITE_DEV_ENV);
  return (
    <section
      className={cn(
        "min-h-screen w-full bg-white text-black",
        import.meta.env.VITE_DEV_ENV === "development" ? "debug-screens" : ""
      )}
    >
      <PrivateRoute>
        <Header />
        <div className="px-2">
          <Outlet />
        </div>
      </PrivateRoute>
    </section>
  );
};
