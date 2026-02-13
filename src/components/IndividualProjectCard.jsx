import { motion } from "motion/react";
import arrow from "../images/arrow.png";

const IndividualProjectCard = ({ title, desc, url }) => {
  return (
    <div className="w-50 flex flex-col gap-2 border-2 bg-white p-2 relative">
      <h1 className="font-bold">{title}</h1>
      <p className="text-xs">{desc}</p>
      <motion.img
        animate={{
          rotate: [60, -30],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
        onClick={() => window.open(url, "_blank")}
        className="absolute bottom-1 right-2 w-5 h-5 rounded-full active:scale-90 transition-all"
        src={arrow}
      ></motion.img>
    </div>
  );
};

export default IndividualProjectCard;
