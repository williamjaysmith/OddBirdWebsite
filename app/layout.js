import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/NavigationContainer";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

export const metadata = {
  title: {
    template: "%s / The Wildernests",
    default: "Welcome / The Wildernests",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} grid min-h-screen grid-rows-[auto_1fr] bg-primary-950 text-primary-100 antialiased`}
      >
        <Header />

        <div className="flex-1 px-4 py-12 md:px-8">
          <main className="mx-auto w-full max-w-7xl">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
