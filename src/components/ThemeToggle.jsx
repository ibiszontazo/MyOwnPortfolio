import React, { useState, useEffect } from "react";

function ThemeToggle() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <button onClick={toggleTheme} className="theme-toggle">
            {theme === "light" ? "☾ Dark" : "✹ Light"}
        </button>
    );
}

export default ThemeToggle;
