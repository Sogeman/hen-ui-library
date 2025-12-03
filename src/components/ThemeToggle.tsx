import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    requestAnimationFrame(() => {
      if (stored === "dark" || stored === "light") {
        setTheme(stored);
      }
    });
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-accent transition-colors"
      aria-label="Toggle theme"
      title={`Current: ${theme} mode. Click to switch.`}
    >
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g fill="currentColor">
          <path d="M12 16a4 4 0 0 0 0-8z" />
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m0 2v4a4 4 0 1 0 0 8v4a8 8 0 1 0 0-16"
            clipRule="evenodd"
          />
        </g>
      </svg>
    </button>
  );
}
