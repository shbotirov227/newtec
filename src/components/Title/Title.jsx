import React from 'react';

import "./Title.scss";

const Title = ({ pageTitle, title, text, sty }) => {
    return (
        <div style={{sty}} className="Title">
            <h3 className="Title-pageTitle">\ {pageTitle} \</h3>
            <h2 className="Title-title">{title}</h2>
            {text ? <p className="Title-text">{text}</p> : undefined}
        </div>
    )
}

export default Title;
