import { Checkbox } from "../../../registry/new-york/components/checkbox/checkbox";

export const checkboxExample = {
  preview: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Checkbox Variations
        </h3>
        <div className="space-y-3">
          <Checkbox label="Accept terms and conditions" defaultChecked />
          <Checkbox label="Subscribe to newsletter" />
          <Checkbox label="Enable notifications" />
          <Checkbox label="Disabled checkbox" disabled />
          <Checkbox label="Disabled and checked" disabled defaultChecked />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Without Labels
        </h3>
        <div className="flex gap-4">
          <Checkbox />
          <Checkbox defaultChecked />
          <Checkbox disabled />
        </div>
      </div>
    </div>
  ),
  code: `import { Checkbox } from "@/components/checkbox"

export default function Example() {
  return (
    <div className="space-y-3">
      <Checkbox label="Accept terms and conditions" />
      <Checkbox label="Subscribe to newsletter" />
      <Checkbox label="Enable notifications" />
    </div>
  )
}`,
  codePreview: () => (
    <div className="space-y-3">
      <Checkbox label="Accept terms and conditions" />
      <Checkbox label="Subscribe to newsletter" />
      <Checkbox label="Enable notifications" />
    </div>
  ),
  usage: `<Checkbox label="Accept terms and conditions" />`,
  usagePreview: () => <Checkbox label="Accept terms and conditions" />,
  props: [
    {
      name: "label",
      type: "string",
      description: "Label text for the checkbox",
    },
    {
      name: "checked",
      type: "boolean",
      description: "Controlled checked state",
    },
    {
      name: "defaultChecked",
      type: "boolean",
      description: "Default checked state (uncontrolled)",
    },
    {
      name: "disabled",
      type: "boolean",
      description: "Disable the checkbox",
    },
    {
      name: "onChange",
      type: "(e: ChangeEvent) => void",
      description: "Change event handler",
    },
  ],
};
