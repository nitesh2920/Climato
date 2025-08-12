import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/theme-provider";
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`flex items-center cursor-pointer transition-transform durtaion-500 ${
        isDark ? "rotate-180" : "rotate-0"
      }`}
    >
      {isDark ? (
        <Sun className="h-6 w-6 text-yellow-500 rotate-0 transition-all" />
      ) : (
        <Moon className="h-6 w-6 text-gray-500 rotate-180 transition-all" />
      )}
    </div>
  );
};

export default ThemeToggle;
