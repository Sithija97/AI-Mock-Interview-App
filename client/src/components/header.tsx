import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SignedIn, useAuth, UserButton } from "@clerk/clerk-react";
import { Button } from "./ui/button";

export const Header = () => {
  const { userId } = useAuth();
  const navigate = useNavigate();

  const handleSignInNavigation = () => {
    navigate("/sign-in");
  };
  return (
    <div className="p-5 flex justify-between md:justify-end shadow-sm bg-white items-center">
      <Menu
        className="md:hidden h-7 w-7
         text-slate-500 cursor-pointer"
      />
      {!userId && (
        <Button
          className="bg-blue-500 
        hover:bg-blue-600 shadow-sm"
          onClick={handleSignInNavigation}
        >
          Get Started
        </Button>
      )}
      {userId && (
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      )}
    </div>
  );
};
