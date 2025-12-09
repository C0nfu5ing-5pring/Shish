import Footer from "../components/Footer";
import RoughDoodles from "../components/RoughDoodles";

const MainLayout = ({ children }) => {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ position: "relative", zIndex: 1000 }}
    >
      <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
      <Footer />
      <RoughDoodles
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default MainLayout;
