import "./globals.css";

export const metadata = {
  title: "Concrete Ascendant",
  description: "Field service dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        {children}
      </body>
    </html>
  );
}
