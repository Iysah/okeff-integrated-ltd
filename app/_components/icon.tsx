export type IconName =
  | "arrow"
  | "bars"
  | "bolt"
  | "bridge"
  | "briefcase"
  | "building"
  | "chart"
  | "check"
  | "factory"
  | "globe"
  | "leaf"
  | "mail"
  | "menu"
  | "oil"
  | "phone"
  | "pick"
  | "pin"
  | "ship"
  | "trade"
  | "x";

const iconPaths: Record<IconName, React.ReactNode> = {
  arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
  bars: <><path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20H2"/></>,
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>,
  bridge: <><path d="M3 19h18"/><path d="M5 19V8"/><path d="M19 19V8"/><path d="M5 10c4 0 4-5 7-5s3 5 7 5"/><path d="M8 19v-5M12 19v-7M16 19v-5"/></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5c0-1 1-2 2-2h4c1 0 2 1 2 2v2M3 12h18M10 12v2h4v-2"/></>,
  building: <><path d="M4 21V8l8-4 8 4v13"/><path d="M9 21v-5h6v5M8 10h.01M12 10h.01M16 10h.01M8 13h.01M12 13h.01M16 13h.01"/></>,
  chart: <><path d="M3 3v18h18"/><path d="m7 16 4-5 3 3 5-7"/><path d="M16 7h3v3"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  factory: <><path d="M3 21V10l6 4v-4l6 4V5h6v16H3Z"/><path d="M7 17h2M12 17h2M17 17h1"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></>,
  leaf: <><path d="M20 4C11 4 5 8 5 15c0 3 2 5 5 5 7 0 10-7 10-16Z"/><path d="M4 21c3-6 7-9 13-12"/></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 7 9 6 9-6"/></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  oil: <><path d="M6 21h12M8 21l2-15h4l2 15M9 12h6M8 17h8M12 6V3M16 7l3 2v5"/><path d="M19 14c-2 2-2 4 0 5 2-1 2-3 0-5Z"/></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>,
  pick: <><path d="M14 10 4 20"/><path d="M5 7c5-4 11-4 14 0-4-1-8-1-12 2"/><path d="M19 7c1 3 0 7-2 10"/></>,
  pin: <><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z"/><circle cx="12" cy="9" r="2.5"/></>,
  ship: <><path d="m3 15 3 5h12l3-5H3Z"/><path d="M6 15V8h9l3 7M9 8V4h5v4M2 22c2-1 3-1 5 0 2-1 3-1 5 0 2-1 3-1 5 0 2-1 3-1 5 0"/></>,
  trade: <><path d="M7 7h12l-3-3M17 17H5l3 3"/><path d="M19 7v4M5 17v-4"/></>,
  x: <><path d="M6 6l12 12M18 6 6 18"/></>,
};

export function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {iconPaths[name]}
    </svg>
  );
}
