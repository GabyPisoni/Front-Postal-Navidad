import type { Metadata } from "next";
import Providers from "@/app/providers";
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
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};