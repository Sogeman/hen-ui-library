import { ThemeToggle } from "@/components/ThemeToggle";
import { getComponentIcon } from "@/lib/componentIconMapper";
import { Link, useLocation } from "react-router-dom";
import registryData from "../../registry.json";
import { GridIcon, HomeIcon } from "./ComponentIcons";

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
          <Link to="/" className="flex items-center gap-2" aria-label="Home">
            <svg
              className="w-8 h-8 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-xl font-bold">UI Library</span>
          </Link>
          <ThemeToggle />
        </div>

        <nav aria-label="Main navigation" className="space-y-1">
          <div className="mb-6">
            <div
              className="mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"
              role="heading"
              aria-level={2}
            >
              Getting Started
            </div>
            <div className="space-y-1">
              <Link
                to="/"
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activePath === "/"
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <HomeIcon />
                Introduction
              </Link>
              <Link
                to="/components"
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activePath === "/components"
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <GridIcon />
                Browse All Components
              </Link>
            </div>
          </div>

          <div>
            <div
              className="mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"
              role="heading"
              aria-level={2}
            >
              Components
            </div>
            <div className="space-y-1">
              {components.map((component) => {
                const isActive = activePath === `/docs/${component.name}`;
                const IconComponent = getComponentIcon(component.name);
                return (
                  <Link
                    key={component.name}
                    to={`/docs/${component.name}`}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium capitalize transition-colors ${
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    <IconComponent />
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
