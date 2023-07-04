import React from "react";
import './Prices.css';
import { Cards } from "./Cards";

export const Prices = () => {

    return (
        <section className="pricesWrapper">
            <h2 className="pricesTitle">наши тарифы</h2>
            <Cards />
        </section>
    )
}