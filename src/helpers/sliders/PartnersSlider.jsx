import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { PartnersRendering } from "../renders/PartnersRendering";

import PrevArrowImg from "../../images/Group 15.png";
import NextArrowImg from "../../images/Group 14.png";

import "../../styles/sliders/PartnersSlider.css";

export const PartnersSlider = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <img
        className="nextPartnerSlide"
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
        className="prevPartnerSlide"
        src={PrevArrowImg}
        onClick={onClick}
        alt="previous"
      />
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    prevArrow: <SampleNextArrow />,
    nextArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const partners = PartnersRendering.map((partner) => {
    return (
      <div key={partner.id} className="partner">
        <img className="partnerImg" src={partner.image} alt="partner" />
      </div>
    );
  });

  return (
    <div className="partnersSlider">
      <Slider {...settings}>{partners}</Slider>
    </div>
  );
};
