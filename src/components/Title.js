import React from "react";
import "./Title.css";

const Title = ({ count }) => {
    return (
        <div className="text-container">
            <h1 className="title">Social Media Dashboard</h1>
            <p className="followers-text">Total Followers: {count}</p>
        </div>
    );
};

export default Title;
