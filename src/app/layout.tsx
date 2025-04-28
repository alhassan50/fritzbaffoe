import type { Metadata } from "next";
/* import { Poppins } from "next/font/google"; */
import "./globals.css";

/* const poppins = Poppins({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
}); */

export const metadata: Metadata = {
  title: "Fritz Baffoe | Photographer",
  description:
    "Hey, I'm Frtiz Baffoe. I believe every moment has a story—and my camera is how I tell it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-clash antialiased text-gray-600`}>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
