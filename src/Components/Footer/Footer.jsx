import React from "react";
import './Footer.css';

export const Footer = () => {
    const whiteLogo: string = require('../../assets/images/logo_white.svg').default
    return (
        <div>
            <div className="footerWrapper">
                <div>
                    <img src={whiteLogo} alt="logo" />
                </div>

                <div className="contacts">
                    <p className="contactInfo">г. Москва, Цветной б-р, 40</p>
                    <p className="contactInfo">+7 495 771 21 11</p>
                    <p className="contactInfo">info@skan.ru</p>

                    <p className="copyrights">Copyright, 2022</p>
                </div>
            </div>
        </div>
    )
}