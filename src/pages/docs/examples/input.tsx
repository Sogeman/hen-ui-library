import { Input } from "../../../registry/new-york/components/input/input";

export const inputExample = {
  preview: () => (
    <div className="space-y-4 max-w-md">
      <Input label="Default Input" />
      <Input label="Email" type="email" required />
      <Input label="Disabled" disabled />
      <div className="space-y-1">
        <Input label="With Error" error required />
        <p className="text-sm text-destructive">This field is required</p>
      </div>
    </div>
  ),
  code: `import { Input } from "@/components/input"

export default function Example() {
  return (
    <Input 
      label="Email"
      type="email" 
    />
  )
}`,
  codePreview: () => <Input label="Email" type="email" />,
  usage: `<Input label="Email" type="email" />`,
  usagePreview: () => <Input label="Email" type="email" />,
  props: [
    {
      name: "label",
      type: "string",
      description: "Label text displayed above the input",
    },
    {
      name: "type",
      type: "string",
      description: "Input type (text, email, password, etc.)",
    },
    { name: "placeholder", type: "string", description: "Placeholder text" },
    { name: "disabled", type: "boolean", description: "Disable the input" },
    { name: "error", type: "boolean", description: "Show error state" },
    { name: "required", type: "boolean", description: "Mark field as required (shows * in label)" },
  ],
};
