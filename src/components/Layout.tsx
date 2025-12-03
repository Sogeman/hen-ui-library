import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export default function Layout() {
  return (
    <div className="min-h-screen flex bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to main content
      </a>
      <Sidebar />
      <main id="main-content" className="flex-1 overflow-auto bg-background">
        <Outlet />
      </main>
    </div>
  );
}
