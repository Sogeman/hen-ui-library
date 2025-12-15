import { Avatar } from "../../../registry/new-york/components/avatar/avatar";

export const avatarExample = {
  preview: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Different Sizes
        </h3>
        <div className="flex gap-4 items-center">
          <Avatar
            src="https://avatars.githubusercontent.com/u/44243964?s=48&v=4"
            alt="User Avatar"
            size="sm"
          />
          <Avatar
            src="https://avatars.githubusercontent.com/u/44243964?s=48&v=4"
            alt="User Avatar"
            size="default"
          />
          <Avatar
            src="https://avatars.githubusercontent.com/u/44243964?s=48&v=4"
            alt="User Avatar"
            size="lg"
          />
          <Avatar
            src="https://avatars.githubusercontent.com/u/44243964?s=48&v=4"
            alt="User Avatar"
            size="xl"
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          With Fallback Text
        </h3>
        <div className="flex gap-4 items-center">
          <Avatar fallback="JD" />
          <Avatar fallback="AB" size="lg" />
          <Avatar fallback="XY" size="xl" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          With Images
        </h3>
        <div className="flex gap-4 items-center">
          <Avatar
            src="https://avatars.githubusercontent.com/u/44243964?s=48&v=4"
            alt="Hendriks"
            fallback="H"
          />
          <Avatar
            src="https://github.com/vercel.png"
            alt="Vercel"
            fallback="V"
          />
          <Avatar
            src="https://github.com/github.png"
            alt="GitHub"
            fallback="G"
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Image Error (Shows Fallback)
        </h3>
        <div className="flex gap-4 items-center">
          <Avatar src="invalid-url" fallback="ER" />
          <Avatar src="invalid-url" alt="Error" />
        </div>
      </div>
    </div>
  ),
  code: `import { Avatar } from "@/components/avatar"

export default function Example() {
  return (
    <div className="flex gap-4">
      <Avatar 
        src="https://avatars.githubusercontent.com/u/44243964?s=48&v=4" 
        alt="User" 
        size="sm" 
      />
      <Avatar 
        src="https://avatars.githubusercontent.com/u/44243964?s=48&v=4" 
        alt="User" 
      />
      <Avatar 
        src="https://avatars.githubusercontent.com/u/44243964?s=48&v=4" 
        alt="User" 
        size="lg" 
      />
      <Avatar fallback="JD" />
    </div>
  )
}`,
  codePreview: () => (
    <div className="flex gap-4">
      <Avatar
        src="https://avatars.githubusercontent.com/u/44243964?s=48&v=4"
        alt="User"
        size="sm"
      />
      <Avatar
        src="https://avatars.githubusercontent.com/u/44243964?s=48&v=4"
        alt="User"
      />
      <Avatar
        src="https://avatars.githubusercontent.com/u/44243964?s=48&v=4"
        alt="User"
        size="lg"
      />
      <Avatar fallback="JD" />
    </div>
  ),
  usage: `<Avatar src="https://avatars.githubusercontent.com/u/44243964?s=48&v=4" alt="User" />`,
  usagePreview: () => (
    <Avatar
      src="https://avatars.githubusercontent.com/u/44243964?s=48&v=4"
      alt="User"
    />
  ),
  props: [
    {
      name: "src",
      type: "string",
      description: "Image URL for the avatar",
    },
    {
      name: "alt",
      type: "string",
      description: "Alt text for the image",
    },
    {
      name: "fallback",
      type: "string",
      description: "Text to display when image fails to load",
    },
    {
      name: "size",
      type: "'sm' | 'default' | 'lg' | 'xl'",
      description: "Size of the avatar",
    },
  ],
};
