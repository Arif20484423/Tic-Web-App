import { Inter } from "next/font/google";
import { AppProvider } from "@/context/app.context";
import "./globals.css";
const inter = Inter({
  subsets: ["latin"],
});
export const metadata = {
  title: "Tic Web App",
  description: "User and Company Management for Tic",
};

export default function RootLayout({ children }) {
  console.log("1");
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <AppProvider>
        {children}
        </AppProvider>
      </body>
    </html>
  );
}
