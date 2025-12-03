import { Button } from "../../../registry/new-york/components/button/button";
import { Card } from "../../../registry/new-york/components/card/card";
import { CardContent } from "../../../registry/new-york/components/card/components/card-content";
import { CardDescription } from "../../../registry/new-york/components/card/components/card-description";
import { CardFooter } from "../../../registry/new-york/components/card/components/card-footer";
import { CardHeader } from "../../../registry/new-york/components/card/components/card-header";
import { CardTitle } from "../../../registry/new-york/components/card/components/card-title";

export const cardExample = {
  preview: () => (
    <div className="max-w-md">
      <Card title="Card Title" description="Card description goes here">
        <p>This is the card content. You can put any content here.</p>
      </Card>
    </div>
  ),
  code: `import { Card } from "@/components/ui/card"

export default function Example() {
  return (
    <Card
      title="Card Title"
      description="Card description goes here"
      footer={<Button>Action</Button>}
    >
      <p>This is the card content.</p>
    </Card>
  )
}`,
  codePreview: () => (
    <Card
      title="Card Title"
      description="Card description goes here"
      footer={<Button>Action</Button>}
    >
      <p>This is the card content.</p>
    </Card>
  ),
  usage: `<Card
  title="Title"
  description="Description"
>
  <div>Content here</div>
</Card>`,
  usagePreview: () => (
    <Card title="Title" description="Description">
      <div>Content here</div>
    </Card>
  ),
  advancedExample: {
    code: `import { Card } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card/components/card-header"
import { CardTitle } from "@/components/ui/card/components/card-title"
import { CardDescription } from "@/components/ui/card/components/card-description"
import { CardContent } from "@/components/ui/card/components/card-content"
import { CardFooter } from "@/components/ui/card/components/card-footer"
import { Button } from "@/components/ui/button"

export default function AdvancedCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Advanced Card</CardTitle>
        <CardDescription>Using individual subcomponents for more control</CardDescription>
      </CardHeader>
      <CardContent>
        <p>You can use the individual card components to build more complex layouts.</p>
        <ul className="list-disc pl-5 mt-2">
          <li>CardHeader - Header container</li>
          <li>CardTitle - Title text</li>
          <li>CardDescription - Description text</li>
          <li>CardContent - Main content area</li>
          <li>CardFooter - Footer container</li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button>Learn More</Button>
      </CardFooter>
    </Card>
  )
}`,
    preview: () => (
      <div className="max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Advanced Card</CardTitle>
            <CardDescription>
              Using individual subcomponents for more control
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              You can use the individual card components to build more complex
              layouts.
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li>CardHeader - Header container</li>
              <li>CardTitle - Title text</li>
              <li>CardDescription - Description text</li>
              <li>CardContent - Main content area</li>
              <li>CardFooter - Footer container</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button>Learn More</Button>
          </CardFooter>
        </Card>
      </div>
    ),
  },
  props: [
    { name: "title", type: "string", description: "Card title (optional)" },
    {
      name: "description",
      type: "string",
      description: "Card description (optional)",
    },
    {
      name: "children",
      type: "ComponentChildren",
      description: "Card content",
    },
    {
      name: "footer",
      type: "ComponentChildren",
      description: "Card footer (optional)",
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes",
    },
  ],
};
