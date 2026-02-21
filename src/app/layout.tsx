import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Growth & Martech Specialist Portfolio | Scalable Marketing Systems",
  description: "Portfolio of a Growth & Marketing Technology Specialist focused on measurable business results, marketing automation, and technical tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
            <Link href="/" className="font-bold text-xl tracking-tighter">
              CIRANJIVI<span className="text-primary italic font-serif ml-1">BALU</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted hover:text-foreground">
              <Link href="/case-studies" className="transition-colors hover:text-foreground">Case Studies</Link>
              <Link href="/tools" className="transition-colors hover:text-foreground">Tools & Systems</Link>
              <Link href="/creative" className="transition-colors hover:text-foreground">Creative Work</Link>
              <Link href="/about" className="transition-colors hover:text-foreground">About</Link>
              <Link href="/contact" className="btn-primary py-2 px-4 text-xs">Get in Touch</Link>
            </nav>
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="border-t border-border bg-card py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <p className="font-bold text-lg mb-2">Growth & Martech Specialist</p>
                <p className="text-muted text-sm max-w-md">
                  Building scalable acquisition systems that reduce cost and increase qualified leads through technology and data.
                </p>
              </div>
              <div className="flex gap-6 text-sm text-muted">
                <Link href="/case-studies" className="hover:text-foreground">Case Studies</Link>
                <Link href="/tools" className="hover:text-foreground">Tools</Link>
                <Link href="/contact" className="hover:text-foreground">Contact</Link>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-border/50 text-center text-xs text-muted/60">
              © {new Date().getFullYear()} CIRANJIVI BALU. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
