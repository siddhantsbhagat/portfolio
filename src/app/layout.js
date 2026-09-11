import { Space_Grotesk, Oswald } from "next/font/google";
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

export const metadata = {
  title: "Web-Slinger Portfolio",
  description: "Web-slinger identity design system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} font-sans antialiased bg-deep-bg text-off-white`}
      >
        {children}
      </body>
    </html>
  );
}
