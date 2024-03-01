import { Navigate, Outlet } from "react-router-dom";
import { RootState, useAppSelector } from "../store";
import { Header } from "../components";
import { LOGIN } from "../router";

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
  return (
    <PrivateRoute>
      <Header />
      <div className="flex items-center justify-center h-layout bg-gray-50">
        <Outlet />
      </div>
    </PrivateRoute>
  );
};
