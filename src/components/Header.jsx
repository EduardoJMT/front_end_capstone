import Logo from "../assets/svg/Logo.svg";

function Header() {
  return (
    <header>
      <img src={Logo} alt="Little Lemon Logo" width={300}></img>
    </header>
  );
}

export default Header;
