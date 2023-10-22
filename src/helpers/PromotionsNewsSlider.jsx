import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { PromotionsNewsRendering } from "./PromotionsNewsRendering";
import { PromotionsNewsItem } from "../components/PromotionsNewsItem";

import Arrow from "../images/up-arrow-(1).svg";
import PrevArrowImg from "../images/Group 15.png";
import NextArrowImg from "../images/Group 14.png";

import "../styles/PromotionsNewsSlider.css";

export const PromotionsNewsSlider = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <img
        className="nextSlide"
        src={NextArrowImg}
        alt="next"
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <img
        className="prevSlide"
        src={PrevArrowImg}
        onClick={onClick}
        alt="previous"
      />
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const promoNews = PromotionsNewsRendering.map((news) => {
    return (
      <ul className="newsSliderList" key={news.id}>
        <PromotionsNewsItem
          key={news.id}
          id={news.id}
          newsImage={news.newsImage}
          newsName={news.newsName}
          newsDate={news.newsDate}
          newsDetail={news.newsDetail}
          newsLink={news.newsLink}
        />
      </ul>
    );
  });

  return (
    <section className="newsSection">
      <h2 className="title">НОВОСТИ</h2>
      <div className="newsContent">
        <Slider {...settings}>{promoNews}</Slider>
      </div>
      <div className="moreNews">
        <a href="#" className="moreNewsLink">
          Посмотреть все новости
          <img src={Arrow} alt="arrow-next" />
        </a>
        <a href="#" className="subscribeLink">
          Подписаться на новости
          <img src={Arrow} alt="arrow-next" />
        </a>
      </div>
    </section>
  );
};
