import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
    >
      {theme === "dark" ? (
        <FaSun className="text-yellow-400" />
      ) : (
        <FaMoon className="text-gray-800" />
      )}
    </button>
  );
};

export default ThemeToggle;
