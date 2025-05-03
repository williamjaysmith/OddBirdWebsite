import Logo from "./components/Logo";
import Navigation from "./components/navigation";

export const metadata = {
  title: "The Oddbird Inn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>copyright by oddbird inn</footer>
      </body>
    </html>
  );
}
