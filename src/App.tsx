import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HelmetProvider } from "react-helmet-async";
import HomePage from "./components/Homepage";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

function App() {
  return (
    <HelmetProvider>
      <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
    </HelmetProvider>
  );
}

export default App;
