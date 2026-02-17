import arrow from "../images/arrow.png";
import { motion } from "motion/react";

const SeriesCard = ({ why, url, title, image }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 w-60">
        <motion.div
          className="border w-30 flex gap-5 items-center px-2 py-1 relative"
          whileHover={{
            scale: 1.05,
            rotate: -2,
          }}
        >
          <div>
            <div>
              <img src={image} alt={title} className="h-30 w-full" />
              <h1 className="text-lg font-black">{title}</h1>
              <p className="text-xs">{why}</p>
            </div>
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
        </motion.div>
      </div>
    </>
  );
};

export default SeriesCard;
