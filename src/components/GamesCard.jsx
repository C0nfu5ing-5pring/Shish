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
        className="border flex flex-col gap-1 w-40 cursor-pointer"
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.05, rotate: -2 }}
      >
        <img src={image} alt={title} className="h-40 w-full object-cover" />
        <div>
          <h1 className="text-lg px-2 font-black">{title}</h1>
        </div>
      </motion.div>

      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              layoutId={layoutKey}
              className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25%] h-[80%] bg-white border-3 z-10 p-10 overflow-y-auto`}
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
                    <h1 className=" text-5xl font-bold text-center cucu">
                      Shish
                    </h1>
                    <p className="text-xs">Life's Good</p>
                    <p className="text-lg triangle">(+91) XXXXXXX983</p>
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
