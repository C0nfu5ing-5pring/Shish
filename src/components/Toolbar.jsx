import { useState, useEffect } from "react";
import { motion } from "motion/react";
import settingsDark from "../images/icons/settings-dark.png";
import settingsLight from "../images/icons/settings-light.png";
import settingsBrutalist from "../images/icons/settings-brutalist.png";
import Settings from "../components/Settings";
import contact from "../images/icons/contact.png";
import skills from "../images/icons/skills.png";
import favourites from "../images/icons/favourites.png";
import gallery from "../images/icons/gallery.png";
import status from "../images/icons/status.png";
import projects from "../images/icons/projects.png";

const Toolbar = ({
  openSkills,
  openProjects,
  openGallery,
  openActivities,
  openStatus,
  openContact,
}) => {
  const [today, setToday] = useState("");
  const [localTime, setLocalTime] = useState("");
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setLocalTime(now.toLocaleTimeString());
      setToday(now.toLocaleDateString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [theme, setThemeState] = useState("light");

  const setTheme = (theme) => {
    document.body.classList.remove("dark", "brutal");

    if (theme !== "light") {
      document.body.classList.add(theme);
    }

    localStorage.setItem("theme", theme);
    setThemeState(theme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";

    document.body.classList.remove("dark", "brutal");

    if (savedTheme !== "light") {
      document.body.classList.add(savedTheme);
    }

    setThemeState(savedTheme);
  }, []);
  return (
    <>
      <div className="w-full h-13 bg-[var(--header-bg)] border-[var(--border)] border-t-2 absolute bottom-0 px-5 py-0 lg:py-2">
        <div className="flex justify-between items-center">
          <div className="flex gap-5">
            <div
              onClick={() => setSettingsOpen(!settingsOpen)}
              className="flex items-center"
            >
              <motion.img
                whileHover={{
                  rotate: 45,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="w-8 lg:w-10"
                data-cursor="pointer"
                src={
                  theme === "dark"
                    ? settingsLight
                    : theme === "brutal"
                      ? settingsBrutalist
                      : settingsDark
                }
                alt="Settings Icon"
              />
            </div>

            <div className="flex items-center gap-3 w-[70%] lg:w-[80%]">
              <div>
                <img
                  src={contact}
                  className="w-15 lg:w-10"
                  alt="Contact me icon"
                  data-cursor="pointer"
                  onClick={openContact}
                />
              </div>
              <div>
                <img
                  src={status}
                  className="w-15 lg:w-10"
                  alt="Status icon"
                  data-cursor="pointer"
                  onClick={openStatus}
                />
              </div>
              <div>
                <img
                  src={favourites}
                  className="w-15 lg:w-10"
                  alt="Favourites icon"
                  data-cursor="pointer"
                  onClick={openActivities}
                />
              </div>
              <div>
                <img
                  src={skills}
                  className="w-15 lg:w-10"
                  alt="Skills icon"
                  data-cursor="pointer"
                  onClick={openSkills}
                />
              </div>
              <div>
                <img
                  src={gallery}
                  className="w-15 lg:w-10"
                  alt="Gallery icon"
                  data-cursor="pointer"
                  onClick={openGallery}
                />
              </div>
              <div>
                <img
                  src={projects}
                  className="w-15 lg:w-10"
                  alt="Projects icon"
                  data-cursor="pointer"
                  onClick={openProjects}
                />
              </div>
            </div>
            {settingsOpen ? <Settings setTheme={setTheme} /> : <div></div>}
          </div>
          <div className="flex gap-3 text-sm w-[40%] justify-end  md:text-xl text-[var(--text)] lg:leading-5 lg:text-xl">
            <div className="triangle">{today}</div>
            <div className="triangle">{localTime}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
