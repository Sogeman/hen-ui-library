import { Badge } from "../registry/default/components/badge/badge";
import { Button } from "../registry/default/components/button/button";
import { Card } from "../registry/default/components/card/card";

export default function Home() {
  return (
    <div className="px-8 py-12 max-w-6xl mx-auto">
      <div className="mb-16">
        <Badge className="mb-4">HENDRIKS </Badge>
        <h1 className="text-5xl font-bold mb-4 tracking-tight">UI Library</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
          A collection of re-usable components built with React and Tailwind
          CSS. Install with the shadcn CLI. Fully customizable and open source.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/Sogeman/ui-library"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-11 px-8 border border-input bg-background hover:bg-accent hover:text-accent-foreground"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Installation</h2>
        <p className="text-muted-foreground mb-6">
          Install components using the shadcn CLI pointing to this registry.
        </p>

        <Card>
          <div className="bg-muted rounded-lg p-4 font-mono text-sm">
            <div className="mb-2 text-muted-foreground">
              # Initialize shadcn in your project
            </div>
            <div>npx shadcn@latest init</div>
            <div className="mt-4 mb-2 text-muted-foreground">
              # Add a component from this registry
            </div>
            <div>
              npx shadcn@latest add
              https://ui-library.sogeman.deno.net/r/button.json
            </div>
            <div className="mt-4 mb-2 text-muted-foreground">
              # Update all components to latest version
            </div>
            <div>npx shadcn@latest add -a -y -o</div>
          </div>
        </Card>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-4">Component Preview</h2>
        <p className="text-muted-foreground mb-6">
          Browse all available components in the sidebar.
        </p>

        <Card
          title="Quick Example"
          description="Here's a taste of what you can build"
        >
          <div className="space-y-4">
            <div className="flex gap-2 flex-wrap">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
