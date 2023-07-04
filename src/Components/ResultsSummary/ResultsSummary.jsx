import React, { useEffect, useRef, useState } from "react";
import ArrowRightBlack from "../../assets/images/arrow_right_black.svg";
import ArrowLeft from "../../assets/images/arrow_left.svg";
import { ReactComponent as Spin } from "../../assets/images/icon_spin.svg";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import "dayjs/locale/en";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "./ResultsSummary.css";

export const Summary = () => {
    const [quantity, setQuantity] = useState();
    const [itemsAmount, setItemsAmount] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const responseFromHistograms = useSelector(state => state.responseFromHistograms);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        variableWidth: true,
        slidesToShow: itemsAmount === 1 ? 2 : (itemsAmount < 10 && itemsAmount % 2 === 0 ? 2 : 4),
        slidesToscroll: 1,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 3,
                    slidesToscroll: 3,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToscroll: 2,
                },
            },
        ],
    };

    const sliderRef = useRef(null);

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };

    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    useEffect(() => {
        if (responseFromHistograms && responseFromHistograms.data && responseFromHistograms.data[0] && Object.keys(responseFromHistograms.data[0].data).length !== 0) {
            let items = 0;
            let sum = 0;
            responseFromHistograms.data[0].data.map(item => {
                sum += item.value;
                items += 1
            });
            setQuantity(sum);
            setItemsAmount(items);
            setIsLoading(false);
        }
    }, [responseFromHistograms]);

    return (
        <div className="summaryWrapper">
            <h2 className="summaryTitle">общая сводка</h2>
            {responseFromHistograms && responseFromHistograms.data && responseFromHistograms.data.length > 0 ? (
                <p className="summarySubtitle">Найдено {quantity} вариантов</p>
            ) : null}

            {isLoading ? (
                <>
                    {responseFromHistograms && responseFromHistograms.data && responseFromHistograms.data.length > 0 ? <Spin /> : (
                        <p className="noResults">Данные не найдены, попробуйте использовать другие параметры поиска</p>
                    )}
                </>
            ) : (
                <>
                    {responseFromHistograms && responseFromHistograms.data && responseFromHistograms.data.length > 0 && (
                        <div className="summarySlider">
                            <div onClick={handlePrev}><img className="arrowSummarySlider sliderLeft" src={ArrowRightBlack} alt="click left" /></div>

                            <Slider ref={sliderRef} {...settings} className="summarySliderWrapper">
                                <div>
                                    <div className="summarySliderInfo">
                                        <p>Период</p>
                                        <p>Всего</p>
                                        <p>Риски</p>
                                    </div>
                                </div>
                                {responseFromHistograms.data[0].data.map((item, index) => {
                                    const convertDate = dayjs(item.date).format("DD.MM.YYYY");
                                    return (
                                        <div className="summarySliderDataWrapper" key={uuidv4()}>
                                            <div className="summarySliderCard">
                                                <p>{convertDate}</p>
                                                <p>{item.value}</p>
                                                <p>{responseFromHistograms.data[1].data[index].value}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Slider>

                            <div onClick={handleNext}><img className="arrowSummarySlider sliderRight" src={ArrowRightBlack} alt="click right" /></div>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}