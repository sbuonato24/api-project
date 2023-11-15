import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements"

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to = "/index" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to = "/breaking" activeStyle>
                        Breaking Bad
                    </NavLink>
                    <NavLink to = "/parks" activeStyle>
                        Parks and Rec
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;