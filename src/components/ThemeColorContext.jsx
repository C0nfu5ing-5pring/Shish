import { createContext, useContext, useState, useEffect } from "react";

const ThemeColorContext = createContext();

export const ThemeColorProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState("");

  useEffect(() => {
    const color = `hsl(${Math.floor(Math.random() * 360)}, 90%, 60%)`;
    setThemeColor(color);
  }, []);

  return (
    <ThemeColorContext.Provider value={themeColor}>
      {children}
    </ThemeColorContext.Provider>
  );
};

export const useThemeColor = () => useContext(ThemeColorContext);
