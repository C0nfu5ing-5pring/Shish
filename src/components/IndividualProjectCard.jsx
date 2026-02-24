import { motion } from "motion/react";
import folder1 from "../images/icons/folder1.png";
import folder2 from "../images/icons/folder2.png";

const IndividualProjectCard = ({ title, url }) => {
  return (
    <div
      className="flex flex-col justify-center items-center"
      data-cursor="pointer"
    >
      <motion.img
        src={folder1 || folder2}
        alt="Folder Icon"
        whileHover={{
          rotate: -3,
          scale: 1.05,
        }}
        className="w-15 h-10 md:w-25 md:h-15 lg:w-40 lg:h-20"
        onClick={() => window.open(url, "_blank")}
      />
      <p className="text-center lg:text-sm text-xs">{title}</p>
    </div>
  );
};

export default IndividualProjectCard;
