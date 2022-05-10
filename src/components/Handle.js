import React from "react";
import "./Handle.css";

const Handle = ({ platform, handle }) => {
    /* Get platform icon */
    const platformIcon = require("../images/icon-" + platform + ".svg");

    return (
        <div className="handle-container">
            <img src={platformIcon} alt="Icon" className="handle-icon" />
            <p className="handle-text">{handle}</p>
        </div>
    );
};

export default Handle;
