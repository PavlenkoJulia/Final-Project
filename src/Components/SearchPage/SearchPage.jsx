import React from "react";
import "./SearchPage.css";
import { SearchForm } from "../SearchForm/SearchForm";
import fileImg from "../../assets/images/document_icon.svg";
import foldersImg from "../../assets/images/Folders_icon.svg";
import backgroundSearchImg from "../../assets/images/search_page_picture.jpg";

export const Search = () => {
    const titlePart = (
        <div className="titleWrapper">
            <h1 className="searchTitle">найдите необходимые данные в пару кликов.</h1>
            <p className="searchDescription">Задайте параметры поиска. <br></br> Чем больше заполните, тем точнее поиск</p>
        </div>
    )

    const imgPart = (
        <div className="searchImgWrapper">
            <div className="topImgs">
                <img src={ fileImg } alt="a document" />
                <img src={ foldersImg } alt="some folders" />
            </div>
            <img className="backgroundSearchImg" src={ backgroundSearchImg } alt="a man is searching" />
        </div>
    )

    return (
        <main className="searchPageWrapper">
            <div className="leftPartWrapper">
                {titlePart}
                <SearchForm />
            </div>
            {imgPart}
        </main>
    )
}