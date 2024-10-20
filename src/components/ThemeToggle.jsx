import { useEffect, useState } from "react";
import LightOn from "../components/icons/LightOn";
import LightOff from "../components/icons/LightOff";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      title={darkMode ? "Dark Mode" : "Light Mode"}
      aria-label={`Click for ${darkMode ? "Dark Mode" : "Light Mode"}`}
      className="fixed inset-0 z-10 w-12 h-12 p-3 text-center rounded-br-lg shadow-md shadow-accent2 bg-accent1/95 ring-1 ring-accent2"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? LightOn : LightOff}
    </button>
  );
};

export default ThemeToggle;
