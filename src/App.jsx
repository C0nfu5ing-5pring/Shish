import { HashRouter } from "react-router-dom"; // Changed from BrowserRouter to HashRouter
import AppRoutes from "./AppRoutes";
import MainLayout from "./layouts/MainLayout";
import CustomCursor from "./components/CustomCursor";
import { ThemeColorProvider } from "./components/ThemeColorContext";

const App = () => {
  return (
    <div>
      <ThemeColorProvider>
        <HashRouter>
          <CustomCursor />
          <MainLayout>
            <AppRoutes />
          </MainLayout>
        </HashRouter>
      </ThemeColorProvider>
    </div>
  );
};

export default App;
