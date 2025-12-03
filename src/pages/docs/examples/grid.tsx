import { Grid } from "../../../registry/default/components/grid/grid";
import { Card } from "../../../registry/default/components/card/card";

export const gridExample = {
  preview: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium mb-4">Responsive Grid (default)</h3>
        <Grid responsive={true}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card
              key={i}
              class="p-6 flex items-center justify-center bg-muted"
            >
              <span className="text-lg font-semibold">Item {i}</span>
            </Card>
          ))}
        </Grid>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-4">Fixed 4 Columns</h3>
        <Grid cols={4} responsive={false}>
          {[1, 2, 3, 4].map((i) => (
            <Card
              key={i}
              class="p-6 flex items-center justify-center bg-muted"
            >
              <span className="text-lg font-semibold">Item {i}</span>
            </Card>
          ))}
        </Grid>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4">Different Gap Sizes</h3>
        <div className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground mb-2">Small Gap</p>
            <Grid cols={3} gap="sm" responsive={false}>
              {[1, 2, 3].map((i) => (
                <Card
                  key={i}
                  class="p-4 flex items-center justify-center bg-muted"
                >
                  <span className="font-semibold">Item {i}</span>
                </Card>
              ))}
            </Grid>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Large Gap</p>
            <Grid cols={3} gap="lg" responsive={false}>
              {[1, 2, 3].map((i) => (
                <Card
                  key={i}
                  class="p-4 flex items-center justify-center bg-muted"
                >
                  <span className="font-semibold">Item {i}</span>
                </Card>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  ),
  code: `import { Grid } from "@/components/grid"
import { Card } from "@/components/card"

export default function Example() {
  return (
    <Grid cols={3} gap="md">
      <Card title="Card 1">Content</Card>
      <Card title="Card 2">Content</Card>
      <Card title="Card 3">Content</Card>
      <Card title="Card 4">Content</Card>
      <Card title="Card 5">Content</Card>
      <Card title="Card 6">Content</Card>
    </Grid>
  )
}`,
  codePreview: () => (
    <Grid cols={3} gap="md">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Card
          key={i}
          title={`Card ${i}`}
          class="bg-muted"
        >
          Content for card {i}
        </Card>
      ))}
    </Grid>
  ),
  usage: `<Grid cols={3} gap="md" responsive={true}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>`,
  usagePreview: () => (
    <Grid cols={3} gap="md" responsive={true}>
      {[1, 2, 3].map((i) => (
        <Card
          key={i}
          class="p-6 flex items-center justify-center bg-muted"
        >
          <span className="font-semibold">Item {i}</span>
        </Card>
      ))}
    </Grid>
  ),
  props: [
    {
      name: "cols",
      type: "1 | 2 | 3 | 4 | 5 | 6 | 12",
      description: "Number of columns in the grid (ignored if responsive is true)",
    },
    {
      name: "gap",
      type: "'none' | 'sm' | 'md' | 'lg' | 'xl'",
      description: "Spacing between grid items",
    },
    {
      name: "responsive",
      type: "boolean",
      description: "Enable responsive breakpoints (1 col on mobile, 2 on tablet, 3 on desktop)",
    },
    {
      name: "class",
      type: "string",
      description: "Additional CSS classes",
    },
  ],
};

