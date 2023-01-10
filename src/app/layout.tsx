import "~/styles/globals.css";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <head />
      <body className="text-white bg-black ">
        <main className="flex flex-col justify-between min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
