import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ToggleTheme() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, []);

  useEffect(() => {
    const oldTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.remove(oldTheme);
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 cursor-pointer rounded-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white transition"
    >
      {theme === "dark" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  );
}
