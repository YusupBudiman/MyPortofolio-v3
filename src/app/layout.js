import "@/styles";
import FullpageProvider from "@/components/FullpageProvider";
import Header from "@/components/Header";

export const metadata = {
  title: "My Portfolio",
  description: "Personal portfolio built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0e0e0e] text-white overflow-hidden">
        <FullpageProvider>
          <Header />
          {children}
        </FullpageProvider>
      </body>
    </html>
  );
}
