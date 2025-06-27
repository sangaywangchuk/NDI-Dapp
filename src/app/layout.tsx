import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { QueryProvider } from "@/providers/query-client-provider";
import { TdiFormProvider } from "@/contexts/tdi-form-context";

export const metadata: Metadata = {
  title: "NDI",
  description:
    "Jaggle.AI is an AI-powered project management platform designed to help teams cut down on repetitive tasks, allowing them to focus on creative and strategic work. It simplifies agile workflows for small teams struggling with time-consuming agile ceremonies and helps larger teams streamline team management for greater efficiency.",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-hidden" suppressHydrationWarning>
      <body
        className={`[font-family:'Urbanist-Black',Helvetica] bg-gray-100 p-6`}
        cz-shortcut-listen="true"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <QueryProvider>
            <TdiFormProvider>
              {children}
            </TdiFormProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
