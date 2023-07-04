import React from "react";
import { Link } from "react-router-dom";
import './LoginPart.css';

export const LoginPart = () => {
    return (
        <div>
            <div className="btn_wrapper">
                <button className="registerBtn">Зарегистрироваться</button>
                <Link to='/auth'>
                    <button className="loginBtn">Войти</button>
                </Link>
            </div>
        </div>
    )
}