import React from "react";
import './Prices.css';
import { v4 as uuidv4 } from "uuid";
import { ReactComponent as IdeaIcon } from '../../assets/images/lamp_icon.svg';
import { ReactComponent as ProIcon } from '../../assets/images/aim_icon.svg';
import { ReactComponent as LaptopIcon } from '../../assets/images/laptop_icon.svg';

export const Card = (props) => {
    const header = props.header;
    const description = props.description;
    const newPrice = props.newPrice;
    const oldPrice = props.oldPrice;
    const cardId = props.cardId;
    const selected = props.selected;
    const options = props.options;
    const priceInfo = props.priceInfo;

    const orangeCard = "beginnerTop  topPart";
    const blueCard = "proTop  topPart";
    const blackCard = "businessTop  topPart";

    const blackSubtitle = "priceSubtitle";
    const whiteSubtitle = "priceSubtitle businessSubtitle";

    const blackDescription = "subtitleDescription";
    const whiteDescription = "subtitleDescription businessDescription"

    return (
        <div className={selected ? "priceCardSelected priceCard" : "priceCard"}>
            <div className={cardId === 1 ? orangeCard : (cardId === 2 ? blueCard : blackCard)}>
                <div>
                    <h3 className={cardId === 1 ? blackSubtitle : (cardId === 2 ? blackSubtitle : whiteSubtitle)}>{header}</h3>
                    <p className={cardId === 1 ? blackDescription : (cardId === 2 ? blackDescription : whiteDescription)}>{description}</p>
                </div>
                <div className="iconWrapper">
                    {cardId === 1 ? <IdeaIcon /> : (cardId === 3 ? <LaptopIcon /> : <ProIcon />)}
                </div>
            </div>

            <div className="bottomPart">
                <div className="pricePart">
                    {selected ? <p className="currentPrice">Текущий тариф</p> : null}
                    <p className="newPrice">{newPrice}</p>
                    <p className="oldPrice">{oldPrice}</p>
                </div>
                <div className="priceInfo">
                    {!priceInfo ? <p className="priceDescriptionEmpty"></p> : <p className="priceDescription">{priceInfo}</p>}
                </div>
                
                <div className="listPart">
                    <h4 className="listTitle">В тариф входит</h4>
                    <ul className="priceList">
                        {options.map(list => <li className="listItem" key={uuidv4()}>{list}</li>)}
                    </ul>
                </div>
            </div>
            
            {selected ? 
                <button className="btnSelectedCard">Перейти в личный кабинет</button> :
                <button className="detailsBtn">Подробнее</button>
            }
        </div>
    )
}