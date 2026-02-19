import { motion } from "motion/react";
import arrow from "../images/arrow.png";
import folder1 from "../images/icons/folder1.png";
import folder2 from "../images/icons/folder2.png";

const IndividualProjectCard = ({ title, url }) => {
  return (
    <div className="flex flex-col">
      <motion.img
        src={folder1}
        alt="Folder Icon"
        whileHover={{
          rotate: -3,
          scale: 1.05,
        }}
        className="w-40 h-20"
        onClick={() => window.open(url, "_blank")}
      />
      <p className="text-center text-sm">{title}</p>
    </div>
  );
};

export default IndividualProjectCard;
