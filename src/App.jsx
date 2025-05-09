import React, { useState, useEffect, useRef } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import NewPage from "./components/newPage/NewPage";
import * as S from './style';

export default function App(){

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/new" element={<NewPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}