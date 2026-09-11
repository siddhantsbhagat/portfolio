import { Space_Grotesk, Oswald, VT323, Silkscreen } from "next/font/google";
import "./globals.css";
import CursorTrail from "@/components/CursorTrail";
import CommandPalette from "@/components/CommandPalette";
import GlassNav from "@/components/GlassNav";

const fontSans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontDisplay = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700"],
});

const fontTerminal = VT323({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-terminal",
});

const fontPixel = Silkscreen({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pixel",
});

export const metadata = {
  title: "Siddhant | Spidey Tracker",
  description: "Web-slinger identity design system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} ${fontTerminal.variable} ${fontPixel.variable} font-sans antialiased bg-[#050505] text-white min-h-screen bg-spider-pattern`}
      >
        <CursorTrail />
        <CommandPalette />
        <GlassNav />
        {children}
      </body>
    </html>
  );
}
