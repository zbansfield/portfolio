import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div>
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/portfolio'}>Portfolio</NavLink>
            <NavLink to={'/aboutme'}>About Me</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
        </div>
    )
};

export default Header;