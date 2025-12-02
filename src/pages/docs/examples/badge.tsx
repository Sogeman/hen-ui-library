import { Badge } from "../../../registry/default/components/badge/badge";

export const badgeExample = {
  preview: () => (
    <div className="flex flex-wrap gap-4">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
  code: `import { Badge } from "@/components/badge"

export default function Example() {
  return (
    <div className="flex gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  )
}`,
  codePreview: () => (
    <div className="flex gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
  usage: `<Badge variant="default">Badge</Badge>`,
  usagePreview: () => <Badge variant="default">Badge</Badge>,
  props: [
    {
      name: "variant",
      type: "'default' | 'secondary' | 'destructive' | 'outline'",
      description: "Visual style variant",
    },
    { name: "children", type: "ReactNode", description: "Badge content" },
  ],
};
