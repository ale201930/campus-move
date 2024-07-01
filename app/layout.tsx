import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UberProvider } from "../context/uberContext";
import 'mapbox-gl/dist/mapbox-gl.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Campus Move",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}><UberProvider>{children}</UberProvider></body>
    </html>
  );
}
