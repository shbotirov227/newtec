import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Foooter/Footer";

import PageName from "../../components/PageName/PageName";
import History from "../../components/History/History";
import Title from "../../components/Title/Title";
import TeamCard from "../../components/TeamCard/TeamCard";

import Img1 from "../../assets/images/about-img1.png";
import TeamImg1 from "../../assets/images/team-img1.png";
import TeamImg2 from "../../assets/images/team-img2.png";
import TeamImg3 from "../../assets/images/team-img3.png";
import TeamImg4 from "../../assets/images/team-img4.png";
import CustomerImg from "../../assets/icons/operator-icon.png";


import "./About.scss";

const About = () => {
	const { t } = useTranslation();

    const data = [
        {
            img: TeamImg1,
            name: "Larry F. Burnett",
            position: "CEO",
        },

        {
            img: TeamImg2,
            name: "Meghan J. Webb",
            position: "CTO",
        },

        {
            img: TeamImg3,
            name: "Yvonne J. Cullum",
            position: "CFO",
        },

        {
            img: TeamImg4,
            name: "Diana H. Williams",
            position: "COO",
        },
    ];    

	return (
		<div className="About">
			<Header />
			<PageName name={t("header.about")} route="/about" />

			<div className="bg-[#F7F7F7] mb-20">
				<div className="About-top flex w-[80%] m-auto py-20 mb-">
					<img src={Img1} className="mr-7 w-[40%] rounded-xl" alt="img1" />

					<div>
						<Title
							pageTitle={t("title.about")}
							title={t("about.title")}
							text={t("about.text")}
						/>

						<div className="w-[70%] flex mt-12 p-5 rounded-xl bg-white">
							<img src={CustomerImg} alt="customer-img" />

							<div className="ml-6">
								<h4 className="mb-2 text-blue">{t("about.customer.title")}</h4>
								<span>{t("about.customer.text")}</span>
								<a className="text-red" href="tel:+13566787897">+1 356 678 7897</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mb-20">
				<Title
					pageTitle={t("title.team")}
					title={t("about.team.title")}
				/>

                <div className="container flex items-center justify-between">
                    {data.map((el, id) => <TeamCard key={id} id={id} img={el.img} name={el.name} position={el.position} />)}
                </div>

                <div className="container flex items-center justify-between">
                    {data.map((el, id) => <TeamCard key={id} id={id} img={el.img} name={el.name} position={el.position} />)}
                </div>
			</div>

            <History />
            <Footer />
		</div>
	);
};

export default About;
