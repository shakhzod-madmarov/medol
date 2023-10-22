import "../styles/Footer.css";

import locationLogo from "../images/location-logo.svg";
import phoneLogo from "../images/phone-logo.svg";
import logo from "../images/logo.png";
import email from "../images/email.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="footerTop">
        <div className="leftSide">
          <div className="contactsFooter">
            <h4>Контакты</h4>
            <ul className="footerContactsList">
              <li className="footerContactsItem">
                <img src={locationLogo} alt="location" />
                <div>
                  г.Ташкент, Чиланзар
                  <br /> 10 квартал, дом 3/1
                </div>
              </li>
              <li className="footerContactsItem phoneNumberFooter">
                <img src={phoneLogo} alt="phone-number" />
                <div>
                  <a href="tel">+998 71 276-62-53</a>
                  <br />
                  <a href="tel">+998 71 276-62-54</a>
                </div>
              </li>
              <li className="footerContactsItem">
                <img src={email} alt="email" />
                <a href="mailto:abc@example.com">info@medol.uz</a>
              </li>
              <li className="footerContactsItem">
                <a href="#" className="submitApplicationLink">
                  Оставить заявку
                </a>
              </li>
            </ul>
          </div>
          <div className="mission">
            <img src={logo} alt="logo" />
            <p>
              Наша цель – построить прозрачный, долгосрочный бизнес, приносить
              огромную пользу населению, путем решения глобальных вопросов.
              Внедряя инновационные технологии на рынок Узбекистана.
            </p>
          </div>
        </div>
        <div className="rightSide">
          <div className="aboutCompanyFooter">
            <h4>О компании</h4>
            <ul>
              <li>
                <a href="#">История</a>
              </li>
              <li>
                <a href="#">Партнеры</a>
              </li>
              <li>
                <a href="#">Вакансии</a>
              </li>
            </ul>
          </div>
          <div className="productionFooter">
            <h4>Продукция</h4>
            <ul>
              <li>
                <a href="#"> Эндоваскулярная хирургия</a>
              </li>
              <li>
                <a href="#"> Аритмология</a>
              </li>
              <li>
                <a href="#"> Кардиохирургия</a>
              </li>
              <li>
                <a href="#"> Лабораторная диагностика</a>
              </li>
              <li>
                <a href="#"> Хирургия</a>
              </li>
              <li>
                <a href="#"> Эндоурология</a>
              </li>
              <li>
                <a href="#"> Нейрохирургия</a>
              </li>
              <li>
                <a href="#"> Анестезиология и реанимация</a>
              </li>
              <li>
                <a href="#"> Диабет</a>
              </li>
            </ul>
          </div>
          <div className="servicesFooter">
            <h4>Услуги</h4>
            <ul>
              <li>
                <a href="#">Сервис</a>
              </li>
              <li>
                <a href="#">Регистрации</a>
              </li>
              <li>
                <a href="#">Услуги логистики</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <p className="madeDate">© 2021 ООО «Medical Online Services»</p>
        <p className="madeBy">
          Сайт разработан компанией <a href="www.uz">www<span>.uz</span></a>
        </p>
      </div>
    </footer>
  );
};
