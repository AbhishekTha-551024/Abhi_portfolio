import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
import "./globals.css";

// Load Inter font
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  // CHANGE THIS: Your Name
  title: "Abhishek Singh | Portfolio", 
  description: "Interactive portfolio with an AI-powered Memoji that answers questions about me, my skills, and my experience",
  keywords: [
    "Developer", 
    "AI", 
    "Interactive", 
    "Portfolio",
    "Next.js",
    "React"
  ],
  authors: [
    {
      name: "Abhishek singh",
      url: "https://your-domain.com",
    },
  ],
  creator: "Abhishek singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Abhishek Singh Portfolio",
    description: "Interactive portfolio with an AI-powered Memoji",
    siteName: "Abhishek Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Singh Portfolio",
    description: "Interactive portfolio with an AI-powered Memoji",
    creator: "@AbhishekSingh",
  },
  icons: {
    icon: [
      {
        url: "/logo-yuvi.svg", // You may want to replace this file in /public
        sizes: "any",
      }
    ],
    shortcut: "/logo-yuvi.svg?v=2",
    apple: "/apple-touch-icon.svg?v=2",
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/logo-yuvi.svg" sizes="any" />
        
        {/* Optional: Update or Remove Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID_HERE"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window['dataLayer'] = window['dataLayer'] || [];
              function gtag(){window['dataLayer'].push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YOUR_ID_HERE');
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className={cn(
          "min-h-screen bg-white text-black dark:bg-black dark:text-white font-sans antialiased transition-colors duration-500 ease-in-out",
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}