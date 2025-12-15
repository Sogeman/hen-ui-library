(function () {
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") {
    document.documentElement.style.colorScheme = stored;
  }
})();
