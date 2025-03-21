import type { Metadata } from "next";
import "../shared/styles/globals.css";
import Header from "@/widgets/Header";
import Footer from "@/widgets/Footer";

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
      <body className="bg-white text-gray-900 min-h-screen flex flex-col w-full">
        <Header />
        <main className="flex-1 w-full p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
