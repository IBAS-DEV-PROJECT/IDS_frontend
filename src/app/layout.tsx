// src/app/layout.tsx
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "SPOTI TEST",
  description: "Test with Spotify",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-white text-gray-900 min-h-screen w-full">
        <div className="min-h-screen w-full">
          <header className="w-full p-4 bg-primary text-white">
            <h1 className="text-xl sm:text-2xl font-bold">SPOTI TEST</h1>
          </header>
          <main className="w-full p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
