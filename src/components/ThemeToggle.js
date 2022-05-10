import React from "react";
import useLocalStorage from "use-local-storage";
import "./ThemeToggle.css";

const ThemeToggle = ({ changeTheme }) => {
    /* Get default theme and set in localStorage */
    const defaultDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
    const [theme, setTheme] = useLocalStorage(
        "theme",
        defaultDark ? "dark" : "light"
    );

    /* Toggle color theme */
    const switchTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        changeTheme(newTheme);
    };

    return (
        <div className="theme-container">
            <p className="theme-text">Dark Mode</p>
            <label className="toggle">
                <input
                    className="toggle-checkbox"
                    type="checkbox"
                    onClick={switchTheme}
                    checked={theme === "light"}
                />
                <div className="toggle-switch"></div>
            </label>
        </div>
    );
};

export default ThemeToggle;
