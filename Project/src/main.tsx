import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/navigation.tsx";
import Home from "./screens/Home/Home.tsx";

ReactDOM.hydrate(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Navigation />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
