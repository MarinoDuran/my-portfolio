import React from "react"
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>My website is currently undergoing an overhaul,</h1>
                <h2>Please be patient-- I promise you'll love it!</h2>
                <Typed
                    className="typed-text"
                    strings={["The Only Constant", "In Life", "Is Change."]}
                    typeSpeed={35}
                    backSpeed={45}
                    loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>

    )
}

export default Header
