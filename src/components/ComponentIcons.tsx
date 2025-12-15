interface IconProps {
  className?: string;
}

const iconProps = {
  className: "w-4 h-4",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  "aria-hidden": "true" as const,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: "2",
};

export const HomeIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg {...iconProps} className={className}>
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

export const GridIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg {...iconProps} className={className}>
    <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

export const BadgeIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg {...iconProps} className={className}>
    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

export const ButtonIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg {...iconProps} className={className}>
    <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
  </svg>
);

export const CardIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg {...iconProps} className={className}>
    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

export const InputIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg {...iconProps} className={className}>
    <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

export const AlertIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg {...iconProps} className={className}>
    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

export const CheckboxIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg {...iconProps} className={className}>
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const SwitchIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg {...iconProps} className={className}>
    <path d="M8 7h12m0 0a3 3 0 110 6H8m12-6v6m-12 0a3 3 0 110-6" />
  </svg>
);

export const AvatarIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg {...iconProps} className={className}>
    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

export const SelectIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg {...iconProps} className={className}>
    <path d="M4 6h16M4 12h16M4 18h7" />
  </svg>
);

export const MenuIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg {...iconProps} className={className}>
    <path d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

// Default icon for unknown components
export const ComponentIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg {...iconProps} className={className}>
    <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
);
