import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="hidden md:flex gap-4">
      <Button title="메뉴1" />
      <Button title="메뉴2" />
      <Button title="로그인" />
    </nav>
  );
};

export default NavBar;

//버튼모어 추가시킬 때
// import Button from "./Button";
// import Logo from "./Logo";
// import NavBar from "./NavBar";

// const Header = () => {
//   return (
//     <header className="bg-blue-100 px-2 py-4 flex justify-between">
//       <Logo />
//       <NavBar />
//       <Button name="..." isMoreButton={true} />
//     </header>
//   );
// };

// export default Header;
