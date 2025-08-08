import React from 'react';


import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default App;


const API = "http://localhost:3000";

fetch(`${API}/db`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });