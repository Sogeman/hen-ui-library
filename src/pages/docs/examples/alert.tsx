import {
  Alert,
  AlertDescription,
  AlertTitle,
  type AlertVariant,
} from "../../../registry/new-york/components/alert/alert";

export const alertExample = {
  variants: [
    { value: "info", label: "Info" },
    { value: "success", label: "Success" },
    { value: "warning", label: "Warning" },
    { value: "destructive", label: "Destructive" },
  ],
  previewWithVariant: (variant: string) => {
    const alertVariant = variant as AlertVariant;
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">
            Alert Examples
          </h3>
          <div className="space-y-4">
            <Alert variant={alertVariant}>
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                This is an alert message with a title and description.
              </AlertDescription>
            </Alert>
            <Alert variant={alertVariant}>
              <AlertDescription>
                This is a simple alert with just a description.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>
    );
  },
  code: `import { Alert, AlertTitle, AlertDescription } from "@/components/alert"

export default function Example() {
  return (
    <div className="space-y-4">
      <Alert variant="info">
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>
          You have new messages in your inbox.
        </AlertDescription>
      </Alert>
      
      <Alert variant="success">
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Your changes have been saved successfully.
        </AlertDescription>
      </Alert>
      
      <Alert variant="warning">
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Your session will expire in 5 minutes.
        </AlertDescription>
      </Alert>
      
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          An error occurred. Please try again.
        </AlertDescription>
      </Alert>
    </div>
  )
}`,
  codePreview: () => (
    <div className="space-y-4">
      <Alert variant="info">
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>
          You have new messages in your inbox.
        </AlertDescription>
      </Alert>
      <Alert variant="success">
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Your changes have been saved successfully.
        </AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Your session will expire in 5 minutes.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          An error occurred. Please try again.
        </AlertDescription>
      </Alert>
    </div>
  ),
  usage: `<Alert variant="info">
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`,
  usagePreview: () => (
    <Alert variant="info">
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
  props: [
    {
      name: "variant",
      type: "'info' | 'success' | 'warning' | 'destructive'",
      description: "Visual style variant of the alert",
    },
    {
      name: "children",
      type: "ReactNode",
      description: "Alert content (use AlertTitle and AlertDescription)",
    },
  ],
};
