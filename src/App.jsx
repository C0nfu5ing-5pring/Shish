import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import MainLayout from "./layouts/MainLayout";
import CustomCursor from "./components/CustomCursor";
import { ThemeColorProvider } from "./components/ThemeColorContext";

const App = () => {
  return (
    <div>
      <ThemeColorProvider>
        <BrowserRouter>
          <CustomCursor />
          <MainLayout>
            <AppRoutes />
          </MainLayout>
        </BrowserRouter>
      </ThemeColorProvider>
    </div>
  );
};

export default App;
