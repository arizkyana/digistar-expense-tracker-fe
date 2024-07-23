import "./globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import Query from "@/providers/query";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const Layout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
};

export default function RootLayout({ children }) {
  return (
    <Query>
      <Layout>{children}</Layout>
    </Query>
  );
}
