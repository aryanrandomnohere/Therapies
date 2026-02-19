import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  title: "Arogya Vardhan Therapies",
  description: "Luxury massage therapy and wellness studio",
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
        <div className="min-h-screen bg-gradient-to-b from-stone-50 via-amber-50/30 to-stone-50/50 text-stone-800">
          <header className="sticky top-0 z-30 border-b border-stone-200/60 bg-white/90 backdrop-blur-xl shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
              <Link href="/" className="flex items-center gap-3 flex-shrink-0 hover:opacity-80 transition-opacity">
                <Image
                  src="/logo.jpeg"
                  alt="Arogya Vardhan Therapies Logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain rounded-full shadow-md"
                />
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">Arogya Vardhan</h1>
                  <p className="text-xs text-amber-700 leading-none tracking-wider">THERAPIES</p>
                </div>
              </Link>
              <nav className="flex flex-wrap items-center gap-6 text-sm font-medium">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="story-link text-stone-700 hover:text-emerald-700"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/about-contact#contact-us"
                  className="btn-primary text-sm py-2.5 px-5"
                >
                  Book Appointment
                </Link>
              </nav>
            </div>
          </header>

          <main className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
            {children}
          </main>

          <footer className="border-t border-stone-200 bg-gradient-to-b from-stone-50 to-stone-100/50 mt-20">
            <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-stone-600 md:flex-row md:items-center">
              <p className="font-medium">
                © {new Date().getFullYear()} Arogya Vardhan Therapies. All
                rights reserved.
              </p>
              <p className="text-stone-500">Mon-Sat · By Appointment · <span className="text-emerald-700 font-semibold">+91 9082157339</span></p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
