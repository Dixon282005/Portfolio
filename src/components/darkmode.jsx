import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    // Intenta leer del localStorage al iniciar
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "dark";
  });

  // Aplica el tema al cargar o cuando cambia
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Guarda el tema en localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeToggle;
