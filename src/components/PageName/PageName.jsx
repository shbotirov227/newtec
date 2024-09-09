import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./PageName.scss";

const PageName = ({ name, route }) => {

    const { t } = useTranslation();

    return (
        <div className="PageName">
            <h3>{name}</h3>
            <h4>
                <Link to="/">{t("header.home")}</Link>
                <span>/</span>
                {name}
            </h4>
        </div>
    )
}

export default PageName;
