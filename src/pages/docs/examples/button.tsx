import {
  Button,
  type ButtonProps,
} from "../../../registry/new-york/components/button/button";

export const buttonExample = {
  variants: [
    { value: "default", label: "Default" },
    { value: "secondary", label: "Secondary" },
    { value: "outline", label: "Outline" },
    { value: "ghost", label: "Ghost" },
    { value: "destructive", label: "Destructive" },
    { value: "link", label: "Link" },
  ],
  previewWithVariant: (variant: string) => {
    const buttonVariant = variant as ButtonProps["variant"];
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Sizes</h3>
          <div className="flex gap-2 items-center flex-wrap">
            <Button variant={buttonVariant} size="sm">
              Small
            </Button>
            <Button variant={buttonVariant} size="default">
              Default
            </Button>
            <Button variant={buttonVariant} size="lg">
              Large
            </Button>
            <Button variant={buttonVariant} size="icon" aria-label="Add item">
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

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">States</h3>
          <div className="flex gap-2 flex-wrap">
            <Button variant={buttonVariant}>Normal</Button>
            <Button variant={buttonVariant} disabled>
              Disabled
            </Button>
          </div>
        </div>
      </div>
    );
  },
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
