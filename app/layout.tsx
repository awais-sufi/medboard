import type { Metadata } from "next";
import { Ubuntu, Inter, Poppins, Quicksand } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ubuntu",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Medbord",
  description:
    "A software, platform, or dashboard related to medical information or healthcare.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ubuntu.variable} ${poppins.variable} ${quicksand.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
