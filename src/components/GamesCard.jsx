import arrow from "../images/arrow.png";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { createPortal } from "react-dom";
import lifeIsUnfair from "../images/lifeIsUnfair.png";

const GamesCard = ({ url, title, why, image }) => {
  const [open, setOpen] = useState(false);
  const layoutKey = `game-${title}`;

  return (
    <>
      <motion.div
        layoutId={layoutKey}
        className="border w-40 px-2 py-1 cursor-pointer"
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.05, rotate: -2 }}
      >
        <img src={image} alt={title} className="h-40 w-full object-cover" />
        <h1 className="text-lg font-black">{title}</h1>
        <p className="text-xs">{why}</p>
      </motion.div>

      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              layoutId={layoutKey}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25%] h-[80%] bg-white border-3 z-10 p-10 overflow-y-auto"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div onClick={(e) => e.stopPropagation()}>
                <div className="w-full flex flex-col justify-center items-center gap-10">
                  <div className="flex flex-col items-center">
                    <h1 className=" text-5xl font-bold text-center cucu">
                      Shish
                    </h1>
                    <p className="text-xs">Life's Good</p>
                    <p className="text-lg triangle">(+91) XXXXXXX983</p>
                    {/* <img className="w-20 h-10" src={lifeIsUnfair} alt="" /> */}
                  </div>

                  <div className="flex justify-start w-full">
                    <h1>S.No.</h1>
                    <h1>Item</h1>
                    <h1>Price</h1>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
};

export default GamesCard;
