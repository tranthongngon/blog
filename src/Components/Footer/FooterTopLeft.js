import React from 'react';
import { Link } from "react-router-dom";
import LogoFooter from "../image/logo-footer.png"

function FooterTopLeft() {
    return (
        <div className="site-footer-left">
            <div className="site-logo">
                <Link to="/">
                    <img src={LogoFooter} alt="logo-footer" />
                </Link>
            </div>
            <div className="text-footer">
                <p>
                    The study aimed to estimate the scale of
                    past infections in a population
                </p>
                <p>
                    viric@gmail.com
                </p>
                <p>
                    Viric © 2021. Made by Jack Ngon
                </p>
            </div>
        </div>
    )
}

export default FooterTopLeft
