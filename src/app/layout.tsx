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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
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
        className={`${fredokaRegular.variable} ${fredokaBold.variable} font-regular antialiased px-10 py-5 max-h-screen overflow-y-auto overflow-x-hidden`}
      >
        <div className="absolute top-0 left-0 w-screen h-screen">
          <div className="absolute top-5 right-[10%] w-20 h-20 transform rotate-12 rounded-lg bg-gradient-to-r from-slate-400 to-slate-900 dark:from-rose-200 dark:to-pink-600 shadow-2xl shadow-black"></div>
          <div className="absolute top-1/2 left-[3%] w-20 h-20 transform rotate-12 rounded-lg bg-gradient-to-r from-slate-400 to-slate-900 dark:from-rose-200 dark:to-pink-600 shadow-2xl shadow-black"></div>
          <div className="absolute top-1/3 right-[20%] w-32 h-32 transform -rotate-[20deg] rounded-xl bg-gradient-to-r from-slate-400 dark:from-rose-200 dark:to-pink-600 to-slate-900 shadow-2xl shadow-black"></div>
          <div className="absolute top-[15%] -left-[2%] w-20 h-20 transform -rotate-[20deg] rounded-full bg-gradient-to-r from-slate-400 dark:from-rose-200 dark:to-pink-600 to-slate-900 shadow-2xl shadow-black"></div>
          <div className="absolute top-3/4 left-[28%] w-12 h-12 transform -rotate-[45deg] rounded-2xl bg-gradient-to-r from-slate-400 dark:from-rose-200 dark:to-pink-600 to-slate-900 shadow-2xl shadow-black"></div>
          <div className="absolute top-1/2 right-[10%] w-14 h-14 transform rotate-[28deg] rounded-full bg-gradient-to-r from-slate-400 dark:from-rose-200 dark:to-pink-600 to-slate-900 shadow-2xl shadow-black"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 transform rotate-[28deg] rounded-2xl bg-gradient-to-r from-slate-400 to-slate-900 dark:from-rose-200 dark:to-pink-600 shadow-2xl shadow-black"></div>
        </div>
        <ContextAddProvider>
          <Navbar />
          {children}
        </ContextAddProvider>
        <footer className="absolute bottom-2 left-0 w-full text-center text-xs text-zinc-600 dark:textrose-from-rose-200">
          ⚡ this tiny todo-app is powered w/luv by Avery &lt;3 Shayy.
        </footer>
      </body>
    </html>
  );
}
