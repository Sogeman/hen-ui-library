import {
  Badge,
  type BadgeVariant,
} from "../../../registry/new-york/components/badge/badge";

export const badgeExample = {
  variants: [
    { value: "default", label: "Default" },
    { value: "secondary", label: "Secondary" },
    { value: "destructive", label: "Destructive" },
    { value: "outline", label: "Outline" },
  ],
  previewWithVariant: (variant: string) => {
    const badgeVariant = variant as BadgeVariant;
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">
            Content Examples
          </h3>
          <div className="flex gap-2 items-center flex-wrap">
            <Badge variant={badgeVariant}>Badge</Badge>
            <Badge variant={badgeVariant}>New Feature</Badge>
            <Badge variant={badgeVariant}>Status: Active</Badge>
          </div>
        </div>
      </div>
    );
  },
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
