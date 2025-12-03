import {
  BadgeIcon,
  ButtonIcon,
  CardIcon,
  ComponentIcon,
  InputIcon,
} from "@/components/ComponentIcons";

// Icon component mapper
const componentIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  badge: BadgeIcon,
  button: ButtonIcon,
  card: CardIcon,
  input: InputIcon,
};

export const getComponentIcon = (componentName: string) => {
  return componentIconMap[componentName.toLowerCase()] || ComponentIcon;
};

