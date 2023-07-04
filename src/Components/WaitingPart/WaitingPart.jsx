import React from "react";
import waitingImg from "../../assets/images/waiting_page_picture.jpg";
import "./WaitingPart.css";

export const Waiting = () => {
    return (
        <div className="waitingWrapper">
            <div className="waitingTitleWrapper">
                <h1 className="waitingTitle">ищем. скоро будут результаты</h1>
                <p className="waitingSubtitle">Поиск может занять некоторое время, <br /> просим сохранять терпение.</p>
            </div>

            <div className="waitingImgWrapper">
                <img src={waitingImg} alt="a woman is looking for something" />
            </div>
        </div>
    )
}