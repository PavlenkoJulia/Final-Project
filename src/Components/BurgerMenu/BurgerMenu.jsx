import React, { useState } from "react";
import { Link } from "react-router-dom";
import WhiteLogo from "../../assets/images/logo_white.svg";
import Close from "../../assets/images/closed_icon.svg";
import "./BurgerMenu.css";

export const HamburgerMenu = () => {
    const [isOpened, setIsOpened] = useState(false);

    const handleOpen = () => {
        setIsOpened(!isOpened);
    }

    const navigation = (
        <nav className="burgerNavigation">
            <Link to='/' className="burgerLink">Главная</Link>
            <Link className="burgerLink">Тарифы</Link>
            <Link className="burgerLink">FAQ</Link>
        </nav>
    )

    const burgerBtns = (
        <div className="burgerBtnsWrapper">
            <button className="burgerRegisterBtn">Зарегистрироваться</button>
            <Link to='/auth'>
                <button className="burgerLoginBtn">Войти</button>
            </Link>
        </div>
    )

    const burgerHeader = (
        <div className="burgerHeader">
            <img src={WhiteLogo} alt="" />
            <button onClick={handleOpen} className="burgerIcon">
                <img src={Close} alt="" />
            </button>
        </div>
    )

    return (
        <div>
            <button onClick={handleOpen} className="burgerIcon">
                <span className="iconLine"></span>
                <span className="iconLine"></span>
                <span className="iconLine"></span>
            </button>
            {isOpened && (
            <div className="menuWrapper" >
                {burgerHeader}
                {navigation}
                {burgerBtns}
            </div>
            )}
        </div>
    )
}