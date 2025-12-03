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

@theme {
  /* Colors - Light Mode */
  --color-border: hsl(214.3 31.8% 91.4%);
  --color-input: hsl(214.3 31.8% 91.4%);
  --color-ring: hsl(181, 48%, 39%);
  --color-background: hsl(0 0% 100%);
  --color-foreground: hsl(222.2 84% 4.9%);
  --color-primary: hsl(181, 48%, 39%);
  --color-primary-hover: hsl(181, 49%, 29%);
  --color-primary-foreground: hsl(0 0% 100%);
  /* ... more colors */
}

:root.dark {
  /* Dark mode colors */
  --color-background: hsl(222.2 84% 4.9%);
  --color-foreground: hsl(210 40% 98%);
  /* ... more dark mode colors */
}
```

And update your `tailwind.config.js`:

```js
export default {
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--color-border))",
        input: "hsl(var(--color-input))",
        ring: "hsl(var(--color-ring))",
        background: "hsl(var(--color-background))",
        foreground: "hsl(var(--color-foreground))",
        primary: {
          DEFAULT: "hsl(var(--color-primary))",
          foreground: "hsl(var(--color-primary-foreground))",
          hover: "hsl(var(--color-primary-hover))"
        },
        // ... more color tokens
      }
    }
  }
}
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
@theme {
  --color-primary: hsl(200, 100%, 50%); /* Your custom primary color */
  --color-primary-hover: hsl(200, 100%, 40%);
}
```

### Dark Mode

Dark mode is enabled via the `.dark` class on the root element. The theme automatically switches colors when this class is present:

```tsx
// Toggle dark mode
document.documentElement.classList.toggle('dark');
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
