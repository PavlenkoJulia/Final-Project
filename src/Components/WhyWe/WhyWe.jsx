import React, {useRef} from "react";
import ArrowLeft from "../../assets/images/arrow_left.svg";
import ArrowRight from "../../assets/images/arrow_right.svg";
import Clock from "../../assets/images/clock_icon.svg";
import Search from "../../assets/images/search_icon.svg";
import Shield from "../../assets/images/shield_icon.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import './WhyWe.css';

export const WhyWe = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        variableWidth: true,
        slidesToShow: 2,
        slidesToscroll: 1,
        responsive: [
            {
                breakpoint: 1370,
                settings: {
                    slidesToShow: 2,
                    slidesToscroll: 1,
                },
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
                    slidesToscroll: 1,
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
    
    return (
        <div>
            <div className="whyWrapper">
                <h2 className="whyTitle">Почему именно мы</h2>

                <div className="sliderWrapper">
                    <img className="arrowLeft" src={ArrowLeft} onClick={handlePrev} alt="arrow left" />
                    <Slider ref={sliderRef} {...settings} className="whySlider">
                            <div className="cardWrapper">
                                <img className="cardIcon" src={Clock} alt="" />
                                <p className="cardText">Высокая и оперативная скорость обработки заявки</p>
                            </div>
                            <div className="cardWrapper">
                                <img className="cardIcon" src={Search} alt="" />
                                <p className="cardText">Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</p>
                            </div>
                            <div className="cardWrapper">
                                <img className="cardIcon" src={Shield} alt="" />
                                <p className="cardText">Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</p>
                            </div>
                    </Slider>
                    <img className="arrowRight" src={ArrowRight} onClick={handleNext} alt="arrow right" />
                </div>

                <div className="backgroundImgWrapper">
                    
                </div>
            </div>
        </div>
    )
}