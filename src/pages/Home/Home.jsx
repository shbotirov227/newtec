import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "../../containers/Header/Header";
import Title from "../../components/Title/Title";
import HeroImg from "../../assets/images/heroImg.png";
import CustomerImg from "../../assets/icons/operator-icon.png";
import Img1 from "../../assets/images/about-img1.png";
import Img2 from "../../assets/images/about-img2.png";
import TeamImg1 from "../../assets/images/team-img1.png";
import TeamImg2 from "../../assets/images/team-img2.png";
import TeamImg3 from "../../assets/images/team-img3.png";
import TeamImg4 from "../../assets/images/team-img4.png";
import AuthImg1 from "../../assets/images/auth-img1.svg";
import AuthImg2 from "../../assets/images/auth-img2.svg";
import AuthImg3 from "../../assets/images/auth-img3.svg";
import CardIcon1 from "../../assets/icons/card-icon1.svg";
import CardIcon2 from "../../assets/icons/card-icon2.svg";
import CardIcon3 from "../../assets/icons/card-icon3.svg";
import CardIcon4 from "../../assets/icons/card-icon4.svg";
import CardIcon5 from "../../assets/icons/card-icon5.svg";
import CardIcon6 from "../../assets/icons/card-icon6.svg";
import CardIcon7 from "../../assets/icons/card-icon7.svg";
import CardIcon8 from "../../assets/icons/card-icon8.svg";
import CardIcon9 from "../../assets/icons/card-icon9.svg";
import CardIcon10 from "../../assets/icons/card-icon10.svg";
import CardIcon11 from "../../assets/icons/card-icon11.svg";
import CardIcon12 from "../../assets/icons/card-icon12.svg";
import Card from "../../components/Card/Card";

import "./Home.scss";
import TeamCard from "../../components/TeamCard/TeamCard";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import { CCarousel, CCarouselCaption, CCarouselItem } from "@coreui/react";
import FormSection from "../../containers/FormSection/FormSection";

const Home = () => {
	const { t } = useTranslation();

    const cardData = [
        {
            icon: CardIcon1,
            num: "01",
            title: t("card.title.1"),
            text: t("card.text.1")
        },
        
        {
            icon: CardIcon2,
            num: "02",
            title: t("card.title.2"),
            text: t("card.text.1")
        },
        
        {
            icon: CardIcon3,
            num: "03",
            title: t("card.title.3"),
            text: t("card.text.1")
        },
        
        {
            icon: CardIcon4,
            num: "04",
            title: t("card.title.4"),
            text: t("card.text.1")
        }
    ];
    
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

	const testimonialData = [
		{
			img: AuthImg1,
			auth: "Diana H. Williams",
			position: "CTO"
		},

		{
			img: AuthImg2,
			auth: "Samual Karl",
			position: "CEO"
		},

		{
			img: AuthImg3,
			auth: "Daria Linney",
			position: "COO"
		},
	];
    
	return (
        <div className="Home">
			<Header />

			<div className="container flex w-[100%] items-center justify-center mt-32">
				<div className="hero-left w-[50%]">
					<Title pageTitle={t("title.hero")} title={t("text.1")} />
					<Link to="/services" className="btn-default">View More</Link>
				</div>

				<div className="imgSection">
                    <img className="HeroImg" src={HeroImg} alt="heroImg" />
                </div>


			</div>

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


            <div className="container">

                <Title
				    pageTitle={t("title.plan")}
					title={t("text.2")}
				/>

                <div className="flex items-center justify-between gap-20 mb-28">
                    {
                        cardData.map((el, id) => (
                            <Card key={id} id={id} num={el.num} icon={el.icon} title={el.title} text={el.text}  />
                        ))
                    }
                </div>
            </div>

            <div className="bg-[#F7F7F7] mb-20">
				<div className="About-top sm flex w-[80%] m-auto py-20 mb-24">
					<img src={Img2} className="mr-7 w-[40%] rounded-xl" alt="img1" />

					<div>
						<Title
							pageTitle={t("title.wedo")}
							title={t("text.3")}
							text={t("titleText.1")}
						/>

						<div className="flex items-center justify-between w-full mb-12">
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
            
            <div className="bg-[#F7F7F7] mb-20 py-16">
                <Title pageTitle={t("title.team")} title={t("text.5")} />
                <div className="container flex items-center justify-between">
                    {data.map((el, id) => <TeamCard key={id} id={id} img={el.img} name={el.name} position={el.position} />)}
                </div>
            </div>

            <Title pageTitle={t("title.testimonial")} title={t("text.6")} />

            <div className="flex items-center justify-between mb-24">
					{
						testimonialData.map((el, id) => (
							<TestimonialCard key={id} img={el.img} auth={el.auth} position={el.position} text={t("about.text")} />
						))
					}
			</div>

			<FormSection />
        </div>
	);
};

export default Home;
