import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:4000",
  ),
  title: "Izwan Husainy | Software, Cloud & Integration Portfolio",
  description:
    "Professional portfolio of Izwan Husainy, featuring selected software, cloud, integration, automation and infrastructure work.",
  openGraph: {
    title: "Izwan Husainy | Professional Portfolio",
    description:
      "Selected work across software, cloud, integration, automation and infrastructure.",
    images: [{ url: "/profile-pic.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/profile-pic.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
