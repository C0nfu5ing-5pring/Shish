import { useThemeColor } from "./ThemeColorContext";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  const themeColor = useThemeColor();

  return (
    <footer className="text-white py-8" style={{ backgroundColor: themeColor }}>
      <div className="text-center text-white font-light">
        © {year} Shish Frutwala. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
