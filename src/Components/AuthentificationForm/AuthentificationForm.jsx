import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addExpireDate, addToken } from "../store/StoreActions";
import Lock from "../../assets/images/lock_icon.svg";
import axios from "axios";
import "./AuthentificationForm.css";

export const AuthentificationForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState('');
    const [inputsValue, setInputsValue] = useState({
        login: '',
        password: ''
    })

    const GoogleBtn: string = require('../../assets/images/google_icon.svg').default
    const FacebookBtn: string = require('../../assets/images/facebook_icon.svg').default
    const YandexBtn: string = require('../../assets/images/yandex_icon.svg').default

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post('https://gateway.scan-interfax.ru/api/v1/account/login', inputsValue, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((response) => {
            localStorage.setItem('token', response.data.accessToken)
            localStorage.setItem('expire', response.data.expire)
            response.data.accessToken && navigate('/')
            dispatch(addToken(response.data.accessToken))
            dispatch(addExpireDate(response.data.expire))
        })
        .catch((error) => {
            console.error(error);

            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError('Введите корректные данные')
            }
        });
    }

    const handleChange = (e) => {
        setInputsValue({...inputsValue, [e.target.name]: e.target.value})
    }

    const signingBtns = (
        <div className="authBtns">
            <button className="loginAuthBtn">Войти</button>
            <button className="registerAuthBtn">Зарегистрироваться</button>
        </div>
    )

    const loginInput = (
        <>
            <label htmlFor="username" className="inputLabel">Логин или номер телефона:</label>
            <input type="text" className="input" id="username" name="login" required onChange={handleChange} />
        </>
    )

    const passwordInput = (
        <>
            <label htmlFor="password" className="inputLabel">Пароль:</label>
            <input type="password" className="input" id="password" name="password" required onChange={handleChange}/>
            {setError === true ? <span className="error">{error}</span> : <span></span>}
        </>
    )

    const signInWays = (
        <>
            <div className="signInWays">
                <button className="otherSignInBtn"><img src={GoogleBtn} alt="google" /></button>
                <button className="otherSignInBtn"><img src={FacebookBtn} alt="facebook" /></button>
                <button className="otherSignInBtn"><img src={YandexBtn} alt="yandex" /></button>
            </div>
        </>
    )

    return (
        <div className="authFormWrapper">
            <div className="authImgWrapper">
                <img src={Lock} alt="lock" />
            </div>

            <form className="authForm" onSubmit={handleSubmit}>
                {signingBtns}
                {loginInput}
                {passwordInput}
                <button type="submit" disabled={inputsValue.login === '' || inputsValue.password === ''} className="submitBtn">
                    Войти
                </button>
                <a className="forgotPassword">Восстановить пароль</a>
                <p className="signInWith">Войти через:</p>
                {signInWays}
            </form>
        </div>

    )
}