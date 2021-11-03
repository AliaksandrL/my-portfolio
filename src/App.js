import React from "react";
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Footer from "./footer/Footer";
import Contacts from "./contacts/Contacts";
import Projects from "./projects/Projects";
import Hire from "./hire/Hire";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main />
            <Skills />
            <Projects />
            <Hire />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
