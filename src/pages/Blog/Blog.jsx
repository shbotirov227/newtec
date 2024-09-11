import React from 'react'
import { useTranslation } from "react-i18next";

import Header from "../../containers/Header/Header";
import Footer from "../../containers/Foooter/Footer";

import Title from "../../components/Title/Title";
import PageName from "../../components/PageName/PageName";
import BlogCard from "../../components/BlogCard/BlogCard";
import History from "../../components/History/History";

import BlogCardImg1 from "../../assets/images/blog-card-img1.png";
import BlogCardImg2 from "../../assets/images/blog-card-img2.png";
import BlogCardImg3 from "../../assets/images/blog-card-img3.png";
import BlogCardAuthImg1 from "../../assets/images/blog-card-auth-img1.png";
import BlogCardAuthImg2 from "../../assets/images/blog-card-auth-img2.png";
import BlogCardAuthImg3 from "../../assets/images/blog-card-auth-img3.png";

import "./Blog.scss";
import { Link } from "react-router-dom";

const Blog = () => {

    const blogCardData = [
        {
            img: BlogCardImg1,
            title: "The most Popular Business Of the Year",
            auth: "Ranold Jeff.",
            authImg: BlogCardAuthImg1,
            date: "May 4th, 2022",
        },

        {
            img: BlogCardImg2,
            title: "The most Popular Business Of the Year",
            auth: "Patricia Anderson",
            authImg: BlogCardAuthImg2,
            date: "Apr 27th, 2022",
        },

        {
            img: BlogCardImg3,
            title: "The most Popular Business Of the Year",
            auth: "Elaine Luna",
            authImg: BlogCardAuthImg3,
            date: "Apr 20th, 2022",
        },
    ];

    const { t } = useTranslation();
    
    return (
        <div className="Blog">
            <Header />
            <PageName name={t("header.blog")} route="/blog" />

            <div className="mt-14">
                <Title pageTitle={t("title.blog")} title={t("text.8")} />

                <div className="container flex items-center justify-between">

                    <div className="w-[40%] h-[50%] p-8 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                        <img className="w-full mb-4" src={blogCardData[0].img} alt="blogCardImg1" />
                        <span>{blogCardData[0].date}</span>
                        <Link to="/blog" className="text-red my-5 block font-bold text-lg">{blogCardData[0].title}</Link>
                        
                        <div className="flex items-center justify-between">
                            <div className="flex items-center justify-between">
                                <img src={blogCardData[0].authImg} alt="blogCardAuthImg" />
                                <span className="ml-3">{blogCardData[0].auth}</span>
                            </div>
                            <span>2 Min Read</span>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between p-8 rounded-xl mb-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                            <img className="mr-5" src={blogCardData[1].img} alt="blogCardDataImg2" />

                            <div>
                                <span>{blogCardData[1].date}</span>
                                <Link to="/blog" className="text-red my-5 block font-bold text-lg   ">{blogCardData[1].title}</Link>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-between">
                                        <img src={blogCardData[1].authImg} alt="blogCardAuthImg" />
                                        <span className="ml-3">{blogCardData[1].auth}</span>
                                    </div>
                                    <span>2 Min Read</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-8 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                            <img className="mr-5" src={blogCardData[2].img} alt="blogCardDataImg2" />

                            <div>
                                <span>{blogCardData[2].date}</span>
                                <Link to="/blog" className="text-red my-5 block font-bold text-lg">{blogCardData[2].title}</Link>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-between">
                                        <img src={blogCardData[2].authImg} alt="blogCardAuthImg" />
                                        <span className="ml-3">{blogCardData[2].auth}</span>
                                    </div>
                                    <span>2 Min Read</span>
                                </div>
                            </div>
                        </div>
                    </div>               
                </div>
            </div>
            
            <div className="bg-[#F7F7F7] py-20 mt-20">

                <Title pageTitle={t("title.blog")} title={t("text.8")} />

                <div className="flex items-center justify-center  mb-14">
                    {
                        blogCardData.map((el, id) => (
                            <BlogCard sty="mx-10" key={id} img={el.img} title={el.title} auth={el.auth} authImg={el.authImg} date={el.date} />
                        ))
                    }
                </div>
                
                <div className="flex items-center justify-center  mb-14">
                    {
                        blogCardData.map((el, id) => (
                            <BlogCard sty="mx-10" key={id} img={el.img} title={el.title} auth={el.auth} authImg={el.authImg} date={el.date} />
                        ))
                    }
                </div>
            </div>
            <History />
            <Footer />
        </div>
    )
}

export default Blog;
