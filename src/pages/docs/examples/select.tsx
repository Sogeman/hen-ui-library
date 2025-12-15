import { Select } from "../../../registry/new-york/components/select/select";
import { SelectCodePreview, SelectFullPreview } from "./select-components";

export const selectExample = {
  preview: () => <SelectFullPreview />,
  code: `import { Select, Label } from "@/components/select"

export default function Example() {
  const countries = [
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "ca", label: "Canada" },
    { value: "au", label: "Australia" },
  ]

  return (
    <div className="space-y-2 max-w-md">
      <Label htmlFor="country">Country</Label>
      <Select
        id="country"
        options={countries}
        placeholder="Select a country"
      />
    </div>
  )
}`,
  codePreview: () => <SelectCodePreview />,
  usage: `<Select
  options={[
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
  ]}
  placeholder="Select an option"
/>`,
  usagePreview: () => (
    <Select
      options={[
        { value: "1", label: "Option 1" },
        { value: "2", label: "Option 2" },
      ]}
      placeholder="Select an option"
    />
  ),
  props: [
    {
      name: "options",
      type: "SelectOption[]",
      description: "Array of options with value, label, and optional disabled",
    },
    {
      name: "placeholder",
      type: "string",
      description: "Placeholder text when no option is selected",
    },
    {
      name: "value",
      type: "string",
      description: "Controlled value",
    },
    {
      name: "defaultValue",
      type: "string",
      description: "Default value (uncontrolled)",
    },
    {
      name: "disabled",
      type: "boolean",
      description: "Disable the select",
    },
    {
      name: "error",
      type: "boolean",
      description: "Show error state",
    },
    {
      name: "onChange",
      type: "(e: ChangeEvent) => void",
      description: "Change event handler",
    },
  ],
};
