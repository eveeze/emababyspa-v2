import Navbar from "@/components/Navbar";

export default function mainLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </>
  );
}
