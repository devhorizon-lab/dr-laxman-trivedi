import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Laxman Trivedi - Homeopathic Physician | 30+ Years Experience",
    template: "%s | Dr. Laxman Trivedi"
  },
  description: "Dr. Laxman Trivedi is a distinguished homeopathic physician with over 30 years of experience. Specializing in natural healing, chronic diseases, pediatric care, and women's health. Book consultation at ₹500.",
  keywords: [
    "homeopathic doctor",
    "Dr. Laxman Trivedi", 
    "homeopathic physician",
    "natural medicine",
    "holistic healing",
    "chronic diseases",
    "pediatric homeopathy",
    "women's health",
    "mental health",
    "digestive disorders",
    "respiratory conditions",
    "autoimmune disorders",
    "preventive medicine",
    "homeopathic consultation",
    "natural treatment",
    "alternative medicine",
    "Sasaram",
    "Bihar",
    "homeopathic doctor Sasaram",
    "homeopathic physician Bihar",
    "Dr. Laxman Trivedi Sasaram",
    "homeopathic treatment Sasaram",
    "natural medicine doctor Bihar",
    "holistic healing Sasaram",
    "homeopathic consultation Bihar",
    "alternative medicine Sasaram",
    "chronic disease treatment Sasaram",
    "pediatric homeopathy Bihar",
    "women's health homeopathy Sasaram",
    "mental health treatment Bihar"
  ].join(", "),
  authors: [{ name: "Dr. Laxman Trivedi" }],
  creator: "Dr. Laxman Trivedi",
  publisher: "Dr. Laxman Trivedi Homeopathic Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dr-laxman-trivedi.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Dr. Laxman Trivedi - Homeopathic Physician | 30+ Years Experience",
    description: "Dr. Laxman Trivedi is a distinguished homeopathic physician with over 30 years of experience. Specializing in natural healing, chronic diseases, pediatric care, and women's health.",
    url: 'https://drlaxmantrivedi.com',
    siteName: 'Dr. Laxman Trivedi Homeopathic Clinic',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Laxman Trivedi - Homeopathic Physician',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Laxman Trivedi - Homeopathic Physician',
    description: 'Dr. Laxman Trivedi is a distinguished homeopathic physician with over 30 years of experience in natural healing.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Dr. Laxman Trivedi Homeopathic Clinic",
              "description": "Dr. Laxman Trivedi is a distinguished homeopathic physician with over 30 years of experience in natural healing and holistic medicine.",
              "url": "https://dr-laxman-trivedi.vercel.app",
              "telephone": "+916386019546",
              "email": "dr.trivedi@example.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shobha Complex Rauza Road",
                "addressLocality": "Sasaram",
                "addressRegion": "Bihar",
                "postalCode": "821115",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "24.9485",
                "longitude": "84.0183"
              },
              "openingHours": [
                "Mo-Fr 09:00-18:00",
                "Sa 09:00-14:00"
              ],
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Sasaram"
                },
                {
                  "@type": "State", 
                  "name": "Bihar"
                },
                {
                  "@type": "Country",
                  "name": "India"
                }
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "24.9485",
                  "longitude": "84.0183"
                },
                "geoRadius": "50000"
              },
              "priceRange": "₹₹",
              "paymentAccepted": ["Cash", "UPI", "Bank Transfer"],
              "currenciesAccepted": "INR",
              "founder": {
                "@type": "Person",
                "name": "Dr. Laxman Trivedi",
                "jobTitle": "Homeopathic Physician",
                "description": "Dr. Laxman Trivedi is a distinguished homeopathic physician with over 30 years of experience in treating patients with natural and holistic approaches.",
                "knowsAbout": [
                  "Homeopathic Medicine",
                  "Natural Healing",
                  "Chronic Diseases",
                  "Pediatric Homeopathy",
                  "Women's Health",
                  "Mental Health",
                  "Digestive Disorders",
                  "Respiratory Conditions"
                ]
              },
              "medicalSpecialty": [
                "Homeopathic Medicine",
                "Natural Healing",
                "Chronic Disease Management",
                "Pediatric Care",
                "Women's Health",
                "Mental Health"
              ],
              "serviceType": [
                "Initial Consultation",
                "Follow-up Consultation", 
                "Emergency Consultation",
                "Homeopathic Medicine Prescription"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Consultation Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Initial Consultation",
                      "description": "Comprehensive first-time consultation including detailed case history, physical examination, and personalized treatment plan."
                    },
                    "price": "500",
                    "priceCurrency": "INR"
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Follow-up Consultation",
                      "description": "Regular follow-up sessions to monitor progress and adjust treatment plans for optimal healing."
                    },
                    "price": "300",
                    "priceCurrency": "INR"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Emergency Consultation",
                      "description": "Urgent care consultations for acute conditions requiring immediate attention and treatment."
                    },
                    "price": "1000",
                    "priceCurrency": "INR"
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Patient A"
                  },
                  "reviewBody": "Dr. Trivedi&apos;s treatment completely cured my chronic migraine. His approach is truly holistic and effective."
                },
                {
                  "@type": "Review", 
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Patient B"
                  },
                  "reviewBody": "Excellent doctor with 30+ years of experience. My child's asthma improved significantly with his treatment."
                }
              ],
                  "sameAs": [
      "https://www.facebook.com/drlaxmantrivedi",
      "https://www.instagram.com/drlaxmantrivedi",
      "https://dr-laxman-trivedi.vercel.app"
    ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
