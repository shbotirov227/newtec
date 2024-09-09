import React from "react";
import { useTranslation } from "react-i18next";

import Header from "../../containers/Header/Header";
import History from "../../components/History/History";
import Footer from "../../containers/Foooter/Footer";

import PageName from "../../components/PageName/PageName";

import "./Portfolio.scss";

const Portfolio = () => {
	const { t } = useTranslation();

	return (
		<div className="Portfolio">
			<Header />
			<PageName name={t("header.portfolio")} route="/portfolio" />
			<h1>Portfolio</h1>
			<History />
			<Footer />
		</div>
	);
};

export default Portfolio;
