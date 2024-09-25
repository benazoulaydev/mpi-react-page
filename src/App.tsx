import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HelmetProvider } from "react-helmet-async";
import HomePage from "./components/Homepage";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { SeoPage } from "./components/Seo";

function App() {
  return (
    <HelmetProvider>
      <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SeoPage title={""} description={""} imageUrl={""}  ><HomePage /></SeoPage>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/counter" element={<SeoPage title={"Counter Component"} description={"Counter Component to modify"} imageUrl={logo} ><Contact /></SeoPage>} />
      </Routes>
    </>
    </HelmetProvider>
  );
}

export default App;
