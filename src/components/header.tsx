import { useTheme } from "@/context/theme-provider";
import { Link } from "react-router-dom";
import ThemeToggle from "./theme-toggle";
import {CitySearch } from "./city-search"
const Header = () => {
  const { theme } = useTheme();
  return (
    <header className=" sticky top-0 z-50 w-full supports-[backdrop-filter]:bg-background/60 border-b bg-background/90 backdrop-blur py-2">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 ">
        <Link to={"/"}>
          <img
            src={theme === "dark" ? "/logo_d.svg" : "/logo_l.svg"}
            alt="Climato Logo"
            className="h-12"
          />
        </Link>

        <div className="flex gap-5">
          <CitySearch/>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
