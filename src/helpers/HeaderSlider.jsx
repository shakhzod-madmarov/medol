import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Navbar } from "../components/Navbar";

import Slide1 from "../images/headerSlide1.png";
import Slide2 from "../images/headerSlide2.png";
import Slide3 from "../images/headerSlide3.png";
import Slide4 from "../images/headerSlide4.png";

import "../styles/headerSlider.css";

export const HeaderSlider = () => {
  const settings = {
    dots: true,
    fade: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <header>
        <Navbar />
        <div className="headerContent">
          <div className="headerDetails">
            <h1 className="headerTitle">
              Анализатор <br />
              ABL800 FLEX
            </h1>
            <p>
              Ориентированный на среднюю или высокую производительность тестов,
              анализатор ABL800 FLEX измеряет полный набор параметров, включая
              pH, газы крови, электролиты, метаболиты и показатели оксиметрии
            </p>
            <a href="https://" className="readMore">
              Подробнее
            </a>
          </div>
          <figure className="headerFigure">
            <img src={Slide1} alt="Анализатор ABL800 FLEX" />
          </figure>
        </div>
      </header>
      <header>
        <Navbar />
        <div className="headerContent">
          <div className="headerDetails">
            <h1 className="headerTitle">
              Аппарат ИК-лазерный <br />
              МАКДЭЛ-09.1
            </h1>
            <p>
              Ориентированный на среднюю или высокую производительность тестов,
              анализатор ABL800 FLEX измеряет полный набор параметров, включая
              pH, газы крови, электролиты, метаболиты и показатели оксиметрии
            </p>
            <a href="https://" className="readMore">
              Подробнее
            </a>
          </div>
          <figure className="headerFigure">
            <img src={Slide2} alt="Аппарат ИК-лазерный МАКДЭЛ-09.1" />
          </figure>
        </div>
      </header>
      <header>
        <Navbar />
        <div className="headerContent">
          <div className="headerDetails">
            <h1 className="headerTitle">
              Глюкометр для <br />
              измерения глюкозы
            </h1>
            <p>
              Ориентированный на среднюю или высокую производительность тестов,
              анализатор ABL800 FLEX измеряет полный набор параметров, включая
              pH, газы крови, электролиты, метаболиты и показатели оксиметрии
            </p>
            <a href="https://" className="readMore">
              Подробнее
            </a>
          </div>
          <figure className="headerFigure">
            <img src={Slide3} alt="Глюкометр для измерения глюкозы" />
          </figure>
        </div>
      </header>
      <header>
        <Navbar />
        <div className="headerContent">
          <div className="headerDetails">
            <h1 className="headerTitle">
              Система для <br />
              аутогемотрансфузии
            </h1>
            <p>
              Ориентированный на среднюю или высокую производительность тестов,
              анализатор ABL800 FLEX измеряет полный набор параметров, включая
              pH, газы крови, электролиты, метаболиты и показатели оксиметрии
            </p>
            <a href="https://" className="readMore">
              Подробнее
            </a>
          </div>
          <figure className="headerFigure">
            <img src={Slide4} alt="Система для аутогемотрансфузии" />
          </figure>
        </div>
      </header>
    </Slider>
  );
};
