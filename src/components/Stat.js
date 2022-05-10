import React from "react";
import "./Stat.css";

const Stat = ({ stat, up }) => {
    const icon = require("../images/icon-" + (up ? "up" : "down") + ".svg");
    const textColor = up ? "stat-text green" : "stat-text red";

    return (
        <div className="stat">
            <img
                src={icon}
                alt={up ? "Up icon" : "Down icon"}
                className="direction-icon"
            />
            <p className={textColor}>{stat}</p>
        </div>
    );
};

export default Stat;
