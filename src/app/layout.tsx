import type { Metadata } from "next";
import { Bebas_Neue, Montserrat, Caveat, Kanit, Orbitron, Anton } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import SpaceBackground from "@/components/canvas/SpaceBackground";
import MouseEffects from "@/components/ui/mouse-effects";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: ['400'],
  subsets: ["latin"],
  variable: "--font-bebas",
});

const montserrat = Montserrat({
  weight: ['100', '300', '400', '500', '600', '700', '900'],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const caveat = Caveat({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-caveat",
});

const kanit = Kanit({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: "--font-kanit",
});

const orbitron = Orbitron({
  weight: ['400', '500', '700', '900'],
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const anton = Anton({
  weight: ['400'],
  subsets: ["latin"],
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "Naman Kumar Rai | Portfolio",
  description: "Data Science & AI Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${montserrat.variable} ${bebasNeue.variable} ${caveat.variable} ${kanit.variable} ${orbitron.variable} ${anton.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#0C0C0C] font-kanit">
        <SmoothScroll>
          <SpaceBackground />
          <div className="fixed inset-0 z-[9999] pointer-events-none">
            <MouseEffects showLabel={false} />
          </div>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}


