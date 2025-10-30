import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "SignalStream - Trading Signals on Base",
  description: "Discover and monetize trading signals with immutable reputation, powered by Farcaster and Base.",
  openGraph: {
    title: "SignalStream",
    description: "Discover and monetize trading signals with immutable reputation",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
