import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import ReactToast from "@/components/react-toast";
import SessionProvider from "@/util/SessionProvider";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Navbar />
          {children}
          <ReactToast />
        </SessionProvider>
      </body>
    </html>
  );
}
