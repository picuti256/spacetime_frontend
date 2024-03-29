import type { Metadata } from "next";
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BayJamjuree,
} from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });
const baijamjuree = BayJamjuree({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-baijam",
});

export const metadata: Metadata = {
  title: "Spacetime",
  description: "Projeto Full Stack de uma capsula do tempo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} ${baijamjuree.variable} font-sans text-gray-100 bg-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
