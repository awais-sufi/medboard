import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard - My App",
  description:
    "A software, platform, or dashboard related to medical information or healthcare.",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-screen bg-gray-100">{children}</div>;
}
