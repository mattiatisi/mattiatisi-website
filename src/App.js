/*   REACT   */
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
/*   STYLE   */
import "./App.css";

import Header from "./components/Header";
import Layout from "./components/Layout";
/*   LOADING SCREEN   */
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3200);
  }, []);

  return (
    <>
     <h1> iebk rn </h1>
    </>
  );
}
