import {
  AlertIcon,
  AvatarIcon,
  BadgeIcon,
  ButtonIcon,
  CardIcon,
  CheckboxIcon,
  ComponentIcon,
  GridIcon,
  InputIcon,
  SelectIcon,
  SwitchIcon,
} from "@/components/ComponentIcons";

const componentIconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  alert: AlertIcon,
  avatar: AvatarIcon,
  badge: BadgeIcon,
  button: ButtonIcon,
  card: CardIcon,
  checkbox: CheckboxIcon,
  grid: GridIcon,
  input: InputIcon,
  select: SelectIcon,
  switch: SwitchIcon,
};

export const getComponentIcon = (componentName: string) => {
  return componentIconMap[componentName.toLowerCase()] || ComponentIcon;
};
