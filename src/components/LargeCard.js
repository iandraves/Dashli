import React from "react";
import Handle from "./Handle";
import Stat from "./Stat";
import "./LargeCard.css";

const chart = require("../images/chart.webp");

const LargeCard = ({ handle, platform, count, followerType, stat, up }) => {
    return (
        <div>
            <label>
                <input type="checkbox" />
                <div className="large-card">
                    <div>
                        <div
                            className={"large-card-top-line " + platform}
                        ></div>
                        <Handle platform={platform} handle={handle} />
                        <p className="large-card-count">{count}</p>
                        <p className="large-card-followers">{followerType}</p>
                        <Stat platform={platform} stat={stat} up={up} />
                    </div>
                    <div className="large-card-back">
                        <div
                            className={"large-card-top-line " + platform}
                        ></div>
                        <div className="large-card-back-chart">
                            <img
                                src={chart}
                                alt="Example line chart"
                                width="75%"
                                height="75%"
                            ></img>
                        </div>
                    </div>
                </div>
            </label>
        </div>
    );
};

export default LargeCard;
