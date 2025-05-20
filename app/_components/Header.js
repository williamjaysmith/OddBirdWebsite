import Navigation from "@/app/_components/NavigationContainer";
import Logo from "@/app/_components/Logo";

function Header() {
  return (
    <header className="px-8 py-5">
      <div className="mx-auto flex max-w-7xl flex-row items-center justify-between">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
