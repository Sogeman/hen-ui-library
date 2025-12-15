import { useState } from "react";
import { Switch } from "../../../registry/new-york/components/switch/switch";

export function SwitchCodePreview() {
  const [checked, setChecked] = useState(false);
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
  );
}

export function SwitchFullPreview() {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Switch with Labels
        </h3>
        <div className="space-y-3">
          <Switch
            label="Airplane Mode"
            checked={checked1}
            onChange={(e) => setChecked1(e.target.checked)}
          />
          <Switch
            label="Enable notifications"
            checked={checked2}
            onChange={(e) => setChecked2(e.target.checked)}
          />
          <Switch
            label="Dark mode"
            checked={checked3}
            onChange={(e) => setChecked3(e.target.checked)}
          />
          <Switch label="Disabled" disabled />
          <Switch label="Disabled (checked)" disabled checked />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Different Sizes
        </h3>
        <div className="space-y-3">
          <Switch label="Small" size="sm" defaultChecked />
          <Switch label="Default" size="default" defaultChecked />
          <Switch label="Large" size="lg" defaultChecked />
        </div>
      </div>
    </div>
  );
}
