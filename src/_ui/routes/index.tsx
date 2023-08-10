import { Routes, Route } from "react-router-dom";
import Home from "src/_ui/pages/home";

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
  </Routes>
);
