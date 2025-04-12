import { Inter } from "next/font/google";
import {AuthProvider} from "@/context/auth.context";
import "./globals.css";
const inter = Inter({
  subsets:["latin"]
})
export const metadata = {
  title: "Tic Web App",
  description: "User and Company Management for Tic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
