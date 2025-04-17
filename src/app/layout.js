import { Inter } from "next/font/google";
import { AppProvider } from "@/context/app.context";
import "./globals.css";
import { Toaster } from "react-hot-toast";
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
        <Toaster
          position="bottom-right"
          containerStyle={{
            height: "90vh",
          }}
          toastOptions={{
            
            style: {
              fontSize: "12px",
              padding: "20px",
            },
          }}
        />
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
