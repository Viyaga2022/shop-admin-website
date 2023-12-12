import "./navbar.scss";

import ToggleMenuBtn from "./toggleMenuBtn/ToggleMenuBtn";


const Navbar = () => {

    return (
        <div className="navbar">
            <div className="logo">
                <img src="/logo.svg" alt="" />
                <span>lamadmin</span>
            </div>
            <div className="icons">
                <ToggleMenuBtn />
            </div>
        </div>
    );
};

export default Navbar;
