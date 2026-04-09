import type { Metadata } from "next";
import Providers from "@/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Revenue-Based Bridge Capital | EPOCH Funding",
  description:
    "Structured revenue-based capital for businesses seeking fast, non-dilutive liquidity solutions.",
  authors: [{ name: "EPOCH Funding" }],
  keywords: ["revenue based financing", "structured bridge capital", "working capital solutions"],
  openGraph: {
    title: "Revenue-Based Bridge Capital | EPOCH Funding",
    description:
      "Structured revenue-based capital for businesses seeking fast, non-dilutive liquidity solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
