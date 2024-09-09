import React from 'react'
import { useTranslation } from "react-i18next";

import Header from "../../containers/Header/Header";
import Footer from "../../containers/Foooter/Footer";

import PageName from "../../components/PageName/PageName";
import History from "../../components/History/History";

import "./Blog.scss";

const Blog = () => {

    const { t } = useTranslation();
    
    return (
        <div className="Blog">
            <Header />
            <PageName name={t("header.blog")} route="/blog" />
            <h1>Blog</h1>
            <History />
            <Footer />
        </div>
    )
}

export default Blog;
