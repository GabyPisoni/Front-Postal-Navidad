import type { Metadata } from "next";
import { CssBaseline } from "@mui/material";

export const metadata: Metadata = {
  title: "Postal Creator",
  description: "Create beautiful Christmas postcards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        {children}
      </body>
    </html>
  );
}
