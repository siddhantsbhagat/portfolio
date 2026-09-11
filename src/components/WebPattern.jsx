export default function WebPattern({ className = "", opacity = 0.05 }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <defs>
        <pattern
          id="web-pattern"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          {/* Concentric rings */}
          <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
          {/* Radiating lines */}
          <line x1="50" y1="50" x2="50" y2="0" stroke="currentColor" strokeWidth="0.5" />
          <line x1="50" y1="50" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" />
          <line x1="50" y1="50" x2="0" y2="50" stroke="currentColor" strokeWidth="0.5" />
          <line x1="50" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" />
          <line x1="50" y1="50" x2="15" y2="15" stroke="currentColor" strokeWidth="0.5" />
          <line x1="50" y1="50" x2="85" y2="85" stroke="currentColor" strokeWidth="0.5" />
          <line x1="50" y1="50" x2="15" y2="85" stroke="currentColor" strokeWidth="0.5" />
          <line x1="50" y1="50" x2="85" y2="15" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#web-pattern)" />
    </svg>
  );
}
