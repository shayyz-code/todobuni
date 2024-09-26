import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/ui/Navbar";
import { ContextAddProvider } from "@/lib/context/ContextAdd";

const fredokaRegular = localFont({
  src: "./fonts/Fredoka-Regular.woff",
  variable: "--font-fredoka-regular",
});
const fredokaBold = localFont({
  src: "./fonts/Fredoka-Bold.woff",
  variable: "--font-fredoka-bold",
});

export const metadata: Metadata = {
  title: "_todobuni",
  description: "Raised by Shayy & Avery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated"
        />
      </head>
      <body
        className={`${fredokaRegular.variable} ${fredokaBold.variable} font-regular antialiased px-10 py-5`}
      >
        <ContextAddProvider>
          <Navbar />
          {children}
        </ContextAddProvider>
        <footer className="absolute bottom-2 left-0 w-full text-center text-xs text-zinc-600">
          🐰 this tiny todo-app is powered w/luv by Avery &lt;3 Shayy.
        </footer>
      </body>
    </html>
  );
}
