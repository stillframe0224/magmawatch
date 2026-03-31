const S = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" } as const;
const stroke = "currentColor";

export function SecurityIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...S} className={className}>
      <path d="M12 2L3 7v5c0 5.25 3.83 10.15 9 11.25C17.17 22.15 21 17.25 21 12V7l-9-5z" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TechIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...S} className={className}>
      <rect x="6" y="6" width="12" height="12" rx="2" stroke={stroke} strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2" stroke={stroke} strokeWidth="1.5" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke={stroke} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function EnergyIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...S} className={className}>
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function CultureIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...S} className={className}>
      <circle cx="12" cy="12" r="10" stroke={stroke} strokeWidth="1.5" />
      <path d="M12 2c-3 3.5-3 8.5 0 12s3 8.5 0 12" stroke={stroke} strokeWidth="1" opacity="0.6" />
      <path d="M2 12h20" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <path d="M4 7h16M4 17h16" stroke={stroke} strokeWidth="0.8" opacity="0.3" />
    </svg>
  );
}

export function DemocracyIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...S} className={className}>
      <path d="M3 21h18" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 21V11l7-7 7 7v10" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 21v-5h6v5" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M5 11h14" stroke={stroke} strokeWidth="1.5" />
    </svg>
  );
}

export function ConflictIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...S} className={className}>
      <circle cx="12" cy="12" r="9" stroke={stroke} strokeWidth="1.5" />
      <circle cx="12" cy="12" r="5" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <circle cx="12" cy="12" r="1.5" fill={stroke} opacity="0.7" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function EntertainmentIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...S} className={className}>
      <rect x="2" y="4" width="20" height="16" rx="2" stroke={stroke} strokeWidth="1.5" />
      <polygon points="10,8 10,16 16,12" fill={stroke} opacity="0.6" />
    </svg>
  );
}

export function SportsIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...S} className={className}>
      <path d="M6 21h12l-1-4H7l-1 4z" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7 17l-2-6 3-3h8l3 3-2 6" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 8V5h6v3" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M5 11h14" stroke={stroke} strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

export function ScienceIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...S} className={className}>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke={stroke} strokeWidth="1.2" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke={stroke} strokeWidth="1.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke={stroke} strokeWidth="1.2" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2" fill={stroke} />
    </svg>
  );
}

export const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  security_alliance: SecurityIcon,
  technology_ai: TechIcon,
  energy_resources: EnergyIcon,
  culture_media: CultureIcon,
  democracy_governance: DemocracyIcon,
  regional_conflicts: ConflictIcon,
  entertainment: EntertainmentIcon,
  sports: SportsIcon,
  science_climate: ScienceIcon,
};
