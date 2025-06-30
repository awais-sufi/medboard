import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: "500",
   subsets: ['latin'],
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Medbord",
  description: "A software, platform, or dashboard related to medical information or healthcare.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ubuntu.className}>
      <body
      >
        {children}
      </body>
    </html>
  );
}
