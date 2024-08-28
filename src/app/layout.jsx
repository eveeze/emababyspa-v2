import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
export const metadata = {
  title: "ema baby spa",
  description: "ema baby spa adalah spa",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
