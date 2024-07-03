import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Providers from "@/theme/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hardware Store",
  description: "next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const queryClient = new QueryClient()

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <QueryClientProvider client={queryClient}>
          <Providers>
            {children}
          </Providers>
        </QueryClientProvider>
      </body>
    </html>
  );
}
