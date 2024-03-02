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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
          />
        </svg>

        <span>Logout</span>
      </button>
    </div>
  );
};
