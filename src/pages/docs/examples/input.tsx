import {
  Input,
  Label,
} from "../../../registry/new-york/components/input/input";

export const inputExample = {
  preview: () => (
    <div className="space-y-4 max-w-md">
      <div className="space-y-2">
        <Label htmlFor="default">Default Input</Label>
        <Input id="default" placeholder="Enter text..." />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="email@example.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="disabled">Disabled</Label>
        <Input id="disabled" disabled placeholder="Disabled input" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="error">With Error</Label>
        <Input id="error" error placeholder="Invalid input" />
        <p className="text-sm text-destructive">This field is required</p>
      </div>
    </div>
  ),
  code: `import { Input, Label } from "@/components/input"

export default function Example() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input 
        id="email" 
        type="email" 
        placeholder="email@example.com" 
      />
    </div>
  )
}`,
  codePreview: () => (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="email@example.com" />
    </div>
  ),
  usage: `<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="email@example.com" />
</div>`,
  usagePreview: () => (
    <div className="space-y-2">
      <Label htmlFor="email2">Email</Label>
      <Input id="email2" type="email" placeholder="email@example.com" />
    </div>
  ),
  props: [
    {
      name: "type",
      type: "string",
      description: "Input type (text, email, password, etc.)",
    },
    { name: "placeholder", type: "string", description: "Placeholder text" },
    { name: "disabled", type: "boolean", description: "Disable the input" },
    { name: "error", type: "boolean", description: "Show error state" },
  ],
};
