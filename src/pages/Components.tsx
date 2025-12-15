import { Link } from "react-router-dom";
import registryData from "../../registry.json";

export default function Components() {
  const components = registryData.items
    .filter((item) => item.type === "registry:component")
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Components</h1>
          <p className="text-muted-foreground">
            Browse all available components in the library
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component) => (
            <div
              key={component.name}
              className="border rounded-lg p-6 space-y-2 hover:shadow-lg transition-shadow flex flex-col gap-3 justify-between items-start content-auto-small"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold capitalize">
                  {component.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {component.description}
                </p>
              </div>
              <Link
                to={`/docs/${component.name}`}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-9 px-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
