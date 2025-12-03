import {
  BadgeIcon,
  ButtonIcon,
  CardIcon,
  ComponentIcon,
  GridIcon,
  InputIcon,
} from "@/components/ComponentIcons";

// Icon component mapper
const componentIconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  badge: BadgeIcon,
  button: ButtonIcon,
  card: CardIcon,
  grid: GridIcon,
  input: InputIcon,
};

export const getComponentIcon = (componentName: string) => {
  return componentIconMap[componentName.toLowerCase()] || ComponentIcon;
};
