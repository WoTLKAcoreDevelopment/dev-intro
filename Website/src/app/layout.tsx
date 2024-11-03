import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/navbar";
import Hero from "@/app/components/hero";
import GameList from "@/app/components/GameList";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Draenor",
  description: "Draenor Project",

};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" className="flex flex-col min-h-screen">
      <head>
          <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"/>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
          <link rel="shortcut icon" href="/favicon.ico"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <title>Drenor Project</title>
          <meta name="description" content="Draenor Project"/>
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-900 text-white`}>
      <Navbar/>
      <main className="flex flex-col container">
          {children}
      </main>
      <footer className="bg-gray-800 py-4 text-center">
          <p>&copy; 2024 Draenor Project. All rights reserved.</p>
      </footer>
      </body>
      </html>
  );
}
