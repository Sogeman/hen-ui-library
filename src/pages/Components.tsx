import { Button } from "@/components/ui/button/button";
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
              className="border rounded-lg p-6 space-y-2 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold capitalize">
                {component.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {component.description}
              </p>
              <Link to={`/docs/${component.name}`}>
                <Button size="sm" variant="outline">
                  View Details
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
