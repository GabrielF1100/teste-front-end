import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

// Base: ícones de traço (24x24) que herdam a cor via currentColor
function Icon({ size = 24, children, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  )
}

export const ShieldIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </Icon>
)

export const TruckIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M2 6h12v10H2zM14 9h4l3 3v4h-7" />
    <circle cx="6.5" cy="17.5" r="1.8" />
    <circle cx="17" cy="17.5" r="1.8" />
  </Icon>
)

export const CardIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20M6 15h4" />
  </Icon>
)

export const SearchIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="M16.5 16.5L21 21" />
  </Icon>
)

export const BoxIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 8h16v12H4zM4 8l2-4h12l2 4" />
    <path d="M14 12l-3 3 3 3M11 15h6" />
  </Icon>
)

export const HeartIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 20s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.5-7 10-7 10z" />
  </Icon>
)

export const UserIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="10" r="3" />
    <path d="M6.5 18.5c1.5-2.5 3.5-3.5 5.5-3.5s4 1 5.5 3.5" />
  </Icon>
)

export const CartIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 4h2.5l2 11h10.5l2-8H6.5" />
    <circle cx="9" cy="19.5" r="1.4" />
    <circle cx="17" cy="19.5" r="1.4" />
  </Icon>
)

export const CrownIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 8l4 4 5-7 5 7 4-4-2 11H5z" />
  </Icon>
)

// Ícones das categorias da home (traço mais fino, usados em tamanho grande)
const thin = { strokeWidth: 1 }

export const DevicesIcon = (p: IconProps) => (
  <Icon {...thin} {...p}>
    <rect x="2.5" y="4" width="14" height="10" rx="1" />
    <path d="M7 18h5M9.5 14v4" />
    <rect x="15" y="9" width="6.5" height="11" rx="1.2" />
  </Icon>
)

export const StoreIcon = (p: IconProps) => (
  <Icon {...thin} {...p}>
    <path d="M3 9l1.5-5h15L21 9M3 9c0 1.6 1.3 2.5 2.5 2.5S8 10.6 8 9c0 1.6 1.3 2.5 2.5 2.5S13 10.6 13 9c0 1.6 1.3 2.5 2.5 2.5S18 10.6 18 9c0 1.6 1.3 2.5 2.5 2.5" />
    <path d="M4.5 11.5V20h15v-8.5M9 20v-5h6v5" />
  </Icon>
)

export const DrinkIcon = (p: IconProps) => (
  <Icon {...thin} {...p}>
    <path d="M7.5 2.5h3V6l1.8 2.5V21H5.7V8.5L7.5 6zM5.7 13h6.6M5.7 17h6.6" />
    <path d="M15 14h5v7h-5z" />
  </Icon>
)

export const ToolsIcon = (p: IconProps) => (
  <Icon {...thin} {...p}>
    <path d="M4 20l9-9M15 3.5l5.5 5.5-2.5 2.5-5.5-5.5zM20 20L10 10M7 5l-3 3 4 4 3-3z" />
  </Icon>
)

export const HealthIcon = (p: IconProps) => (
  <Icon {...thin} {...p}>
    <path d="M12 10.5C10 8.5 7.5 7.5 7.5 5a2.7 2.7 0 014.5-1.8A2.7 2.7 0 0116.5 5c0 2.5-2.5 3.5-4.5 5.5z" />
    <path d="M2.5 17.5h4l4 1.5h4.5l4.5-2 1 1.5-5 3.5H9.5l-3-1.5h-4z" />
  </Icon>
)

export const FitnessIcon = (p: IconProps) => (
  <Icon {...thin} {...p}>
    <circle cx="15" cy="4.5" r="1.6" />
    <path d="M14.5 7l-2.5 4.5 3.5 2.5v4M12 11.5l-3.5 1M3 21h18M5 21V11M5 11h2.5" />
  </Icon>
)

export const DressIcon = (p: IconProps) => (
  <Icon {...thin} {...p}>
    <path d="M9.5 3l2.5 3 2.5-3M9 8L5.5 21h13L15 8zM9 8h6" />
    <path d="M19 4l1.5 1.5L19 8l-1.5-2.5z" />
  </Icon>
)

export const ChevronLeftIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M15 5l-7 7 7 7" />
  </Icon>
)

export const ChevronRightIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M9 5l7 7-7 7" />
  </Icon>
)
