import React from "react";
import LineIcon from "../../assets/icons/card-line-icon.svg";

import "./Card.scss";

const Card = ({ className, id, icon, title, text, num }) => {
	return (
		<div className={`Card ${className}`}>
            <div className="flex justify-between">
			    <img src={icon} alt={`card-img${id}`} />
                {num ? <h4 className="Card-num">{num}</h4> : undefined}
            </div>
			<h4 className="Card-title">{title}</h4>
            <img className="mb-6" src={LineIcon} alt="card-line-icon" />
			<p className="Card-text">{text}</p>
		</div>
	);
};

export default Card;
