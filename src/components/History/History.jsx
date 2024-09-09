import React from "react";
import { Link } from "react-router-dom";

import "./History.scss";

const History = () => {
	return (
		<div className="History">
			<div className="container">
				<h3>“Some of the History of Our Company is that we are Catching up through Video”</h3>
				<Link className="btn-default" to="/contact">Get In Touch</Link>
			</div>
		</div>
	);
};

export default History;
