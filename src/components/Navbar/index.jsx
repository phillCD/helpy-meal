import React,  { useState }from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import './styles.css';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
    <>
        <header className="navContainer">
            <nav>
                <div>
                    <div className="navBarText">Olá, Usuário! Bem vindo a <Link className="linkToLogin" to="/"><span className="siteTitle">Helpyng Hand</span></Link></div>
                </div>
                <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <span>spam</span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? 'open' : ''}>
                    <li>
                        <NavLink to="/about">Sobre nós</NavLink>
                    </li>
                    <li>
                        <NavLink to="/donations">Fazer uma doação</NavLink>
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