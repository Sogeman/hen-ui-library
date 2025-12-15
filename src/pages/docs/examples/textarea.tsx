import { Textarea } from "../../../registry/new-york/components/textarea/textarea";

export const textareaExample = {
  preview: () => (
    <div className="space-y-4 max-w-lg w-full">
      <Textarea
        label="Default Textarea"
        placeholder="Enter your text here..."
      />
      <Textarea
        label="Message"
        placeholder="Type your message..."
        required
        rows={6}
      />
      <Textarea
        label="Disabled"
        disabled
        placeholder="This textarea is disabled"
      />
      <div className="space-y-1">
        <Textarea
          label="With Error"
          error
          required
          placeholder="This field has an error"
        />
        <p className="text-sm text-destructive">This field is required</p>
      </div>
    </div>
  ),
  code: `import { Textarea } from "@/components/textarea"

export default function Example() {
  return (
    <Textarea 
      label="Message"
      placeholder="Type your message..."
      rows={6}
    />
  )
}`,
  codePreview: () => (
    <Textarea label="Message" placeholder="Type your message..." rows={6} />
  ),
  usage: `<Textarea label="Message" placeholder="Type your message..." />`,
  usagePreview: () => (
    <Textarea label="Message" placeholder="Type your message..." />
  ),
  props: [
    {
      name: "label",
      type: "string",
      description: "Label text displayed above the textarea",
    },
    {
      name: "rows",
      type: "number",
      description: "Number of visible text rows (default: 4)",
    },
    {
      name: "placeholder",
      type: "string",
      description: "Placeholder text",
    },
    {
      name: "disabled",
      type: "boolean",
      description: "Disable the textarea",
    },
    {
      name: "error",
      type: "boolean",
      description: "Show error state",
    },
    {
      name: "required",
      type: "boolean",
      description: "Mark field as required (shows * in label)",
    },
  ],
};
