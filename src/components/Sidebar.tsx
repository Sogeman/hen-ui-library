import { ThemeToggle } from "@/components/ThemeToggle";
import { Link, useLocation } from "react-router-dom";
import registryData from "../../registry.json";

interface SidebarProps {
  currentPath?: string;
}

export function Sidebar({ currentPath }: SidebarProps) {
  const location = useLocation();
  const activePath = currentPath || location.pathname;

  const components = registryData.items
    .filter((item) => item.type === "registry:component")
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <aside className="w-64 border-r border-border bg-card h-screen sticky top-0 overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center gap-2">
            <svg
              className="w-8 h-8 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-xl font-bold">UI Library</span>
          </Link>
          <ThemeToggle />
        </div>

        <nav className="space-y-1">
          <div className="mb-6">
            <h3 className="mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Getting Started
            </h3>
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activePath === "/"
                  ? "bg-accent text-accent-foreground"
                  : "text-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              Introduction
            </Link>
          </div>

          <div>
            <h3 className="mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Components
            </h3>
            <div className="space-y-1">
              {components.map((component) => {
                const isActive = activePath === `/docs/${component.name}`;
                return (
                  <Link
                    key={component.name}
                    to={`/docs/${component.name}`}
                    className={`block px-3 py-2 rounded-md text-sm font-medium capitalize transition-colors ${
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    {component.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}
