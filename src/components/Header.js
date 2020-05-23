import React from 'react';
import logo from "../img/logo.svg";
function Header() {
    return(
        <div className="logo">
                <img src={logo} alt="logo"/>
                <h1>DuoQ</h1>
        </div>

        
    )
}
export default Header