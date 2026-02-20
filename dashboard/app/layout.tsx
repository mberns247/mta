import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MTA Arrival Board",
  description: "Gates Av J/Z & B52 arrivals",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        className="min-h-screen antialiased"
        style={{ backgroundColor: "var(--board-bg)", color: "var(--board-text)" }}
      >
        {children}
      </body>
    </html>
  );
}
