import React, { createContext, useState, useEffect } from 'react';
import portfolioData from '../data/portfolioData.json';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
    const [data, setData] = useState({
        projects: [],
        about: {}
    });

    useEffect(() => {
        // Symulacja pobierania danych i zapis do localStorage
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