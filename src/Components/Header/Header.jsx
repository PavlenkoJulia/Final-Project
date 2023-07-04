import React from "react";
import { UserInfo } from "../UserInfo/UserInfo";
import { UserMenu } from "../UserMenu/UserMenu";
import { LoginPart } from "../LoginPart/LoginPart";
import { HamburgerMenu } from "../BurgerMenu/BurgerMenu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import './Header.css';

export const Header = () => {
    const token = useSelector(state => state.token);

    const navigation = (
        <nav className="navigation">
            <Link to='/' className="navigationLink">Главная</Link>
            <Link className="navigationLink">Тарифы</Link>
            <Link className="navigationLink">FAQ</Link>
        </nav>
    )

    return (
        <header className="header">
            <Link to='/'>
                <Logo />
            </Link>
            {navigation}
            
            {token && <UserInfo />}
            {token ? <UserMenu /> : <LoginPart />}
            <HamburgerMenu />
        </header>
    )
}