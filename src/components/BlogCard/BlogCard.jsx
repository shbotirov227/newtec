import React from "react";
import { Link } from "react-router-dom";

import "./BlogCard.scss";

const BlogCard = ({ sty, img, title, authImg, auth, date }) => {
	return (
		<Link to="/blog" className={`BlogCard ${sty}`}>
			<img className="BlogCard-img" src={img} alt="BlogCard-img" />
			<h4 className="text-red">{title}</h4>

			<div className="flex items-center justify-between">
				<div className="flex items-center">
					<img src={authImg} alt="BlogCard-authImg" />
					<h5 className="text-blue ml-3">{auth}</h5>
				</div>

				<span>{date}</span>
			</div>
		</Link>
	);
};

export default BlogCard;
