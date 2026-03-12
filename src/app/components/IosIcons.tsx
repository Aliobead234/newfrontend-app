// iOS SF Symbols-inspired icon components
// All icons use 24×24 viewBox, rounded stroke caps, consistent 1.6px stroke weight

interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const defaults = { size: 22, color: "currentColor", strokeWidth: 1.6 };

export function IosBookOpen({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M2 4.5A1.5 1.5 0 0 1 3.5 3H10a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H3.5A1.5 1.5 0 0 1 2 15.5V4.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
      <path d="M22 4.5A1.5 1.5 0 0 0 20.5 3H14a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h4.5A1.5 1.5 0 0 0 22 15.5V4.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
    </svg>
  );
}

export function IosStar({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2.5l2.75 5.57 6.15.9-4.45 4.33 1.05 6.12L12 16.5l-5.5 2.92 1.05-6.12L3.1 8.97l6.15-.9L12 2.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IosTarget({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9.5" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="5.5" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="1.5" fill={color} />
    </svg>
  );
}

export function IosFlame({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2c0 3.5-3.5 5.5-3.5 9a5.5 5.5 0 0 0 11 0c0-2.5-1.5-4.5-1.5-4.5-.5 2-1.5 3-2.5 3.5.5-1.5.5-4.5-3.5-8Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 18a3 3 0 0 0 4 0" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function IosCrown({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 18h18M4 10l3.5 5L12 5l4.5 10L20 10l-1.5 8H5.5L4 10Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IosSignIn({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 17l5-5-5-5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <line x1="15" y1="12" x2="3" y2="12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function IosCompass({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9.5" stroke={color} strokeWidth={strokeWidth} />
      <path d="M16.24 7.76L14.12 14.12 7.76 16.24l2.12-6.36 6.36-2.12Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="1" fill={color} />
    </svg>
  );
}

export function IosVideo({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="1" y="6" width="15" height="12" rx="2" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
      <path d="M16 10l6-3v10l-6-3V10Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IosGraduationCap({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M22 10L12 5 2 10l10 5 10-5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 12.5v5c0 2.5 6 3 6 3s6-.5 6-3v-5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <line x1="22" y1="10" x2="22" y2="15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function IosBell({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function IosPalette({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9.5" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="8" cy="10" r="1.2" fill={color} />
      <circle cx="12" cy="7.5" r="1.2" fill={color} />
      <circle cx="16" cy="10" r="1.2" fill={color} />
      <path d="M4.5 14.5C5.5 18 8.5 20 12 20c2 0 3-.8 3-2s-1-2-1-3.5c0-.8.5-1.5 1.5-1.5H17a2 2 0 0 0 0-4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function IosGlobe({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9.5" stroke={color} strokeWidth={strokeWidth} />
      <line x1="2.5" y1="12" x2="21.5" y2="12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M12 2.5C10 6 9 9 9 12s1 6 3 9.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M12 2.5C14 6 15 9 15 12s-1 6-3 9.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function IosMoon({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IosSpeaker({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M11 5L6 9H2v6h4l5 4V5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function IosShield({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2L4 5.5V11c0 5 3.5 9.74 8 11 4.5-1.26 8-6 8-11V5.5L12 2Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IosDoc({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8L14 2Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 2v6h6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <line x1="8" y1="13" x2="16" y2="13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="8" y1="17" x2="16" y2="17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="8" y1="9" x2="10" y2="9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function IosChevronRight({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M9 18l6-6-6-6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IosChevronLeft({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M15 18l-6-6 6-6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IosSignOut({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 17l5-5-5-5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <line x1="21" y1="12" x2="9" y2="12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function IosTrash({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <polyline points="3 6 5 6 21 6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 6l-1 14H6L5 6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <line x1="10" y1="11" x2="10" y2="17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="14" y1="11" x2="14" y2="17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function IosExternalLink({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 3h6v6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <line x1="10" y1="14" x2="21" y2="3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function IosGear({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="3" stroke={color} strokeWidth={strokeWidth} />
      <path d="M10.05 3.61a2.2 2.2 0 0 1 3.9 0l.28.55a2.2 2.2 0 0 0 2.96.96l.57-.28a2.2 2.2 0 0 1 2.76 2.76l-.28.57a2.2 2.2 0 0 0 .96 2.96l.55.28a2.2 2.2 0 0 1 0 3.9l-.55.28a2.2 2.2 0 0 0-.96 2.96l.28.57a2.2 2.2 0 0 1-2.76 2.76l-.57-.28a2.2 2.2 0 0 0-2.96.96l-.28.55a2.2 2.2 0 0 1-3.9 0l-.28-.55a2.2 2.2 0 0 0-2.96-.96l-.57.28a2.2 2.2 0 0 1-2.76-2.76l.28-.57a2.2 2.2 0 0 0-.96-2.96l-.55-.28a2.2 2.2 0 0 1 0-3.9l.55-.28a2.2 2.2 0 0 0 .96-2.96l-.28-.57A2.2 2.2 0 0 1 6.24 3.76l.57.28a2.2 2.2 0 0 0 2.96-.96l.28-.55Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
