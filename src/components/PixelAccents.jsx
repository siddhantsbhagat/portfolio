export function PixelSpider({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="32"
      height="32"
      className={className}
      shapeRendering="crispEdges"
    >
      <path
        d="M6 3h4v1H6V3zm-2 1h2v1H4V4zm8 0h-2v1h2V4zM3 5h1v1H3V5zm9 0h1v1h-1V5zM2 6h2v1H2V6zm10 0h2v1h-2V6zM1 7h3v1H1V7zm11 0h3v1h-3V7zM4 8h8v2H4V8zM1 9h2v1H1V9zm12 0h2v1h-2V9zM2 10h1v1H2v-1zm11 0h1v1h-1v-1zM3 11h1v1H3v-1zm9 0h1v1h-1v-1zM4 12h1v1H4v-1zm7 0h1v1h-1v-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PixelCorner({ className = "", position = "top-left" }) {
  const rotation = {
    "top-left": "rotate-0",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90",
  }[position];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 8"
      width="16"
      height="16"
      className={`${className} ${rotation} transform origin-center`}
      shapeRendering="crispEdges"
    >
      <path
        d="M0 0h8v1H1v7H0V0z M2 2h4v1H3v3H2V2z"
        fill="currentColor"
      />
    </svg>
  );
}
