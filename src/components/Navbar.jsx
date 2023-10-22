import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

import locationLogo from "../images/location-logo.svg";
import phoneLogo from "../images/phone-logo.svg";
import logo from "../images/logo.png";
import searchLogo from "../images/search-logo.svg";
import facebookLogo from "../images/facebook-logo.svg";
import flagRussia from "../images/Flag_of_Russia.png";
import navMenu from "../images/navMenu.png";

export const Navbar = () => {
  const [activeNavLink, setActiveNavLink] = useState("linksList");
  const navMenuToggler = () => {
    activeNavLink === "linksList"
      ? setActiveNavLink("linksList linksListActive")
      : setActiveNavLink("linksList");
  };

  return (
    <nav className="navbar">
      <div className="navIcons">
        <ul className="navContactsList">
          <li className="navContactsItem">
            <img src={locationLogo} alt="location" className="locationImg" />
            <p>
              г.Ташкент, Чиланзар
              <br /> 10 квартал, дом 3/1
            </p>
          </li>
          <li className="navContactsItem">
            <img src={phoneLogo} alt="phone-number" className="phoneImg" />
            <div>
              <a href="tel">+998 71 276-62-53</a>
              <br />
              <a href="tel">+998 71 276-62-54</a>
            </div>
          </li>
        </ul>
        <a href="#text" className="navLogo">
          <img src={logo} alt="brand-logo" className="logoImg" />
        </a>
        <ul className="navSocialsList">
          <li className="navSocialsItem">
            <label>
              <a href="#search">
                <img src={searchLogo} alt="search-logo" className="searchImg" />
              </a>
              <input type="text" placeholder="Поиск по сайту"></input>
            </label>
          </li>
          <li className="navSocialsItem">
            <a
              href="https://www.facebook.com"
              target="blank"
              className="facebookLogo"
            >
              <img src={facebookLogo} alt="facebook-logo" />
              Мы на Facebook
            </a>
          </li>
        </ul>
        <label className="navLanguages">
          <img
            src={flagRussia}
            alt="russian-language"
            className="navLanguagesImg"
          />
          <select className="navLanguagesSelect">
            <option className="ru">Русский</option>
          </select>
        </label>
        <button onClick={navMenuToggler} className="navMenu">
          <img src={navMenu} alt="menu" className="navMenuImg" />
        </button>
      </div>
      <ul className={activeNavLink}>
        <li className="linksItem">
          <Link to="/store"> МАГАЗИН </Link>
        </li>
        <li className="linksItem">
          <Link to="/" className="activeNavLink">
            {" "}
            О КОМПАНИИ{" "}
          </Link>
        </li>
        <li className="linksItem">
          <Link to="/products"> ПРОДУКЦИЯ </Link>
        </li>
        <li className="linksItem">
          <Link to="/services"> УСЛУГИ </Link>
        </li>
        <li className="linksItem">
          <Link to="/promotions-and-news"> АКЦИИ И НОВОСТИ </Link>
        </li>
        <li className="linksItem">
          <Link to="/contact"> ОБРАТНАЯ СВЯЗЬ </Link>
        </li>
      </ul>
    </nav>
  );
};
