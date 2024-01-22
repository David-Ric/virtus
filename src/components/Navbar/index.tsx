import { useState } from "react";
import "../../styles/navibar.scss";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { RiLoginBoxLine } from "react-icons/ri";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo"></div>
      <nav className={menuOpen ? "open" : ""}>
        <a href="/virtus">Home</a>
        <a href="/virtus">Projetos</a>
        <a href="/virtus">Clientes</a>
        <a href="/virtus">Sobre-nós</a>
      </nav>
      <Link className="login-link d-flex" to="/login">
        <RiLoginBoxLine fontSize={20} />
        <h1>Entrar</h1>
      </Link>
      <div
        className={menuOpen ? " nav-btn open" : "nav-btn"}
        onClick={toggleMenu}
      >
        {menuOpen ? <FaTimes /> : <GiHamburgerMenu />}
      </div>
    </header>
  );
}
