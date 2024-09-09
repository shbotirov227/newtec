import React from "react";
import { useTranslation } from "react-i18next";

import Header from "../../containers/Header/Header";
import FormSection from "../../containers/FormSection/FormSection";
import Footer from "../../containers/Foooter/Footer";

import PageName from "../../components/PageName/PageName";
import History from "../../components/History/History";

import "./Contact.scss";

const Contact = () => {
	const { t } = useTranslation();

	return (
		<div className="Contact">
			<Header />
			<PageName name={t("header.contact")} route="/contact" />
			<FormSection />
			<History />
			<Footer />
		</div>
	);
};

export default Contact;
