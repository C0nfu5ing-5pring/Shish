import { Analytics } from "@vercel/analytics/react";
import CustomCursor from "./components/CustomCursor";
import WebRoutes from "./WebRoutes";

const App = () => {
  return (
    <div>
      <WebRoutes />
      <CustomCursor />
      <Analytics />
    </div>
  );
};

export default App;
