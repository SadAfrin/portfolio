import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Sadia Afrin | Full-Stack Web Developer (MERN)",
  description: "Computer Science & Engineering undergraduate specializing in MERN stack development and building scalable web applications.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className={`${inter.className} bg-brand-dark text-gray-300 selection:bg-brand-accent selection:text-white`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}


