// import arrow from "../images/arrow.png";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { createPortal } from "react-dom";
import ReceiptContent from "./ReceiptContent";

const GamesCard = ({
  title,
  mainThing,
  image,
  banner,
  category,
  refundPolicy,
  qrCode,
  barCode,
  timeCost,
  world,
}) => {
  const [open, setOpen] = useState(false);
  const layoutKey = `game-${title}`;

  return (
    <>
      <motion.div
        layoutId={layoutKey}
        className="border flex flex-col gap-1 lg:w-40 cursor-pointer"
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.05, rotate: -2 }}
      >
        <img
          src={image}
          alt={title}
          className="h-35 md:h-40 w-full object-cover"
        />
        <div>
          <h1 className="text-sm lg:text-lg px-2 font-black text-center triangle">
            {title}
          </h1>
        </div>
      </motion.div>

      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              layoutId={layoutKey}
              className={`fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-[70%] md:w-[30%] h-[65%] lg:h-[70%] z-[999] bg-white border-3 p-10 overflow-y-auto`}
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setOpen(false)}
                className="bg-red-600 border-2 font-black py-1 px-2 cursor-pointer absolute top-1 right-1"
              >
                <p>X</p>
              </motion.button>
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <div className="w-full flex flex-col justify-center items-center gap-10">
                  <div className="flex flex-col items-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center cucu">
                      Shish
                    </h1>
                    <p className="text-xs">Life's Good</p>
                    <p className="text-base lg:text-lg triangle">
                      (+91) XXXXXXX109
                    </p>
                  </div>

                  <ReceiptContent
                    product={title}
                    category={category}
                    world={world}
                    mainThing={mainThing}
                    timeCost={timeCost}
                    refundPolicy={refundPolicy}
                    barCode={barCode}
                    qrCode={qrCode}
                    banner={banner}
                  />
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
