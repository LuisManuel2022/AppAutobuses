import React from "react";
import { Route, Routes } from "react-router-dom";
import Abouts from "../Abouts";
import NavBar from "../NavBar/NavBar";
import Slide from "../Slider";

const NewHead = () => {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element={<Slide />} />
          <Route path="about" element={<Abouts />} />
        </Routes>
    </>
  );
};

export default NewHead;
