import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GroupedTreeList from "@/components/GroupedTreeList";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "File Management System",
  description: "Carvai Technologies",
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
        <nav className="h-16 border bg-teal-600 font-bold text-3xl justify-center flex items-center text-white capitalize">document management system</nav>

        <div className="flex">
          <aside className="h-[calc(100vh-64px)] border w-64">
            <GroupedTreeList />
          </aside>
          <div className="w-full border">{children}</div>
        </div>
      </body>
    </html>
  );
}
