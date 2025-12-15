import { useState } from "react";
import {
  Label,
  Select,
} from "../../../registry/new-york/components/select/select";

export function SelectFullPreview() {
  const [value, setValue] = useState("");

  const countries = [
    { value: "de", label: "Germany" },
    { value: "fr", label: "France" },
    { value: "uk", label: "United Kingdom" },
    { value: "ca", label: "Canada" },
    { value: "au", label: "Australia" },
  ];

  const fruits = [
    { value: "apple", label: "Apple 🍎" },
    { value: "banana", label: "Banana 🍌" },
    { value: "orange", label: "Orange 🍊" },
    { value: "grape", label: "Grape", disabled: true },
    { value: "mango", label: "Mango 🥭" },
  ];

  return (
    <div className="space-y-6 max-w-md">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Basic Select
        </h3>
        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Select
            id="country"
            options={countries}
            placeholder="Select a country"
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Controlled Select
        </h3>
        <div className="space-y-2">
          <Label htmlFor="fruit">Favorite Fruit</Label>
          <Select
            id="fruit"
            options={fruits}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Choose your favorite"
          />
          {value && (
            <p className="text-sm text-muted-foreground">
              Selected: {fruits.find((f) => f.value === value)?.label}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          With Disabled Option
        </h3>
        <div className="space-y-2">
          <Label htmlFor="fruit2">Fruit (Grape is disabled)</Label>
          <Select id="fruit2" options={fruits} placeholder="Select a fruit" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Disabled Select
        </h3>
        <div className="space-y-2">
          <Label htmlFor="disabled">Disabled</Label>
          <Select
            id="disabled"
            options={countries}
            disabled
            placeholder="Cannot select"
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Error State
        </h3>
        <div className="space-y-2">
          <Label htmlFor="error">With Error</Label>
          <Select
            id="error"
            options={countries}
            error
            placeholder="Select a country"
          />
          <p className="text-sm text-destructive">This field is required</p>
        </div>
      </div>
    </div>
  );
}

export function SelectCodePreview() {
  const countries = [
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "ca", label: "Canada" },
    { value: "au", label: "Australia" },
  ];

  return (
    <div className="space-y-2 max-w-md">
      <Label htmlFor="country">Country</Label>
      <Select id="country" options={countries} placeholder="Select a country" />
    </div>
  );
}
