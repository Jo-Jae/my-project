import Logo from "./Logo";
import NavBar from "./NavBar";
import ButtonMore from "./ButtonMore";

const Header = () => {
  return (
    <header className="bg-blue-100 px-2 py-4 flex justify-between">
      <Logo />
      <NavBar />
      <ButtonMore />
    </header>
  );
};

export default Header;
