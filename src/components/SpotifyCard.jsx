import { motion } from "motion/react";
import arrow from "../images/arrow.png";

const SpotifyCard = ({ url, image, title, artist }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 w-60">
        <motion.div
          className="border w-60 flex gap-5 items-center px-2 py-1 relative"
          whileHover={{
            scale: 1.05,
            rotate: 3,
          }}
        >
          <div id="left">
            <img
              src={image}
              className=" w-16 h-16 rounded-md object-cover"
              alt={title}
            />
          </div>
          <div id="right">
            <div>
              <h1 className="text-xl font-black">{title}</h1>
              <p className="text-xs">{artist}</p>
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

export default SpotifyCard;
