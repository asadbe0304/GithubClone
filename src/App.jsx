import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Over from "./pages/Overwiev/index";
import Repos from "./pages/Repos/index";
import Follow from "./pages/Following/index";
import Followers from "./pages/Followers/index";
// import Repository from "./pages/Repository/index"
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <Over/> */}
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Over />} />
        <Route path="/repos" element={<Repos />} />
        {/* <Route path="/repos:names" element={<Repository />} /> */}
        <Route path="/foll" element={<Followers />} />
        <Route path="/follow" element={<Follow />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
