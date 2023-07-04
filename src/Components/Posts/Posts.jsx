import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import {ReactComponent as Spin} from "../../assets/images/icon_spin.svg";
import { Parser, ImageParser } from "../../parser";
import "./Posts.css";

export const Posts = () => {
    const token = useSelector(state => state.token);
    const idsFromObjectsearch = useSelector(state => state.idsFromObjectsearch);
    const responseFromHistograms = useSelector(state => state.responseFromHistograms);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingPosts, setLoadingPosts] = useState(true);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(10);
    const isIdsFromObjectsearch = idsFromObjectsearch && !!Object.keys(idsFromObjectsearch).length;

    useEffect(() => {
        if (token && isIdsFromObjectsearch) {
            const chunkedIds = idsFromObjectsearch.items
                .slice(startIndex, endIndex)
                .map(item => item.encodedId);
            axios.post('https://gateway.scan-interfax.ru/api/v1/documents', {
                ids: chunkedIds,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            })
            .then((response) => {
                setPosts((posts) => [...posts, ...response.data]);
                setLoading(false);
                setLoadingPosts(false);
            })
            .catch((error) => {
                console.error(error);
            });
        }
    }, [token, isIdsFromObjectsearch, responseFromHistograms, startIndex, endIndex]);

    const handleShowMore = () => {
        setStartIndex(startIndex)
        setEndIndex(endIndex + 10)
        setLoading(true)
    };

    return (
        <div className="postsWrapper">
            <h2 className="postsTitle">Список документов</h2>
            {posts && posts.length > 0 && idsFromObjectsearch && responseFromHistograms && responseFromHistograms.data && responseFromHistograms.data.length > 0 ? (
                <>
                    <div className="postsCardsWrapper">
                        {posts.map(item => (
                            <div key={uuidv4()} className="postsCard">
                                <p className="cardDate">{moment(item.ok.issueDate).format("DD.MM.YYYY")} {item.ok.url ? (<a target="_blank" href={item.ok.url}>{item.ok.source.name}</a>) : (<span>{item.ok.source.name}</span>)}</p>
                                <h3 className="cardTitle">{item.ok.title.text}</h3>
                                <p className="cardLabel">
                                {
                                    (item.ok.attributes['isTechNews'] && 'Технические новости') ||
                                    (item.ok.attributes['isAnnouncement'] && 'Аннонсы') ||
                                    (item.ok.attributes['isDigest'] && 'Дайджесты') || 'Новости'
                                }
                                </p>
                              
                                <div className="cardMainImg"></div>
                                <div className="cardMainText"><Parser xml={item.ok.content.markup}/></div>
                                <div className="cardBottomWrapper">
                                    {item.ok.url ? (<a className="cardBtn" target="_blank" href={item.ok.url}>Читать в источнике</a>) : null}
                                    <span className="cardWordsCount">{item.ok.attributes.wordCount && item.ok.attributes.wordCount} слова</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    {posts.length > 0 && idsFromObjectsearch && idsFromObjectsearch.items.length > 0 && posts[posts.length - 1].ok.id === idsFromObjectsearch.items[idsFromObjectsearch.items.length - 1].encodedId ? null :
                    <div className="showMoreWrapper">
                        <button className="showMoreBtn" onClick={handleShowMore}>Показать больше</button>
                    </div>
                    }
                    
                </>
            ) : (
                <>{idsFromObjectsearch && idsFromObjectsearch.items.length > 0 ? <img src={Spin} alt="" /> : <p className="noResults">Нет результатов</p>}</>
            )}
        </div>
    );
}