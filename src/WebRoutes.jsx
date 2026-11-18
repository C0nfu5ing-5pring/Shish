import { Routes, Route } from "react-router-dom";
import Home from "./app/Home.jsx";

const WebRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default WebRoutes;
