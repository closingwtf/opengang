import { ThemeProvider } from "@/context/theme-provider";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import "./prism.css";

export const metadata: Metadata = {
  title:
    "ClosingStats - Crowdsourced Anonymized Mortgage Closing Data Analytics",
  description:
    "ClosingStats is an open source project for sharing useful data anonymously for the betterment of everyone. The project easily allows for the processing, structuing, evaluation, aggregation, and dashboarding of financial documents, helping consumers make informed decisions through collective intelligence.",
  openGraph: {
    title:
      "ClosingStats - Crowdsourced Anonymized Mortgage Closing Data Analytics",
    description:
      "An open source Glassdoor for Financial Data with document processing, privacy-first anonymization, analytics and data visualization.",
    images: ["https://placehold.co/1200x400"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ClosingStats - Crowdsourced Anonymized Mortgage Closing Data Analytics",
    description:
      "An open source Glassdoor for Financial Data with document processing, privacy-first anonymization, analytics and data visualization.",
    images: ["https://placehold.co/1200x400"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={cn(
            GeistSans.className,
            "bg-white dark:bg-black antialiased h-full w-full"
          )}
        >
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
            defaultTheme="light"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
