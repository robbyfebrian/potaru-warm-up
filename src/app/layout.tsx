import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import Providers from "@/util/providers";
import './global.css'

export const metadata: Metadata = {
  title: "Potaru Movies",
  description: "Potaru Warm Up Project",
};

const quickSans = Quicksand({ subsets: ["latin"]})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quickSans.className} antialiased bg-black`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
