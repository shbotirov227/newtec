import React from "react";
import Title from "../../components/Title/Title";
import { useTranslation } from "react-i18next";
import PhoneIcon from "../../assets/icons/phone.svg";
import MailIcon from "../../assets/icons/mail.svg";
import LocationIcon from "../../assets/icons/location.svg";

import "./FormSection.scss";

const FormSection = () => {

    const Callto = ({ sty, phone, children }) => {
        return <a className={`${sty}`} href={`tel:${phone}`}>{children}</a>;
    };

    const Mailto = ({ sty, mail, children }) => {
        return <a className={`${sty}`} href={`mailto:${mail}`}>{children}</a>;
    };

    const { t } = useTranslation();

	return (
		<div className="FormSection">
			<div className="container">
                <Title pageTitle={t("title.form")} title={t("text.7")} />
                
                <div className="flex  justify-between w-[80%] m-auto">
                    <div className="FormSection-left w-[70%] mr-10 p-10">
                        <input type="text" placeholder="Name" />
                        <input type="email" name="email" id="email" placeholder="Email" />
                        <input type="tel" name="tel" id="tel" placeholder="Phone" />
                        <textarea name="textarea" id="textarea" placeholder="Your Message"></textarea>
                        <button className="btn-default">Send Now</button>
                    </div>

                    <div className="FormSection-right w-[25%] p-10">
                        <div className="flex items-center">
                            <img className="bg-[#F7F7F7] h-full p-5 rounded-xl mr-5" src={PhoneIcon} alt="" />

                            <div>
                                <h4 className="text-red mb-6">Call Anytime</h4>
                                <Callto sty="block text-[#0E1F51] mb-3" phone="+ 91 23678 27867">+ 91 23678 27867</Callto>
                                <Callto sty="block text-[#0E1F51]" phone="+ 91 67678 92878">+ 91 67678 92878</Callto>
                            </div>

                        </div>

                        <div className="flex items-center mb-8">
                            <img className="bg-[#F7F7F7] h-full p-5 rounded-xl mr-5" src={MailIcon} alt="" />

                            <div>
                                <h4 className="text-red mb-4">Send Email</h4>
                                <Mailto sty="block text-[#0E1F51] mb-3" mail="connect@itfirms.com">connect@itfirms.com</Mailto>
                                <Mailto sty="block text-[#0E1F51]" mail="hello@itfirms.com">hello@itfirms.com</Mailto>
                            </div>

                        </div>

                        <div className="flex items-center mb-8">
                            <img className="bg-[#F7F7F7] h-full p-5 rounded-xl mr-5" src={LocationIcon} alt="" />

                            <div>
                                <h4 className="text-red mb-4">Call Anytime</h4>
                                <Callto sty="block text-[#0E1F51] mb-3" phone="+ 91 23678 27867">+ 91 23678 27867</Callto>
                                <Callto sty="block text-[#0E1F51]" phone="+ 91 67678 92878">+ 91 67678 92878</Callto>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
		</div>
	);
};

export default FormSection;
