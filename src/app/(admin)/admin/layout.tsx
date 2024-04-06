import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/lib/providers/ThemeProvider";
import { redirect } from "next/navigation";
import Header from "./components/Layouts/Header/Header";
import Footer from "./components/Layouts/Footer/Footer";
import SideBar from "./components/Layouts/Aside/SideBar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const auth = true;
  if (!auth) {
    redirect("/");
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="flex gap-4">
            <SideBar />
            <div className="flex-1 bg-[#eff4f8] p-6">{children}</div>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
