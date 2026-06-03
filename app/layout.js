import "./globals.css";

export const metadata = {
  title: "Design Agency — Crafting Digital Excellence",
  description:
    "Design Agency is a premium design studio crafting digital experiences that captivate, convert, and endure. UI/UX, Branding, Web Development & Digital Marketing.",
  keywords: ["design agency", "UI/UX", "branding", "web development", "digital marketing"],
  openGraph: {
    title: "Design Agency — Crafting Digital Excellence",
    description: "Premium digital design studio crafting experiences that captivate and convert.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-ink text-cream antialiased">{children}</body>
    </html>
  );
}
