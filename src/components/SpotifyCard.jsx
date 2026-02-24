import { AnimatePresence, motion } from "motion/react";
import { createPortal } from "react-dom";

const SpotifyCard = ({ song, activeSong, setActiveSong }) => {
  const { embed, image, title, artist, why } = song;
  const isOpen = activeSong?.embed === song.embed;
  const layoutKey = `song-${title}`;

  return (
    <>
      <motion.div
        className="border-2 border-[var(--border)] w-full lg:w-60 flex gap-5 items-center px-2 py-1 relative"
        whileHover={{
          scale: 1.05,
          rotate: 3,
        }}
        onClick={() => setActiveSong(song)}
        data-cursor="pointer"
      >
        <div id="left">
          <img
            src={image}
            className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-md object-cover"
            alt={title}
          />
        </div>
        <div id="right">
          <div>
            <h1 className="text-base lg:text-xl font-black">{title}</h1>
            <p className="text-xs">{artist}</p>
          </div>
        </div>
      </motion.div>

      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                layoutId={layoutKey}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 z-[999] -translate-y-1/2 w-[75%] md:w-[30%] lg:w-[25%] h-[30%] lg:h-[35%] lg:pt-10 bg-[var(--bg)] border-3 px-3 lg:px-10 flex flex-col gap-0 justify-center overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveSong(null)}
                  className="bg-red-600 border-2 font-black py-1 px-2 absolute top-1 right-1"
                  data-cursor="pointer"
                >
                  <p>X</p>
                </motion.button>

                <div className="flex flex-col gap-2 md:gap-5">
                  <iframe
                    src={`https://open.spotify.com/embed/track/${embed}`}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-xl h-20 lg:h-38 w-full"
                    data-cursor="pointer"
                  />
                  <div className="text-center text-[var(--text)]">{why}</div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
};

export default SpotifyCard;
