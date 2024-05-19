import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { UserNav } from "./components/user-nav";
import { Mode } from "./components/Mode";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevXClub",
  description: "Club where you can connect with like minded people",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="fixed top-6 flex justify-between"></div> {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
