import { Select } from "../../../registry/new-york/components/select/select";
import { SelectCodePreview, SelectFullPreview } from "./select-components";

export const selectExample = {
  preview: () => <SelectFullPreview />,
  code: `import { Select } from "@/components/select"

export default function Example() {
  const countries = [
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "ca", label: "Canada" },
    { value: "au", label: "Australia" },
  ]

  return (
    <Select
      label="Country"
      options={countries}
      placeholder="Select a country"
    />
  )
}`,
  codePreview: () => <SelectCodePreview />,
  usage: `<Select
  label="Choose Option"
  options={[
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
  ]}
  placeholder="Select an option"
/>`,
  usagePreview: () => (
    <Select
      label="Choose Option"
      options={[
        { value: "1", label: "Option 1" },
        { value: "2", label: "Option 2" },
      ]}
      placeholder="Select an option"
    />
  ),
  props: [
    {
      name: "label",
      type: "string",
      description: "Label text displayed above the select",
    },
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
    {
      name: "required",
      type: "boolean",
      description: "Mark field as required (shows * in label)",
    },
  ],
};
