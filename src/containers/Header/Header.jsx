import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import i18next from '../../i18n';
import { useTranslation } from 'react-i18next';
import Logo from "../../assets/images/Logo.png";
import LogoName from "../../assets/images/Logo-name.png";
import ENG from "../../assets/icons/en.png";
import UZ from "../../assets/icons/uz.png";

import "./Header.scss";

const Header = () => {

    const [ active, setActive ] = useState(false);

	const { t } = useTranslation();
	function changeLang(lang) {
		i18next.changeLanguage(lang)
	}

    console.log(setActive)

    return (
        <div className="Header">
            <div className="Header-inner container">
                <Link className="Logo" to="/">
                    <img src={Logo} alt="Logo" />
                    <img src={LogoName} alt="Logo-name" />
                </Link>

                <ul>
                    <li><NavLink className={`${active ? "active" : undefined}`} to="/">{t("header.home")}</NavLink></li>
                    <li><NavLink className={`${active ? "active" : undefined}`} to="/about">{t("header.about")}</NavLink></li>
                    <li><NavLink className={`${active ? "active" : undefined}`} to="/services">{t("header.services")}</NavLink></li>
                    {/* <li><NavLink className={`${active ? "active" : undefined}`} to="/portfolio">{t("header.portfolio")}</NavLink></li> */}
                    <li><NavLink className={`${active ? "active" : undefined}`} to="/blog">{t("header.blog")}</NavLink></li>
                    <li><NavLink className={`${active ? "active" : undefined}`} to="/contact">{t("header.contact")}</NavLink></li>
                    
                </ul>

                <div className="Header-right">
                    <div className="Header-langs">
                        <button onClick={e =>  changeLang("uz")}>
                            <img src={UZ} alt="uz" />
                        </button>
                        <button onClick={e =>  changeLang("en")}>
                            <img src={ENG} alt="en" />
                        </button>
                    </div>

                    <Link to="/signup" className="signup">{t("header.signup")}</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;
