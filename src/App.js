import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import useLocalStorage from "use-local-storage";
import Title from "./components/Title";
import ThemeToggle from "./components/ThemeToggle";
import LargeCard from "./components/LargeCard";
import SmallCard from "./components/SmallCard";
import "./App.css";

/* Load data from JSON */
const data = JSON.parse(JSON.stringify(require("./data.json")));

function App() {
    /* Get localStorage color scheme */
    const [theme, changeTheme] = useState(useLocalStorage("theme")[0]);

    /* Creating groups of data to render on cards */
    const [firstGroup, setFirstGroup] = useState(
        Object.values(data.firstGroup)
    );
    const [secondGroup, setSecondGroup] = useState(
        Object.values(data.secondGroup)
    );

    return (
        <div className="App" data-theme={theme}>
            <div className="top-bg"></div>
            <div className="main-container">
                <div className="lead-container">
                    <Title count="23,004" />
                    <hr className="line-break" />
                    <ThemeToggle changeTheme={changeTheme} />
                </div>
                <ReactSortable
                    list={firstGroup}
                    setList={setFirstGroup}
                    animation={150}
                    className="card-container"
                >
                    {firstGroup.map((item) => (
                        <LargeCard
                            key={item.id}
                            item={item}
                            handle={item.handle}
                            platform={item.platform}
                            count={item.count}
                            followerType={item.followerType}
                            stat={item.stat}
                            up={item.up}
                        />
                    ))}
                </ReactSortable>
                <div className="bottom-container">
                    <p className="overview-text">Overview - Today</p>
                    <ReactSortable
                        list={secondGroup}
                        setList={setSecondGroup}
                        animation={150}
                        className="card-container"
                    >
                        {secondGroup.map((item) => (
                            <SmallCard
                                key={item.id}
                                item={item}
                                statType={item.statType}
                                platform={item.platform}
                                count={item.count}
                                stat={item.stat}
                                up={item.up}
                            />
                        ))}
                    </ReactSortable>
                </div>
            </div>
        </div>
    );
}

export default App;
