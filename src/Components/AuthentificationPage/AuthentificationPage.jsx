import React from "react";
import backgroundAuthImg from "../../assets/images/Characters.jpg";
import { AuthentificationForm } from "../AuthentificationForm/AuthentificationForm";
import "./AuthentificationPage.css";

export const Authentification = () => {

    return (
        <main>
            <div>
                <div className="authPageWrapper">
                    <div className="authLeft">
                        <h1 className="authTitle">для оформления подписки на тариф, необходимо авторизоваться.</h1>
                        <img className="backgroundImg" src={backgroundAuthImg} alt="people with key" />
                    </div>

                    <AuthentificationForm />
                </div>

            </div>
        </main>
    )
}