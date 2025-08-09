import React from "react";
import ThemeToggle from "./ThemeToggle";

function Header() {
    return (
        <header className="header" id="header">
            <nav className="nav">
                <a href="/#root">Strona główna</a>
                <a href="/#about">O mnie</a>
                <a href="/#projects">Projekty</a>
                <a href="/#contact">Kontakt</a>
            </nav>
            <ThemeToggle />
        </header>
    );
}

export default Header;
