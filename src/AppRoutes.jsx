import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Silverzone from "./pages/Silverzone";
import HackerRankCSS from "./pages/Hackerrank-css-basic";
import BBPSHackathon from "./pages/BBPS-hackathon-1-0";
import ResponsiveWebDesign from "./pages/Responsive-web-design";
import StationXCertification from "./pages/StationX-certification";

const router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/silverzone" element={<Silverzone />} />
        <Route path="/hackerrank-css-basic" element={<HackerRankCSS />} />
        <Route path="/bbps-hackathon-1.0" element={<BBPSHackathon />} />
        <Route
          path="/responsive-web-design"
          element={<ResponsiveWebDesign />}
        />
        <Route
          path="/stationX-certification"
          element={<StationXCertification />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default router;
