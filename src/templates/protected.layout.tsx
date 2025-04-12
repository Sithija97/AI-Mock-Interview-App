import { LoaderPage } from "@/pages";
import { useAuth } from "@clerk/clerk-react";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type IProps = {
  children: ReactNode;
};

export const ProtectedLayout = ({ children }: IProps) => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <LoaderPage />;
  }

  if (!isSignedIn) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};
