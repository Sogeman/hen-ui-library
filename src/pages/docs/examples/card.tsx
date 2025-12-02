import { Button } from "../../../registry/default/components/button/button";
import { Card } from "../../../registry/default/components/card/card";

export const cardExample = {
  preview: () => (
    <div className="max-w-md">
      <Card
        title="Card Title"
        description="Card description goes here"
      >
        <p>This is the card content. You can put any content here.</p>
      </Card>
    </div>
  ),
  code: `import { Card } from "@/components/card"
import { Button } from "@/components/button"

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
    <Card
      title="Title"
      description="Description"
    >
      <div>Content here</div>
    </Card>
  ),
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
    { name: "class", type: "string", description: "Additional CSS classes" },
  ],
};
