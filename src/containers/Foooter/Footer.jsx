import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/footer-logo.svg"
import Linkedin from "../../assets/icons/linkedin.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import ReactIcon from "../../assets/icons/react-icon.svg";
import WordpressIcon from "../../assets/icons/wordpress-icon.svg";
import WixIcon from "../../assets/icons/wix-icon.svg";
import { FooterFacebook, FooterInstagram, FooterLinkedin, FooterTwitter } from "../../assets/icons"; 

import "./Footer.scss";

const Footer = () => {
	return (
		<div className="Footer">
			<div className="container flex justify-between">
                <div className="w-[20%]">
                    <Link className="Logo" to="/"><img src={Logo} alt="Logo" /></Link>
                    <p className="text-white text-base my-5 font-light leading-8">It is a long established fact that a reader will be distracted by the readable content of a page when looking at</p>

                    <div className="FormSection-right-social flex items-center justify-between">
                        <Link className="btn-default bg-white" target="_blank" to="http://linkedin.com"><FooterLinkedin sty="w-5 h-5" fill="#FF3E54" /></Link>
                        <Link className="btn-default bg-white" target="_blank" to="http://instagram.com"><FooterInstagram sty="w-5 h-5" fill="#FF3E54" /></Link>
                        <Link className="btn-default bg-white" target="_blank" to="http://facebook.com"><FooterFacebook sty="w-5 h-5" fill="#FF3E54" /></Link>
                        <Link className="btn-default bg-white" target="_blank" to="http://x.com"><FooterTwitter sty="w-5 h-5" fill="#FF3E54" /></Link>
                    </div>
                </div>

                <div className="colm">
                    <ul>
                        <h4 className="colm-title relative text-2xl mb-12 text-white">Services</h4>
                        <li className="my-4"><Link to="/services" className="text-white text-base font-light">Web Design/Development</Link></li>
                        <li className="my-4"><Link to="/services" className="text-white text-base font-light">App Development</Link></li>
                        <li className="my-4"><Link to="/services" className="text-white text-base font-light">UI/UX Design</Link></li>
                        <li className="my-4"><Link to="/services" className="text-white text-base font-light">HubSpot Integration</Link></li>
                        <li className="my-4"><Link to="/services" className="text-white text-base font-light">Email Marketing</Link></li>
                        <li className="my-4"><Link to="/services" className="text-white text-base font-light">Website Migration</Link></li>
                    </ul>
                </div>

                <div className="colm">
                    <h4 className="colm-title relative text-2xl mb-12 text-white">Career</h4>

                    <div className="flex my-8">
                        <img className="p-4 rounded-2xl bg-white w-8 h-8" src={ReactIcon} alt="react-icon" />

                        <div className="ml-5">
                            <h4 className="text-red mb-4 text-base">ReactJs Dev.</h4>
                            <span className="text-white text-sm">1-5 Years of Exp.</span>
                        </div>
                    </div>

                    <div className="flex my-8">
                        <img className="p-4 rounded-2xl bg-white w-8 h-8" src={WordpressIcon} alt="wordpress-icon" />

                        <div className="ml-5">
                            <h4 className="text-red mb-4 text-base">Wordpress Dev.</h4>
                            <span className="text-white text-sm">1-5 Years of Exp.</span>
                        </div>
                    </div>
                    
                    <div className="flex my-8">
                        <img className="p-4 rounded-2xl bg-white w-8 h-8" src={WixIcon} alt="wix-icon" />

                        <div className="ml-5">
                            <h4 className="text-red mb-4 text-base">Python Developer</h4>
                            <span className="text-white text-sm">1-5 Years of Exp.</span>
                        </div>
                    </div>
                </div>

                <div className="colm w-[30%]">
                    <h4 className="colm-title relative text-2xl mb-12 text-white">Subscribe Us</h4>
                    <p className="text-white text-lg leading-8">It is a long established fact that a reader will be distracted by the readable </p>
                    <input className="block w-[92%] px-4 py-3 my-5 outline-[#FF3E54] border-none rounded-xl text-lg" type="text" placeholder="Email" />
                    <button className="btn-default cursor-pointer flex items-center justify-center mr-0 m-auto">Submit</button>
                </div>

            </div>
		</div>
	);
};

export default Footer;
