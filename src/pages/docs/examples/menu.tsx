import { Avatar } from "@/registry/new-york/components/avatar/avatar";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/new-york/components/menu/menu";

export const menuExample = {
  preview: () => (
    <div className="flex items-center justify-center gap-8">
      <Menu>
        <MenuTrigger asChild>
          <button className="cursor-pointer">
            <Avatar
              src="https://i.pravatar.cc/150?img=12"
              alt="John Doe"
              fallback="JD"
            />
          </button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem>
            <div className="flex flex-col items-start">
              <span className="font-medium">John Doe</span>
              <span className="text-xs text-muted-foreground">
                john.doe@example.com
              </span>
            </div>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Billing</MenuItem>
          <MenuSeparator />
          <MenuItem destructive>Logout</MenuItem>
        </MenuContent>
      </Menu>
    </div>
  ),
  code: `import { Avatar } from "@/components/ui/avatar";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/components/ui/menu";

export default function MenuExample() {
  return (
    <Menu>
      <MenuTrigger asChild>
        <button className="cursor-pointer">
          <Avatar
            src="https://i.pravatar.cc/150?img=12"
            alt="John Doe"
            fallback="JD"
          />
        </button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem>
          <div className="flex flex-col items-start">
            <span className="font-medium">John Doe</span>
            <span className="text-xs text-muted-foreground">
              john.doe@example.com
            </span>
          </div>
        </MenuItem>
        <MenuSeparator />
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Billing</MenuItem>
        <MenuSeparator />
        <MenuItem destructive>Logout</MenuItem>
      </MenuContent>
    </Menu>
  );
}`,
  codePreview: () => (
    <Menu>
      <MenuTrigger asChild>
        <button className="cursor-pointer">
          <Avatar
            src="https://i.pravatar.cc/150?img=12"
            alt="John Doe"
            fallback="JD"
          />
        </button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem>
          <div className="flex flex-col items-start">
            <span className="font-medium">John Doe</span>
            <span className="text-xs text-muted-foreground">
              john.doe@example.com
            </span>
          </div>
        </MenuItem>
        <MenuSeparator />
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Billing</MenuItem>
        <MenuSeparator />
        <MenuItem destructive>Logout</MenuItem>
      </MenuContent>
    </Menu>
  ),
  usage: `import {
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/components/ui/menu";

<Menu>
  <MenuTrigger asChild>
    <button>Click me</button>
  </MenuTrigger>
  <MenuContent>
    <MenuItem>Item 1</MenuItem>
    <MenuItem>Item 2</MenuItem>
  </MenuContent>
</Menu>`,
  usagePreview: () => (
    <Menu>
      <MenuTrigger asChild>
        <button className="cursor-pointer">
          <Avatar fallback="U" />
        </button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </MenuContent>
    </Menu>
  ),
  props: [
    {
      name: "open",
      type: "boolean",
      description: "Control the open state of the menu (controlled mode)",
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      description: "Callback when the menu open state changes",
    },
    {
      name: "anchorOrigin",
      type: "{ vertical: 'top' | 'center' | 'bottom', horizontal: 'left' | 'center' | 'right' }",
      description: "Point on the anchor element where the menu attaches",
    },
    {
      name: "transformOrigin",
      type: "{ vertical: 'top' | 'center' | 'bottom', horizontal: 'left' | 'center' | 'right' }",
      description: "Point on the menu that aligns with the anchor origin",
    },
  ],
  variants: [
    { value: "default", label: "Default" },
    { value: "positions", label: "Different Positions" },
    { value: "with-icons", label: "With Icons" },
    { value: "nested", label: "Nested Content" },
  ],
  previewWithVariant: (variant: string) => {
    if (variant === "positions") {
      return (
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <Menu
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuTrigger asChild>
              <button className="cursor-pointer">
                <Avatar fallback="BR" />
              </button>
            </MenuTrigger>
            <MenuContent>
              <MenuItem>Bottom Right (Default)</MenuItem>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
            </MenuContent>
          </Menu>

          <Menu
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
          >
            <MenuTrigger asChild>
              <button className="cursor-pointer">
                <Avatar fallback="BL" />
              </button>
            </MenuTrigger>
            <MenuContent>
              <MenuItem>Bottom Left</MenuItem>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
            </MenuContent>
          </Menu>

          <Menu
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            <MenuTrigger asChild>
              <button className="cursor-pointer">
                <Avatar fallback="TR" />
              </button>
            </MenuTrigger>
            <MenuContent>
              <MenuItem>Top Right</MenuItem>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
            </MenuContent>
          </Menu>

          <Menu
            anchorOrigin={{ vertical: "top", horizontal: "left" }}
            transformOrigin={{ vertical: "bottom", horizontal: "left" }}
          >
            <MenuTrigger asChild>
              <button className="cursor-pointer">
                <Avatar fallback="TL" />
              </button>
            </MenuTrigger>
            <MenuContent>
              <MenuItem>Top Left</MenuItem>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
            </MenuContent>
          </Menu>
        </div>
      );
    }

    if (variant === "with-icons") {
      return (
        <div className="flex items-center justify-center">
          <Menu>
            <MenuTrigger asChild>
              <button className="cursor-pointer">
                <Avatar fallback="JD" />
              </button>
            </MenuTrigger>
            <MenuContent>
              <MenuItem>
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Profile
              </MenuItem>
              <MenuItem>
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Settings
              </MenuItem>
              <MenuItem>
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                Billing
              </MenuItem>
              <MenuSeparator />
              <MenuItem destructive>
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Logout
              </MenuItem>
            </MenuContent>
          </Menu>
        </div>
      );
    }

    if (variant === "nested") {
      return (
        <div className="flex items-center justify-center">
          <Menu>
            <MenuTrigger asChild>
              <button className="cursor-pointer">
                <Avatar fallback="JD" />
              </button>
            </MenuTrigger>
            <MenuContent className="min-w-[240px]">
              <MenuItem>
                <div className="flex flex-col items-start gap-1 w-full">
                  <span className="font-semibold">John Doe</span>
                  <span className="text-xs text-muted-foreground">
                    john.doe@example.com
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Free Plan
                  </span>
                </div>
              </MenuItem>
              <MenuSeparator />
              <MenuItem>
                <div className="flex items-center justify-between w-full">
                  <span>Profile</span>
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                    ⌘P
                  </kbd>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="flex items-center justify-between w-full">
                  <span>Settings</span>
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                    ⌘S
                  </kbd>
                </div>
              </MenuItem>
              <MenuItem>Team</MenuItem>
              <MenuItem disabled>Invite Users (Coming Soon)</MenuItem>
              <MenuSeparator />
              <MenuItem destructive>Logout</MenuItem>
            </MenuContent>
          </Menu>
        </div>
      );
    }

    // Default variant
    return (
      <div className="flex items-center justify-center">
        <Menu>
          <MenuTrigger asChild>
            <button className="cursor-pointer">
              <Avatar
                src="https://i.pravatar.cc/150?img=12"
                alt="John Doe"
                fallback="JD"
              />
            </button>
          </MenuTrigger>
          <MenuContent>
            <MenuItem>
              <div className="flex flex-col items-start">
                <span className="font-medium">John Doe</span>
                <span className="text-xs text-muted-foreground">
                  john.doe@example.com
                </span>
              </div>
            </MenuItem>
            <MenuSeparator />
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Billing</MenuItem>
            <MenuSeparator />
            <MenuItem destructive>Logout</MenuItem>
          </MenuContent>
        </Menu>
      </div>
    );
  },
};
