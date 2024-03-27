import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store";
import { logout } from "../store/features/auth";
import { LOGIN } from "../router";

export const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate(LOGIN);
  };
  return (
    <div className="flex items-center justify-end ">
      <button
        className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-sm sm:px-4  gap-x-3 "
        onClick={handleLogout}
      >
        <LogOut size={20} />

        <span>Logout</span>
      </button>
    </div>
  );
};
