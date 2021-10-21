import React from 'react'
import FooterTopLeft from './FooterTopLeft';
import FooterTopRight from './FooterTopRight';
import "./footer.css";

function Footer() {
    return (
        <div className="site-footer">
            <div className="site-footer__inner">
                <div className="site-footer__section site-footer-top flex-box">
                    <FooterTopLeft/>
                    <FooterTopRight/>
                </div>
            </div>
        </div>
    )
}

export default Footer
