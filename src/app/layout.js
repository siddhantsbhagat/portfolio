import { Space_Grotesk, Oswald, VT323, Silkscreen } from "next/font/google";
import "./globals.css";

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
  title: "Spidey Tracker",
  description: "Web-slinger identity design system",
};

import CursorTrail from "@/components/CursorTrail";
import CommandPalette from "@/components/CommandPalette";
import IntroAnimation from "@/components/IntroAnimation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} ${fontTerminal.variable} ${fontPixel.variable} font-sans antialiased bg-tracker-bg text-tracker-text`}
      >
        <CursorTrail />
        <CommandPalette />
        <IntroAnimation>
          {children}
        </IntroAnimation>
      </body>
    </html>
  );
}
