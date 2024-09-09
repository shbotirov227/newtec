import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Header from "../../containers/Header/Header";
import Footer from "../../containers/Foooter/Footer";
import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";
import History from "../../components/History/History";
import PageName from "../../components/PageName/PageName";

import Img2 from "../../assets/images/about-img2.png";

import CardIcon5 from "../../assets/icons/card-icon5.svg";
import CardIcon6 from "../../assets/icons/card-icon6.svg";
import CardIcon7 from "../../assets/icons/card-icon7.svg";
import CardIcon8 from "../../assets/icons/card-icon8.svg";
import CardIcon9 from "../../assets/icons/card-icon9.svg";
import CardIcon10 from "../../assets/icons/card-icon10.svg";
import CardIcon11 from "../../assets/icons/card-icon11.svg";
import CardIcon12 from "../../assets/icons/card-icon12.svg";

import "./Services.scss";

const Services = () => {

    const { t } = useTranslation ();

    const experticeData = [
        {
            icon: CardIcon7,
            title: t("card.title.5"),
            text: t("card.text.1")
        },

        {
            icon: CardIcon8,
            title: t("card.title.6"),
            text: t("card.text.1")
        },

        {
            icon: CardIcon9,
            title: t("card.title.7"),
            text: t("card.text.1")
        },

        {
            icon: CardIcon10,
            title: t("card.title.8"),
            text: t("card.text.1")
        },

        {
            icon: CardIcon11,
            title: t("card.title.9"),
            text: t("card.text.1")
        },

        {
            icon: CardIcon12,
            title: t("card.title.10"),
            text: t("card.text.1")
        },
    ];


	return (
		<div className="Services">
			<Header />

            <PageName name={t("header.services")} route="/services" />

			<div className="bg-[#F7F7F7] mb-20">
				<div className="About-top sm flex w-[80%] m-auto py-20 mb-24">
					<img src={Img2} className="mr-7 w-[40%] rounded-xl" alt="img1" />

					<div>
						<Title
							pageTitle={t("title.wedo")}
							title={t("text.3")}
							text={t("titleText.1")}
						/>

						<div className="flex items-center justify-between w-full mb-12 gap-8">
                            <div className="w-[50%] flex p-5 rounded-xl bg-white">
                                <img src={CardIcon5} alt="customer-img" />

                                <div className="ml-6">
                                    <h4 className="mb-2 text-blue">{t("about.customer.title2")}</h4>
                                    <span>{t("about.customer.text2")}</span>
                                </div>
                            </div>

                            <div className="w-[50%] flex p-5 rounded-xl bg-white">
                                <img src={CardIcon6} alt="customer-img" />

                                <div className="ml-6">
                                    <h4 className="mb-2 text-blue">{t("about.customer.title3")}</h4>
                                    <span>{t("about.customer.text2")}</span>
                                </div>
                            </div>

                        </div>

                        <Link className="btn-default" to="/services">View More</Link>
					</div>
				</div>
			</div>

            <Title pageTitle={t("title.expertice")} title={t("text.4")} />

            <div className="container flex flex-wrap items-center justify-between mb-24">
                {
                    experticeData.map((el, id) => (
                        <Card className="mb-20" key={id} id={id} icon={el.icon} title={el.title} text={el.text} />
                    ))
                }
            </div>

            <History />

			<Footer />
		</div>
	);
};

export default Services;
