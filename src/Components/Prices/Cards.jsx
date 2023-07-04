import React from 'react';
import { Card } from './Card';
import { CardsData } from '../store/utils';
import './Prices.css';
import { v4 as uuidv4 } from "uuid";

export const Cards = () => {
    const cards = CardsData;

    return (
        <div className='pricesCardsWrapper'>
            {cards.map(card => 
                <Card key={uuidv4()} 
                    header={card.header}
                    description={card.description}
                    newPrice={card.newPrice}
                    oldPrice={card.oldPrice}
                    cardId={card.id}
                    options={card.options}
                    selected={card.selected}
                    priceInfo={card.priceInfo}
                />   
            )}
        </div>
    )
}