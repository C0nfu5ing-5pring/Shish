import CustomCursor from "./components/CustomCursor";
import WebRoutes from "./WebRoutes";

const App = () => {
  const savedTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  const theme = savedTheme || systemTheme;

  document.body.classList.remove("dark", "brutal");
  if (theme != "light") {
    document.body.classList.add(theme);
  }

  return (
    <div>
      <WebRoutes />
      <CustomCursor />
    </div>
  );
};

export default App;
