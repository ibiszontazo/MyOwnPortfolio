import React, { createContext, useState, useEffect } from 'react';
import portfolioData from '../db.json';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
    const [data, setData] = useState({
        projects: [],
        about: {}
    });

    useEffect(() => {
        if (localStorage.getItem('portfolioData')) {
            setData(JSON.parse(localStorage.getItem('portfolioData')));
        } else {
            setData(portfolioData);
            localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
        }
    }, []);

    const value = { data, setData };

    return (
        <PortfolioContext.Provider value={value}>
            {children}
        </PortfolioContext.Provider>
    );
};

export default PortfolioContext;