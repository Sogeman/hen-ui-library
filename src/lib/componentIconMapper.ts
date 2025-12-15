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
  MenuIcon,
  SelectIcon,
  SwitchIcon,
  TextareaIcon,
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
  menu: MenuIcon,
  select: SelectIcon,
  switch: SwitchIcon,
  textarea: TextareaIcon,
};

export const getComponentIcon = (componentName: string) => {
  return componentIconMap[componentName.toLowerCase()] || ComponentIcon;
};
