(function () {
  const stored = localStorage.getItem("theme");
  if (
    stored === "dark"
  ) {
    document.documentElement.classList.add("dark");
  }
})();
