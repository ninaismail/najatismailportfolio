import { useEffect, useState } from "react";

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
    className="fixed inset-0 z-10 w-20 h-20 p-3 text-center rounded-br-lg shadow-md shadow-accent2 bg-accent1/95 ring-1 ring-accent2"
    onClick={() => setDarkMode(!darkMode)}
    >
      <img
          src={darkMode ? "../images/icons8-light-on-64.webp" : "../images/icons8-light-off-64.webp"}
          alt={darkMode ? "Najat Ismail Dark Mode" : "Najat Ismail Light Mode"}
          fetchpriority="high"
          width="64"
          height="64"
      />
    </button>
  );
};

export default ThemeToggle;