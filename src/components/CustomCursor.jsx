import { motion } from "motion/react";
import { useEffect, useState } from "react";
import cursor from "../images/icons/cursor.png";
import cursorPointer from "../images/icons/cursor-pointer.png";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [type, setType] = useState("default");

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const checkPointer = (e) => {
      if (e.target.closest("[data-cursor='pointer']")) {
        setType("pointer");
      } else {
        setType("default");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", checkPointer);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", checkPointer);
    };
  }, []);

  return (
    <motion.div
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "tween", duration: 0 }}
      className="fixed -top-1 -left-2 pointer-events-none z-[10000]"
    >
      <img
        src={type === "pointer" ? cursorPointer : cursor}
        className="w-10 pointer-events-none"
        alt="cursor"
      />
    </motion.div>
  );
};

export default CustomCursor;
