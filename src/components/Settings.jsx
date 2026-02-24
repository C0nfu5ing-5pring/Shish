import { motion } from "motion/react";
import brutal from "../images/icons/brutal.png";
import light from "../images/icons/light.png";
import dark from "../images/icons/dark.png";
const Settings = ({ setTheme }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute z-[9999] right-15 top-5 lg:right-30 lg:top-10 w-[40%] md:w-[25%] lg:w-[15%] border-2 bg-[var(--card)]/90 border-[var(--border)] h-50"
      >
        <div className="flex justify-between items-center border-b border-[var(--border)] bg-[var(--header-bg)] px-2 lg:px-3 py-1 touch-none">
          <div>
            <h1 className="font-black text-base lg:text-xl">Settings</h1>
          </div>
        </div>

        <div className="px-2 py-1 lg:px-3">
          <h1 className="text-xl lg:text-2xl">Theme</h1>
          <hr className="mb-3 border-[var(--border)]" />
          <div className="grid grid-cols-2 gap-3">
            <img
              onClick={() => setTheme("dark")}
              src={dark}
              alt="Dark theme icon"
              className="w-15 lg:w-20 object-fit active:scale-90 transition-all"
              data-cursor="pointer"
            />
            <img
              onClick={() => setTheme("light")}
              src={light}
              alt="Light theme icon"
              className="w-15 lg:w-20 object-fit active:scale-90 transition-all"
              data-cursor="pointer"
            />
            <img
              onClick={() => setTheme("brutal")}
              src={brutal}
              alt="Brutal theme icon"
              className="w-15 lg:w-20 object-fit active:scale-90 transition-all"
              data-cursor="pointer"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Settings;
