import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Services from "./pages/Services/Services";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";

import "./assets/index.scss";
// import "./index.css"

function App() {
	return (
		<div className="App">
            <BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} /> 
					<Route path="/about" element={<About />} /> 
					<Route path="/blog" element={<Blog />} /> 
					<Route path="/services" element={<Services />} /> 
					<Route path="/portfolio" element={<Portfolio />} /> 
					<Route path="/contact" element={<Contact />} /> 
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
