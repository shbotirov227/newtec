import React from "react";
import TestimonialIcon from "../../assets/icons/testimonial-icon.svg";

import "./TestimonialCard.scss";

const TestimonialCard = ({ img, text, auth, position }) => {
	return (
		<div className="TestimonialCard">
			<div className="flex items-center justify-between">
				<img src={img} alt="TestimonialCard-img" />
				<img src={TestimonialIcon} alt="TestimonialCard-icon" />
			</div>
			<p className="TestimonialCard-text">{text}</p>
			<h4 className="TestimonialCard-auth text-red">{auth}</h4>
			<h4 className="TestimonialCard-position">{position}</h4>
		</div>
	);
};

export default TestimonialCard;
