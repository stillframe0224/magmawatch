const S = 20;

function Flag({ children }: { children: React.ReactNode }) {
  return (
    <svg width={S} height={S} viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-[2px] overflow-hidden shrink-0" style={{ boxShadow: "0 0 0 0.5px rgba(255,255,255,0.1)" }}>
      {children}
    </svg>
  );
}

function Icon({ children, color = "currentColor" }: { children: React.ReactNode; color?: string }) {
  return (
    <svg width={S} height={S} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" style={{ color }}>
      {children}
    </svg>
  );
}

// --- Country Flags (simplified geometric) ---

function JP() {
  return <Flag><rect width="20" height="15" fill="#fff" /><circle cx="10" cy="7.5" r="4" fill="#bc002d" /></Flag>;
}
function US() {
  return (
    <Flag>
      {[0,2,4,6,8,10,12].map(i => <rect key={i} y={i * (15/13)} width="20" height={15/13} fill={i % 2 === 0 ? "#b22234" : "#fff"} />)}
      <rect width="8" height={15 * 7/13} fill="#3c3b6e" />
      {[1,3,5].map(r => [1,3,5].map(c => <circle key={`${r}-${c}`} cx={c * 1.3 + 0.5} cy={r * 1.2 + 0.3} r="0.5" fill="#fff" />))}
    </Flag>
  );
}
function CN() {
  return (
    <Flag>
      <rect width="20" height="15" fill="#de2910" />
      <polygon points="4,2 4.6,3.8 6.5,3.8 5,5 5.5,6.8 4,5.8 2.5,6.8 3,5 1.5,3.8 3.4,3.8" fill="#ffde00" />
    </Flag>
  );
}
function EU() {
  return (
    <Flag>
      <rect width="20" height="15" fill="#003399" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * 30 - 90) * Math.PI / 180;
        return <polygon key={i} points={star(10 + Math.cos(a) * 4.5, 7.5 + Math.sin(a) * 4.5, 0.8)} fill="#ffcc00" />;
      })}
    </Flag>
  );
}
function DE() {
  return <Flag><rect width="20" height="5" fill="#000" /><rect y="5" width="20" height="5" fill="#dd0000" /><rect y="10" width="20" height="5" fill="#ffcc00" /></Flag>;
}
function FR() {
  return <Flag><rect width="6.67" height="15" fill="#002395" /><rect x="6.67" width="6.67" height="15" fill="#fff" /><rect x="13.33" width="6.67" height="15" fill="#ed2939" /></Flag>;
}
function GB() {
  return (
    <Flag>
      <rect width="20" height="15" fill="#012169" />
      <path d="M0,0 L20,15 M20,0 L0,15" stroke="#fff" strokeWidth="2.5" />
      <path d="M0,0 L20,15 M20,0 L0,15" stroke="#c8102e" strokeWidth="1.5" />
      <path d="M10,0 V15 M0,7.5 H20" stroke="#fff" strokeWidth="4" />
      <path d="M10,0 V15 M0,7.5 H20" stroke="#c8102e" strokeWidth="2.5" />
    </Flag>
  );
}
function UA() {
  return <Flag><rect width="20" height="7.5" fill="#005bbb" /><rect y="7.5" width="20" height="7.5" fill="#ffd500" /></Flag>;
}
function RU() {
  return <Flag><rect width="20" height="5" fill="#fff" /><rect y="5" width="20" height="5" fill="#0039a6" /><rect y="10" width="20" height="5" fill="#d52b1e" /></Flag>;
}
function DK() {
  return (
    <Flag>
      <rect width="20" height="15" fill="#c60c30" />
      <rect x="5.5" width="2.5" height="15" fill="#fff" />
      <rect y="6.25" width="20" height="2.5" fill="#fff" />
    </Flag>
  );
}
function ES() {
  return (
    <Flag>
      <rect width="20" height="3.75" fill="#c60b1e" />
      <rect y="3.75" width="20" height="7.5" fill="#ffc400" />
      <rect y="11.25" width="20" height="3.75" fill="#c60b1e" />
    </Flag>
  );
}
function VE() {
  return <Flag><rect width="20" height="5" fill="#cf142b" /><rect y="5" width="20" height="5" fill="#00247d" /><rect y="10" width="20" height="5" fill="#fc0" /></Flag>;
}
function BR() {
  return (
    <Flag>
      <rect width="20" height="15" fill="#009c3b" />
      <polygon points="10,1.5 18.5,7.5 10,13.5 1.5,7.5" fill="#ffdf00" />
      <circle cx="10" cy="7.5" r="3" fill="#002776" />
    </Flag>
  );
}
function IN() {
  return (
    <Flag>
      <rect width="20" height="5" fill="#ff9933" />
      <rect y="5" width="20" height="5" fill="#fff" />
      <rect y="10" width="20" height="5" fill="#138808" />
      <circle cx="10" cy="7.5" r="1.5" fill="none" stroke="#000080" strokeWidth="0.5" />
    </Flag>
  );
}
function IR() {
  return <Flag><rect width="20" height="5" fill="#239f40" /><rect y="5" width="20" height="5" fill="#fff" /><rect y="10" width="20" height="5" fill="#da0000" /></Flag>;
}
function IL() {
  return (
    <Flag>
      <rect width="20" height="15" fill="#fff" />
      <rect y="1" width="20" height="2" fill="#0038b8" />
      <rect y="12" width="20" height="2" fill="#0038b8" />
      <polygon points="10,4 12.5,9 7.5,9" fill="none" stroke="#0038b8" strokeWidth="0.8" />
      <polygon points="10,11 12.5,6 7.5,6" fill="none" stroke="#0038b8" strokeWidth="0.8" />
    </Flag>
  );
}
function SA() {
  return (
    <Flag>
      <rect width="20" height="15" fill="#006c35" />
      <text x="10" y="8" textAnchor="middle" fill="#fff" fontSize="4" fontFamily="serif" dominantBaseline="middle">☪</text>
    </Flag>
  );
}
function KR() {
  return (
    <Flag>
      <rect width="20" height="15" fill="#fff" />
      {/* Taeguk - upper red, lower blue */}
      <clipPath id="kr-clip"><circle cx="10" cy="7.5" r="3.5" /></clipPath>
      <g clipPath="url(#kr-clip)">
        <rect x="6.5" y="4" width="7" height="7" fill="#cd2e3a" />
        <rect x="6.5" y="7.5" width="7" height="4" fill="#0047a0" />
        <circle cx="10" cy="5.75" r="1.75" fill="#cd2e3a" />
        <circle cx="10" cy="9.25" r="1.75" fill="#0047a0" />
      </g>
      <circle cx="10" cy="7.5" r="3.5" fill="none" stroke="#333" strokeWidth="0.3" />
      {/* Trigrams */}
      <g stroke="#000" strokeWidth="0.7" strokeLinecap="round">
        <line x1="14.5" y1="3" x2="16.5" y2="4" />
        <line x1="14" y1="4" x2="16" y2="5" />
        <line x1="13.5" y1="5" x2="15.5" y2="6" />
        <line x1="3.5" y1="11" x2="5.5" y2="10" />
        <line x1="4" y1="12" x2="6" y2="11" />
        <line x1="4.5" y1="13" x2="6.5" y2="12" />
      </g>
    </Flag>
  );
}
function HU() {
  return <Flag><rect width="20" height="5" fill="#ce2939" /><rect y="5" width="20" height="5" fill="#fff" /><rect y="10" width="20" height="5" fill="#477050" /></Flag>;
}
function AR() {
  return (
    <Flag>
      <rect width="20" height="5" fill="#74acdf" />
      <rect y="5" width="20" height="5" fill="#fff" />
      <rect y="10" width="20" height="5" fill="#74acdf" />
      <circle cx="10" cy="7.5" r="1.5" fill="#f6b40e" />
    </Flag>
  );
}
function CL() {
  return (
    <Flag>
      <rect width="20" height="15" fill="#fff" />
      <rect y="7.5" width="20" height="7.5" fill="#d52b1e" />
      <rect width="6.67" height="7.5" fill="#0039a6" />
      <polygon points={star(3.33, 3.75, 1.5)} fill="#fff" />
    </Flag>
  );
}
function BO() {
  return <Flag><rect width="20" height="5" fill="#d52b1e" /><rect y="5" width="20" height="5" fill="#f9e300" /><rect y="10" width="20" height="5" fill="#007934" /></Flag>;
}
function MM() {
  return (
    <Flag>
      <rect width="20" height="5" fill="#fecb00" />
      <rect y="5" width="20" height="5" fill="#34b233" />
      <rect y="10" width="20" height="5" fill="#ea2839" />
      <polygon points={star(10, 7.5, 3)} fill="#fff" />
    </Flag>
  );
}
function ML() {
  return <Flag><rect width="6.67" height="15" fill="#14b53a" /><rect x="6.67" width="6.67" height="15" fill="#fcd116" /><rect x="13.33" width="6.67" height="15" fill="#ce1126" /></Flag>;
}
function YE() {
  return <Flag><rect width="20" height="5" fill="#ce1126" /><rect y="5" width="20" height="5" fill="#fff" /><rect y="10" width="20" height="5" fill="#000" /></Flag>;
}

// --- Concept Icons (monochrome, ember-tinted) ---

function GlobeIcon() {
  return (
    <Icon color="#e67e22">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="10" cy="10" rx="3.5" ry="7.5" stroke="currentColor" strokeWidth="0.8" />
      <path d="M2.5,10 H17.5" stroke="currentColor" strokeWidth="0.8" />
      <path d="M3.5,5.5 H16.5 M3.5,14.5 H16.5" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
    </Icon>
  );
}
function GlobeAmericasIcon() {
  return (
    <Icon color="#e67e22">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8,3 L7,5 L8,7 L7,9 L9,11 L8,14 L10,17" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <path d="M12,3 L13,5 L12,8 L14,10 L12,12" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.5" />
    </Icon>
  );
}
function GlobeAfricaIcon() {
  return (
    <Icon color="#e67e22">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M10,3 L9,5 L10,7 L9,9 L11,12 L10,14 L11,17" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <path d="M13,4 L14,7 L13,10" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.5" />
    </Icon>
  );
}
function BrainIcon() {
  return (
    <Icon color="#e67e22">
      <path d="M10,17 V10 M10,10 C10,6 7,3 5,5 C3,7 5,9 7,9 M10,10 C10,6 13,3 15,5 C17,7 15,9 13,9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M5,9 C3,10 4,13 6,13 M15,9 C17,10 16,13 14,13 M6,13 C5,14 6,16 8,16 M14,13 C15,14 14,16 12,16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
    </Icon>
  );
}
function SearchIcon() {
  return (
    <Icon color="#e67e22">
      <circle cx="9" cy="9" r="5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M13,13 L17,17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </Icon>
  );
}
function StopIcon() {
  return (
    <Icon color="#c23616">
      <path d="M6,3 H14 L17,6 V14 L14,17 H6 L3,14 V6 Z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.15" />
      <path d="M7,10 H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </Icon>
  );
}
function PaletteIcon() {
  return (
    <Icon color="#e67e22">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="7" cy="7" r="1" fill="currentColor" />
      <circle cx="12" cy="6" r="1" fill="currentColor" />
      <circle cx="14" cy="10" r="1" fill="currentColor" />
      <circle cx="7" cy="12" r="1.5" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="0.5" />
    </Icon>
  );
}
function MoneyIcon() {
  return (
    <Icon color="#f0a500">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M10,5 V15 M7.5,7.5 H11.5 A1.5,1.5 0 0,1 11.5,10.5 H8 A1.5,1.5 0 0,0 8,13.5 H12.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </Icon>
  );
}
function ClipboardIcon() {
  return (
    <Icon color="#e67e22">
      <rect x="4" y="3" width="12" height="15" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <rect x="7" y="1.5" width="6" height="3" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M7,9 H13 M7,12 H11" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </Icon>
  );
}
function ClapperIcon() {
  return (
    <Icon color="#e67e22">
      <rect x="2" y="6" width="16" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2,6 L5,2 L18,2 L18,6" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M6,2 L4,6 M10,2 L8,6 M14,2 L12,6" stroke="currentColor" strokeWidth="1" />
    </Icon>
  );
}
function RobotIcon() {
  return (
    <Icon color="#e67e22">
      <rect x="4" y="6" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M10,6 V3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="10" cy="2" r="1" fill="currentColor" />
      <circle cx="7.5" cy="10" r="1.2" fill="currentColor" />
      <circle cx="12.5" cy="10" r="1.2" fill="currentColor" />
      <path d="M7.5,13.5 H12.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </Icon>
  );
}
function MuteIcon() {
  return (
    <Icon color="#999">
      <path d="M3,8 H6 L11,4 V16 L6,12 H3 Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M14,8 L18,12 M18,8 L14,12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </Icon>
  );
}
function ScaleIcon() {
  return (
    <Icon color="#e67e22">
      <path d="M10,2 V16 M6,16 H14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M4,5 H16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M4,5 L2.5,10 Q4,12 5.5,10 Z" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.15" />
      <path d="M16,5 L14.5,10 Q16,12 17.5,10 Z" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.15" />
    </Icon>
  );
}
function MusicIcon() {
  return (
    <Icon color="#e67e22">
      <path d="M7,14 V5 L16,3 V12" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <circle cx="5" cy="14" r="2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="14" cy="12" r="2" stroke="currentColor" strokeWidth="1.2" />
    </Icon>
  );
}
function MicIcon() {
  return (
    <Icon color="#e67e22">
      <rect x="7" y="2" width="6" height="10" rx="3" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4,10 Q4,16 10,16 Q16,16 16,10" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M10,16 V18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </Icon>
  );
}
function StadiumIcon() {
  return (
    <Icon color="#e67e22">
      <path d="M2,14 Q10,8 18,14" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M2,14 H18 V17 H2 Z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.1" />
      <path d="M4,14 V11 M10,14 V9 M16,14 V11" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
    </Icon>
  );
}
function SoccerIcon() {
  return (
    <Icon color="#e67e22">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.2" />
      <polygon points="10,5 13,7.5 12,11 8,11 7,7.5" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.2" />
    </Icon>
  );
}
function WaterIcon() {
  return (
    <Icon color="#4aa3df">
      <path d="M10,2 Q5,9 5,12 A5,5 0 0,0 15,12 Q15,9 10,2 Z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.15" />
    </Icon>
  );
}
function BatteryIcon() {
  return (
    <Icon color="#27ae60">
      <rect x="3" y="5" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <rect x="16" y="8" width="2" height="4" rx="0.5" fill="currentColor" />
      <rect x="5" y="7" width="5" height="6" rx="0.5" fill="currentColor" fillOpacity="0.4" />
    </Icon>
  );
}
function PickaxeIcon() {
  return (
    <Icon color="#e67e22">
      <path d="M4,16 L12,8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9,5 L15,3 L17,5 L15,11 Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
    </Icon>
  );
}
function CowIcon() {
  return (
    <Icon color="#e67e22">
      <ellipse cx="10" cy="11" rx="6" ry="5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="10" cy="13" r="2" stroke="currentColor" strokeWidth="0.8" />
      <path d="M5,8 L3,4 M15,8 L17,4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="8.5" cy="9.5" r="0.7" fill="currentColor" />
      <circle cx="11.5" cy="9.5" r="0.7" fill="currentColor" />
    </Icon>
  );
}
function DNAIcon() {
  return (
    <Icon color="#e67e22">
      <path d="M6,2 Q14,6 6,10 Q14,14 6,18" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M14,2 Q6,6 14,10 Q6,14 14,18" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M7,6 H13 M7,14 H13" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
    </Icon>
  );
}
function SyringeIcon() {
  return (
    <Icon color="#e67e22">
      <path d="M14,2 L18,6 L8,16 L4,12 Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M4,12 L2,14 L6,18 L8,16" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M15,3 L17,5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </Icon>
  );
}
function PlantIcon() {
  return (
    <Icon color="#27ae60">
      <path d="M10,18 V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M10,12 Q5,10 4,5 Q9,5 10,8" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.2" />
      <path d="M10,8 Q15,6 16,2 Q11,3 10,6" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.2" />
    </Icon>
  );
}

// --- Helper ---
function star(cx: number, cy: number, r: number): string {
  return Array.from({ length: 5 }).map((_, i) => {
    const a1 = (i * 72 - 90) * Math.PI / 180;
    const a2 = ((i * 72) + 36 - 90) * Math.PI / 180;
    const ir = r * 0.4;
    return `${cx + Math.cos(a1) * r},${cy + Math.sin(a1) * r} ${cx + Math.cos(a2) * ir},${cy + Math.sin(a2) * ir}`;
  }).join(" ");
}

// --- Registry ---
const FLAG_MAP: Record<string, React.ComponentType> = {
  "🇯🇵": JP, "🇺🇸": US, "🇨🇳": CN, "🇷🇺": RU, "🇪🇺": EU, "🇩🇪": DE, "🇫🇷": FR,
  "🇬🇧": GB, "🇺🇦": UA, "🇩🇰": DK, "🇪🇸": ES, "🇻🇪": VE, "🇧🇷": BR,
  "🇮🇳": IN, "🇮🇷": IR, "🇮🇱": IL, "🇸🇦": SA, "🇰🇷": KR, "🇭🇺": HU,
  "🇦🇷": AR, "🇨🇱": CL, "🇧🇴": BO, "🇲🇲": MM, "🇲🇱": ML, "🇾🇪": YE,
  "🌐": GlobeIcon, "🌎": GlobeAmericasIcon, "🌍": GlobeAfricaIcon,
  "🧠": BrainIcon, "🔍": SearchIcon, "🛑": StopIcon,
  "🎨": PaletteIcon, "💰": MoneyIcon, "📋": ClipboardIcon,
  "🎬": ClapperIcon, "🤖": RobotIcon, "🔇": MuteIcon,
  "⚖️": ScaleIcon, "🎵": MusicIcon, "🎤": MicIcon,
  "🏟️": StadiumIcon, "⚽": SoccerIcon, "💧": WaterIcon,
  "🔋": BatteryIcon, "⛏️": PickaxeIcon, "🐄": CowIcon,
  "🧬": DNAIcon, "💉": SyringeIcon, "🌿": PlantIcon,
};

export default function FlagIcon({ flag, size }: { flag: string; size?: number }) {
  const Component = FLAG_MAP[flag];
  if (Component) {
    return <span style={size ? { transform: `scale(${size / 20})`, transformOrigin: "left center", display: "inline-flex" } : { display: "inline-flex" }}><Component /></span>;
  }
  // Fallback: render the emoji
  return <span className="text-[16px] leading-none" style={size ? { fontSize: `${size}px` } : undefined}>{flag}</span>;
}

// Check if a flag string is a country flag (not a concept icon)
export function isCountryFlag(flag: string): boolean {
  const countryFlags = new Set([
    "🇯🇵","🇺🇸","🇨🇳","🇪🇺","🇩🇪","🇫🇷","🇬🇧","🇺🇦","🇩🇰","🇪🇸",
    "🇻🇪","🇧🇷","🇮🇳","🇮🇷","🇮🇱","🇸🇦","🇰🇷","🇭🇺","🇦🇷","🇨🇱",
    "🇧🇴","🇲🇲","🇲🇱","🇾🇪",
  ]);
  return countryFlags.has(flag);
}
