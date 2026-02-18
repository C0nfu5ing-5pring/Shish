import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { createPortal } from "react-dom";

const SpotifyCard = ({ song, activeSong, setActiveSong }) => {
  const { embed, image, title, artist, why } = song;
  const isOpen = activeSong?.embed === song.embed;
  const layoutKey = `song-${title}`;

  return (
    <>
      <div className="grid grid-cols-3 gap-3 w-60">
        <motion.div
          className="border w-60 flex gap-5 items-center px-2 py-1 relative"
          whileHover={{
            scale: 1.05,
            rotate: 3,
          }}
          onClick={() => setActiveSong(song)}
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
          </div>
        </motion.div>

        {createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                layoutId={layoutKey}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25%] h-[35%] bg-white border-3 z-10 p-10 overflow-y-auto"
                onClick={() => setActiveSong(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveSong(null)}
                  className="bg-red-600 border-2 font-black py-1 px-2 cursor-pointer absolute top-1 right-1"
                >
                  <p>X</p>
                </motion.button>

                <div className="flex flex-col p-5 gap-10">
                  <iframe
                    style={{ borderRadius: "12px" }}
                    src={`https://open.spotify.com/embed/track/${embed}`}
                    width="100%"
                    height="152"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                  <div className="text-center">{why}</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
      </div>
    </>
  );
};

export default SpotifyCard;
