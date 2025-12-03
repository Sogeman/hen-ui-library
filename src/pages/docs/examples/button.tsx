import { Button } from "../../../registry/new-york/components/button/button";

export const buttonExample = {
  preview: () => (
    <div className="flex flex-wrap gap-4">
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="flex gap-2">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
        <div className="flex gap-2">
          <Button disabled>Disabled</Button>
          <Button size="icon" aria-label="Add item">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  ),
  code: `import { Button } from "@/components/button"

export default function Example() {
  return (
    <div className="flex gap-2">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  )
}`,
  codePreview: () => (
    <div className="flex gap-2">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
  usage: `<Button variant="default" size="default">
  Click me
</Button>`,
  usagePreview: () => (
    <Button variant="default" size="default">
      Click me
    </Button>
  ),
  props: [
    {
      name: "variant",
      type: "'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'",
      description: "Visual style variant",
    },
    {
      name: "size",
      type: "'default' | 'sm' | 'lg' | 'icon'",
      description: "Size of the button",
    },
    { name: "disabled", type: "boolean", description: "Disable the button" },
    { name: "onClick", type: "() => void", description: "Click handler" },
  ],
};
