import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import registryData from "../../../registry.json";
import { CodeBlock } from "../../components/CodeBlock";
import { Card } from "../../registry/new-york/components/card/card";
import { alertExample } from "./examples/alert";
import { avatarExample } from "./examples/avatar";
import { badgeExample } from "./examples/badge";
import { buttonExample } from "./examples/button";
import { cardExample } from "./examples/card";
import { checkboxExample } from "./examples/checkbox";
import { gridExample } from "./examples/grid";
import { inputExample } from "./examples/input";
import { selectExample } from "./examples/select";
import { switchExample } from "./examples/switch";

interface RegistryItem {
  name: string;
  type: string;
  description: string;
  registryDependencies: string[];
  dependencies: string[];
  files: Array<{ path: string; type: string }>;
}

interface ComponentExample {
  preview?: () => React.JSX.Element;
  previewWithVariant?: (variant: string) => React.JSX.Element;
  variants?: Array<{ value: string; label: string }>;
  code: string;
  codePreview: () => React.JSX.Element;
  usage: string;
  usagePreview: () => React.JSX.Element;
  props?: Array<{ name: string; type: string; description: string }>;
}

const componentExamples: Record<string, ComponentExample> = {
  alert: alertExample,
  avatar: avatarExample,
  badge: badgeExample,
  button: buttonExample,
  card: cardExample,
  checkbox: checkboxExample,
  grid: gridExample,
  input: inputExample,
  select: selectExample,
  switch: switchExample,
};

function PreviewSection({ example }: { example: ComponentExample }) {
  const [selectedVariant, setSelectedVariant] = useState(
    example.variants?.[0]?.value || "default"
  );

  useEffect(() => {
    requestAnimationFrame(() => {
      setSelectedVariant(example.variants?.[0]?.value || "default");
    });
  }, [example]);

  const hasVariants = example.variants && example.previewWithVariant;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Preview</h2>
      {hasVariants && (
        <div className="flex items-center justify-end gap-2 mb-2">
          <label htmlFor="variant-select" className="sr-only">
            Variant:
          </label>
          <select
            id="variant-select"
            value={selectedVariant}
            onChange={(e) => setSelectedVariant(e.target.value)}
            className="px-3 py-1.5 text-sm border border-border rounded-md bg-background hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            {example.variants!.map((variant) => (
              <option key={variant.value} value={variant.value}>
                {variant.label}
              </option>
            ))}
          </select>
        </div>
      )}
      <Card>
        <div className="p-8 flex items-center justify-center min-h-[200px] bg-muted/30 rounded-lg">
          {hasVariants
            ? example.previewWithVariant!(selectedVariant)
            : example.preview!()}
        </div>
      </Card>
    </section>
  );
}

export default function ComponentDocs() {
  const { name } = useParams<{ name: string }>();
  const component = (registryData.items as RegistryItem[]).find(
    (item: RegistryItem) => item.name === name
  );

  if (!component) {
    return (
      <div className="px-8 py-12">
        <h1 className="text-4xl font-bold mb-4">Component Not Found</h1>
        <p className="text-muted-foreground">
          The component "{name}" was not found in the registry.
        </p>
      </div>
    );
  }

  const installCommand = `npx shadcn@latest add ${registryData.homepage}/r/${name}.json`;
  const example = componentExamples[component.name];

  if (!example) {
    return (
      <div className="px-8 py-12">
        <h1 className="text-4xl font-bold mb-4 capitalize">{component.name}</h1>
        <p className="text-muted-foreground">
          Documentation for this component is not yet available.
        </p>
      </div>
    );
  }

  return (
    <div className="px-8 py-12 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 capitalize">{component.name}</h1>
        <p className="text-xl text-muted-foreground">{component.description}</p>
      </div>

      {/* Installation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Installation</h2>
        <Card>
          <CodeBlock code={installCommand} language="bash" />
        </Card>
      </section>

      {/* Preview */}
      <PreviewSection example={example} />

      {/* Example Code */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Example</h2>
        <Card>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold mb-2 text-muted-foreground">
                Code
              </h3>
              <CodeBlock code={example.code} />
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-2 text-muted-foreground">
                Preview
              </h3>
              <div className="p-8 flex items-center justify-center min-h-[200px] bg-muted/30 rounded-lg border border-border">
                {example.codePreview()}
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Usage */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Usage</h2>
        <Card>
          <CodeBlock code={example.usage} />
        </Card>
      </section>

      {/* Props */}
      {example.props && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Props</h2>
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th
                      scope="col"
                      className="text-left py-3 px-4 font-semibold"
                    >
                      Prop
                    </th>
                    <th
                      scope="col"
                      className="text-left py-3 px-4 font-semibold"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="text-left py-3 px-4 font-semibold"
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {example.props.map((prop) => (
                    <tr
                      key={prop.name}
                      className="border-b border-border last:border-0"
                    >
                      <td className="py-3 px-4 font-mono text-sm">
                        {prop.name}
                      </td>
                      <td className="py-3 px-4 font-mono text-sm text-muted-foreground">
                        {prop.type}
                      </td>
                      <td className="py-3 px-4 text-sm">{prop.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>
      )}
    </div>
  );
}
