(function () {
  const stored = localStorage.getItem("theme");
  let theme;

  if (stored === "dark" || stored === "light") {
    theme = stored;
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    // Use system preference if no stored theme
    theme = "dark";
  } else {
    theme = "light";
  }

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
})();
