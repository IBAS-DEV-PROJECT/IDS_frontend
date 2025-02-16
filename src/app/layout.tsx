// src/app/layout.tsx
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "My App",
  description: "A Next.js 15 Project with TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header className="p-4 bg-blue-500 text-white">
          <h1 className="text-xl font-bold">My App</h1>
        </header>
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
