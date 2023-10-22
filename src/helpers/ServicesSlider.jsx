import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ServicesRendering } from "./ServicesRendering";
import { ServicesItem } from "../components/ServicesItem";

import "../styles/ServicesSlider.css";

const ServicesSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
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

  const services = ServicesRendering.map((service) => {
    return (
      <ul key={service.id} className="servicesSliderList">
        <ServicesItem
          id={service.id}
          serviceImage={service.serviceImage}
          serviceName={service.serviceName}
          serviceDetail={service.serviceDetail}
          serviceLink={service.serviceLink}
        />
      </ul>
    );
  });

  return (
    <Slider className="slider" {...settings}>
      {services}
    </Slider>
  );
};

export default ServicesSlider;
