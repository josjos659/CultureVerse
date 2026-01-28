import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CultureVerse - Explore, Share, and Celebrate World Cultures",
  description: "A digital platform connecting traditions, arts, languages, and stories from every corner of the globe. Discover cultural diversity through interactive maps, videos, stories, and community contributions.",
  keywords: ["culture", "traditions", "world cultures", "languages", "festivals", "arts", "global community", "cultural preservation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
