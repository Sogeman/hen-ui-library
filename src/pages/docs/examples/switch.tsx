import { Switch } from "../../../registry/new-york/components/switch/switch";
import { SwitchCodePreview, SwitchFullPreview } from "./switch-components";

export const switchExample = {
  preview: () => <SwitchFullPreview />,
  code: `import { Switch } from "@/components/switch"
import { useState } from "react"

export default function Example() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="space-y-3">
      <Switch 
        label="Airplane Mode"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <Switch label="Enable notifications" />
      <Switch label="Dark mode" />
    </div>
  )
}`,
  codePreview: () => <SwitchCodePreview />,
  usage: `<Switch label="Enable notifications" />`,
  usagePreview: () => <Switch label="Enable notifications" />,
  props: [
    {
      name: "label",
      type: "string",
      description: "Label text for the switch",
    },
    {
      name: "size",
      type: "'sm' | 'default' | 'lg'",
      description: "Size of the switch",
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
      description: "Disable the switch",
    },
    {
      name: "onChange",
      type: "(e: ChangeEvent) => void",
      description: "Change event handler",
    },
  ],
};
