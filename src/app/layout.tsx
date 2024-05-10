import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import NavBar from "~/components/NavBar";
import { TooltipProvider } from "~/components/ui/tooltip";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Token Port",
  description: "Responsive DeFi Portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={`font-sans ${inter.variable}`}>

          {/* <NavBar /> */}
          <TooltipProvider>
            <TRPCReactProvider>
              {children}
            </TRPCReactProvider>
          </TooltipProvider>
        </body>
    </html>
  );
}
