import { useState } from "react";
import { NavLink } from "react-router-dom";
import nav_logo from "./nav_logo.png";

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo">
                    <a href="#home">
                        <img src={nav_logo} alt="Logo" className="nav_logo_img" />
                    </a>
                </div>
                <div class="navbar-title">
                    <NavLink className="title" to="/">
                        BOOK OF ALLY
                    </NavLink>
                </div>
                <div className="dropdown">
                    <span className="menu-link" onClick={toggleMenu}>
                        MENU
                    </span>
                    {menuOpen && (
                        <div className="dropdown-content">
                            <NavLink
                                className="nav-link"
                                aria-current="page"
                                to="/"
                            >
                                HOME
                            </NavLink>
                            <NavLink className="nav-link" to="/blog/archive">
                                BLOG
                            </NavLink>
                            <NavLink className="nav-link" to="/unsubscribe">
                                UNSUBSCRIBE
                            </NavLink>
                            <NavLink className="nav-link" to="/about">
                                ABOUT
                            </NavLink>
                        </div>
                    )}
                </div>

            </nav>
        </>
    );
}

export default Nav;
