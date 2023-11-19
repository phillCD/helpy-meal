import React,  { useState }from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import './styles.css';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
    <>
        <header className="navContainer">
            <nav>
                <Link to="/home">
                    <img  className="logo" src="./src/assets/HelpyngHandLogo.png"/>
                </Link>
                <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <span>spam</span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? 'open' : ''}>
                    <li>
                        <NavLink to="/home/about">Sobre nós</NavLink>
                    </li>
                    <li>
                        <NavLink to="/home/donations">Fazer uma doação</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </>
    )
}