import React from "react";
import Stat from "./Stat";
import "./SmallCard.css";

const SmallCard = ({ statType, platform, count, stat, up }) => {
    /* Get platform icon */
    const platformIcon = require("../images/icon-" + platform + ".svg");

    return (
        <div className="small-card">
            <div className="small-card-top">
                <p className="stat-type">{statType}</p>
                <img
                    src={platformIcon}
                    alt="Icon"
                    className="small-card-icon"
                />
            </div>
            <div className="small-card-bottom">
                <p className="small-card-count">{count}</p>
                <div className="small-card-stat">
                    <Stat platform={platform} stat={stat} up={up} />
                </div>
            </div>
        </div>
    );
};

export default SmallCard;
