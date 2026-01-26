import "../styles/global.css";
import FullpageProvider from "@/components/FullpageProvider";
import Header from "@/components/Header";
import CursorDot from "@/components/ui/CursorDot";

export const metadata = {
  title: "My Portfolio",
  description: "Personal portfolio built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0e0e0e] text-white overflow-hidden">
        <CursorDot />

        <FullpageProvider>
          <Header />
          {children}
        </FullpageProvider>
      </body>
    </html>
  );
}
