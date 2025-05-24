import Navigation from "@/app/_components/NavigationContainer";
import Logo from "@/app/_components/Logo";

function Header() {
  return (
    <header className="px-8 py-5">
      <div className="flex flex-row justify-between items-center max-w-7xl mx-auto ">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
