export default function BrandMark({ className = "", width = 64, height = 64 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={width}
      height={height}
      className={className}
    >
      {/* Spider mask base (Black) */}
      <path
        d="M50 10 L80 30 L70 80 L50 95 L30 80 L20 30 Z"
        fill="#0a0a0f"
        stroke="#e0182c"
        strokeWidth="2"
      />
      {/* Spider-red accent stripes */}
      <path
        d="M50 10 L50 95 M30 80 L50 40 L70 80 M20 30 L50 40 L80 30"
        stroke="#e0182c"
        strokeWidth="2"
        fill="none"
      />
      {/* Elongated angular white eyes */}
      <path
        d="M32 45 L46 55 L42 65 Z"
        fill="#f2f2f0"
      />
      <path
        d="M68 45 L54 55 L58 65 Z"
        fill="#f2f2f0"
      />
    </svg>
  );
}
