// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Portfolio | Your Name",
//   description: "Creative Developer & Designer Portfolio",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }




import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  title: "Janhavi Rai | Creative Developer",
  description:
    "Full-stack developer crafting clean interfaces and scalable systems with modern web technologies.",
  keywords: [
    "Janhavi Rai",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "UI/UX Designer",
    "Portfolio",
  ],
  authors: [{ name: "Janhavi Rai" }],
  creator: "Janhavi Rai",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Janhavi Rai | Creative Developer",
    description:
      "Full-stack developer crafting clean interfaces and scalable systems.",
    siteName: "Janhavi Rai Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Janhavi Rai | Creative Developer",
    description:
      "Full-stack developer crafting clean interfaces and scalable systems.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${greatVibes.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}