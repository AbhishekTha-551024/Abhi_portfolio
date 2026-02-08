import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Abhishek Singh | AI Portfolio",
  description:
    "Interactive AI-powered portfolio of Abhishek Singh showcasing skills, projects, and experience.",
  keywords: ["Abhishek Singh", "Frontend Developer", "AI Portfolio", "Next.js"],
  authors: [
    {
      name: "Abhishek Singh",
      url: "https://abhishek-portfolio.vercel.app",
    },
  ],
  creator: "Abhishek Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhishek-portfolio.vercel.app",
    title: "Abhishek Singh | AI Portfolio",
    description: "AI-powered interactive portfolio",
    siteName: "Abhishek Singh Portfolio",
  },
  icons: {
    icon: [
      {
        url: "/logo-abhishek.svg",
        sizes: "any",
      },
    ],
    shortcut: "/logo-abhishek.svg",
    apple: "/logo-abhishek.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-white text-black dark:bg-black dark:text-white font-sans antialiased",
          inter.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <main className="flex min-h-screen flex-col">{children}</main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
