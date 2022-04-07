import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "../dreams/components/navbar/NavBar";
import {AboutUs, HomeDreams, GamePage, BlogPage} from "../dreams/page";

const AppRouter = () => {
  return (
    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path="/" element={<HomeDreams />} />
        <Route path="/home" element={<HomeDreams />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default AppRouter