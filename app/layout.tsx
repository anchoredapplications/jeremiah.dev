import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider"
import { ReCaptchaProvider } from "next-recaptcha-v3";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "jeremiah.dev",
  description: "Jeremiah \"J\" Gage Portfolio, Works, Skills, Achievements.",
  icons: '/favicon.svg'
};
 
export default function RootLayout({ children }:  Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ReCaptchaProvider useEnterprise>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </ReCaptchaProvider>
        </body>
      </html>
  )
}
