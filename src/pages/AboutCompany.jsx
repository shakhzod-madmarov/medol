import { ProductsList } from "../components/ProductsList";

import "../styles/AboutCompany.css";

import Arrow from "../images/up-arrow-(1).svg";
import Logo from "../images/logo.png";
import Ellipse1 from "../images/Ellipse4.svg";
import Ellipse2 from "../images/Ellipse5.svg";
import Ellipse3 from "../images/Ellipse6.svg";
import { PromotionsNewsSlider } from "../helpers/PromotionsNewsSlider";
import { PartnersSlider } from "../helpers/PartnersSlider";
import { HeaderSlider } from "../helpers/HeaderSlider";
import ServicesSlider from "../helpers/ServicesSlider";

export const AboutCompany = () => {
  return (
    <main>
      <HeaderSlider />
      <section className="productsSection">
        <h2 className="title">ПРОДУКЦИЯ</h2>
        <ProductsList />
        <a href="#" className="catalogLink">
          Перейти в каталог нашей продукции <img src={Arrow} alt="arrow-next" />
        </a>
      </section>
      <section className="servicesSection">
        <h2 className="title">УСЛУГИ</h2>
        <ServicesSlider/>
      </section>
      <section className="aboutSection">
        <h2 className="title">О КОМПАНИИ</h2>
        <div className="aboutContent">
          <div className="ellipses">
            <img src={Ellipse1} className="ellipse1" alt="ellipse-1" />
            <img src={Ellipse2} className="ellipse2" alt="ellipse-2" />
            <img src={Ellipse3} className="ellipse3" alt="ellipse-3" />
            <img src={Logo} className="logoInEllipse" alt="brand Logo"/>
          </div>
          <div className="aboutDetail">
            <p>
              Группа компаний MEDOL создавалась высококвалифицированными
              специалистами в сфере медицины, инженерии и экономики, за плечами
              которых значительный опыт на рынке высоких медицинских технологий,
              которая имеет свои представительства в разных уголках Земли. В
              2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical
              Online Services". Цель компании построить прозрачный долгосрочный
              бизнес, принести пользу обществу путем развития и внедрения
              передовых технологий в систему здравоохранения Республики
              Узбекистан.{" "}
            </p>
            <a href="#" className="learnMore">
              Узнать больше
            </a>
          </div>
        </div>
      </section>
      <PromotionsNewsSlider />
      <section className="partnersSection">
        <h2 className="title">ПАРТНЕРЫ</h2>
        <PartnersSlider />
      </section>
    </main>
  );
};
