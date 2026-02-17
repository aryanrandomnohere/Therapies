import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Serenity Touch Therapies",
  description: "Luxury massage therapy demo website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pricing-plan", label: "Pricing Plan" },
    { href: "/about-contact", label: "About & Contact" },
  ];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-amber-50 text-zinc-800">
          <header className="sticky top-0 z-30 border-b border-rose-100/70 bg-white/85 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <Link
                href="/"
                className="text-lg font-semibold tracking-wide text-rose-900"
              >
                Serenity Touch
              </Link>
              <nav className="flex flex-wrap items-center gap-5 text-sm font-medium">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="story-link text-zinc-700"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          <main className="mx-auto w-full max-w-6xl px-6 py-10">
            {children}
          </main>

          <footer className="border-t border-rose-100 bg-white/80">
            <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-5 text-sm text-zinc-600 md:flex-row md:items-center">
              <p>
                © {new Date().getFullYear()} Serenity Touch Therapies. All
                rights reserved.
              </p>
              <p>Mon-Sat · 9:00 AM - 8:00 PM · +1 (555) 204-7701</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
