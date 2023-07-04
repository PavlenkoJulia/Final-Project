import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './Home.css';
import { WhyWe } from "../WhyWe/WhyWe";
import { Prices } from '../Prices/Prices';

export const Home = () => {
    const backgroundImg: string = new URL('../../assets/images/main_page_picture.jpg', import.meta.url).href
    const token = useSelector(state => state.token)

    const mainPart = (
        <main className="mainWrapper">
            <div className="textPart">
                <h1 className="mainTitle">сервис по поиску публикаций о компании по его инн</h1>
                <p className="subtitle">Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
                {token && <Link className="requestData" to="/search">Запросить данные</Link>}
            </div>

            <div className="imgPart">
                <img src={backgroundImg} alt="" />
            </div>
        </main>
    )

    return (
        <div>
            <main className="homeWrapper">
                {mainPart}
                <WhyWe />
                <Prices />
            </main>
        </div>
    )
}