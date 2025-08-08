import type { Metadata } from "next";
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
  title: "Dr. Laxman Trivedi - Homeopathic Physician",
  description: "Dr. Laxman Trivedi is a distinguished homeopathic physician with over 30 years of experience in treating patients with natural and holistic approaches.",
  keywords: "homeopathic doctor, natural medicine, holistic healing, Dr. Laxman Trivedi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}

function Navigation() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">Dr. Laxman Trivedi</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
            <a href="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
          </div>
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
