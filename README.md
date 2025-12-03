# Hen UI Library

A collection of accessible and customizable React components built with TypeScript and Tailwind CSS.

## Installation

### Prerequisites

Make sure you have a React project set up with Tailwind CSS v4+ configured.

### Installing Components

You can install components using the shadcn CLI:

```bash
npx shadcn@latest add https://sogeman.github.io/hen-ui-library/r/registry.json
```

### Installing the Theme

The theme provides CSS custom properties for colors and other design tokens. All components depend on the theme, so it will be automatically installed when you add your first component.

To install the theme separately:

```bash
npx shadcn@latest add https://sogeman.github.io/hen-ui-library/r/registry.json theme
```

This will:

1. Add the `theme.css` file to your project
2. Include the necessary Tailwind config for color tokens
3. Set up CSS custom properties for light and dark modes

#### Manual Theme Setup

If you prefer to set it up manually, add this to your CSS:

```css
@import "tailwindcss";

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --primary: oklch(0.606 0.215 196.119);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.606 0.215 196.119);
  /* ... more colors */
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --primary: oklch(0.606 0.215 196.119);
  --primary-foreground: oklch(0.205 0 0);
  /* ... more dark mode colors */
}
```

And update your `tailwind.config.js`:

```js
export default {
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        // ... more color tokens
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
};
```

## Available Components

### Button

A customizable button component with multiple variants and sizes.

```bash
npx shadcn@latest add https://sogeman.github.io/hen-ui-library/r/registry.json button
```

**Variants:** default, destructive, outline, secondary, ghost, link  
**Sizes:** default, sm, lg, icon

### Card

A flexible card component with header, title, description, content, and footer sub-components.

```bash
npx shadcn@latest add https://sogeman.github.io/hen-ui-library/r/registry.json card
```

### Input

An input component with label and error states.

```bash
npx shadcn@latest add https://sogeman.github.io/hen-ui-library/r/registry.json input
```

### Badge

A badge component for status indicators and tags.

```bash
npx shadcn@latest add https://sogeman.github.io/hen-ui-library/r/registry.json badge
```

### Grid

A flexible grid layout component with responsive columns and gaps.

```bash
npx shadcn@latest add https://sogeman.github.io/hen-ui-library/r/registry.json grid
```

## Customization

### Colors

All components use CSS custom properties, making it easy to customize colors. Simply override the CSS variables in your own stylesheet:

```css
:root {
  --primary: oklch(0.7 0.2 220); /* Your custom primary color */
  --primary-foreground: oklch(1 0 0); /* White text on primary */
}
```

You can use any valid CSS color format (OKLCH, HSL, RGB, hex, etc.).

### Dark Mode

Dark mode is enabled via the `.dark` class on the root element. The theme automatically switches colors when this class is present:

```tsx
// Toggle dark mode
document.documentElement.classList.toggle("dark");
```

## Development

This project uses:

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS v4** for styling
- **React Router** for documentation site navigation

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
