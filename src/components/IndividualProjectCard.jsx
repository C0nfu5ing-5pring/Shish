import { motion } from "motion/react";
import fileIcon from "../images/icons/fileIcon.png";

const IndividualProjectCard = ({ title, url }) => {
  return (
    <div
      className="flex flex-col justify-center items-center"
      data-cursor="pointer"
    >
      <motion.img
        src={fileIcon}
        alt="Folder Icon"
        whileHover={{
          rotate: -3,
          scale: 1.05,
        }}
        className="w-10 h-10 lg:w-14 lg:h-14 object-contain"
        onClick={() => window.open(url, "_blank")}
      />
      <p className="text-center lg:text-sm text-xs">{title}</p>
    </div>
  );
};

export default IndividualProjectCard;
