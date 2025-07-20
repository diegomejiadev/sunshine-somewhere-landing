import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Footer, Navbar } from "@/components";

const airbnb = localFont({
  src: [
    {
      path: "../fonts/AirbnbCereal_W_Lt.otf",
      weight: "300",
    },
    {
      path: "../fonts/AirbnbCereal_W_Bk.otf",
      weight: "400",
    },
    {
      path: "../fonts/AirbnbCereal_W_Md.otf",
      weight: "500",
    },
    {
      path: "../fonts/AirbnbCereal_W_Bd.otf",
      weight: "600",
    },
    {
      path: "../fonts/AirbnbCereal_W_XBd.otf",
      weight: "700",
    },
    {
      path: "../fonts/AirbnbCereal_W_Blk.otf",
      weight: "800",
    },
  ],
  variable: "--font-airbnb",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  title: "Sunshine Somewhere",
  description:
    "In DPM care about your property. From expert property management and pool services to handyman repairs, cleaning, pressure washing, lawn care, and home watch.",
  applicationName: "Sunshine Somewhere",
  authors: [
    {
      name: "Diego Mejia",
      url: "https://www.linkedin.com/in/diego-mejia-dev/",
    },
  ],
  creator: "Diego Mejia",
  keywords:
    "vacation rental, property management, handyman services, pool services, cleaning services, pressure washing, lawn care, home watch, DPM, Dominguez Property Management",
  twitter: {
    title: "Sunshine Somewhere",
    description:
      "In DPM care about your property. From expert property management and pool services to handyman repairs, cleaning, pressure washing, lawn care, and home watch.",
    site: process.env.NEXT_PUBLIC_BASE_URL,
    card: "summary_large_image",
  },

  openGraph: {
    type: "website",
    countryName: "United States",
    siteName: "Sunshine Somewhere",
    title: "Sunshine Somewhere",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    description:
      "In DPM care about your property. From expert property management and pool services to handyman repairs, cleaning, pressure washing, lawn care, and home watch.",
    emails: "carlos@dpmdominguez.com",

    // images:
    //   'https://res.cloudinary.com/purplesoda/image/upload/v1704003163/Dominguez%20Property%20Management/pexels-photomix-company-101808_1_s9bjsa.jpg',
  },

  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${airbnb.className} antialiased`}>
        <Navbar className="fixed top-0 left-0 z-[999] w-full" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
