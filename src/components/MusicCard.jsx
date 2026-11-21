import { AnimatePresence, motion } from "motion/react";
import { createPortal } from "react-dom";

const SpotifyCard = ({ song, activeSong, setActiveSong }) => {
  const { image, title, artist } = song;
  const isOpen = activeSong?.embed === song.embed;
  const layoutKey = `song-${song.title}`;

  return (
    <>
      <motion.div
        className="border-2 md:border-[var(--border-light)] hover:border-[var(--border)] w-full lg:w-60 flex gap-5 items-center px-2 py-1 relative cursor-pointer"
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
            <h1 className="text-base lg:text-xl font-black text-[var(--text)]">
              {title}
            </h1>
            <p className="text-xs text-[var(--text-muted)]">{artist}</p>
          </div>
        </div>
      </motion.div>

      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key={layoutKey}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 z-[999] -translate-y-1/2 w-[90vw] md:w-[30%] lg:w-[25%] min-h-[220px] bg-[var(--bg)] border-2 border-[var(--border)] px-3 lg:px-10 py-10 flex flex-col justify-center overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveSong(null)}
                className="bg-red-600 border-2 font-black py-1 px-2 absolute top-1 right-1"
                data-cursor="pointer"
                aria-label="Close player"
              >
                <p>X</p>
              </motion.button>

              <div className="flex flex-col gap-2 md:gap-5">
                {activeSong.appleMusicEmbed ? (
                  <iframe
                    key={activeSong.appleMusicEmbed}
                    src={activeSong.appleMusicEmbed}
                    height="205"
                    width="100%"
                    title={`Apple Music Player - ${activeSong.title}`}
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                    className="border-0 rounded-xl w-full"
                  />
                ) : (
                  <p className="text-center text-sm">
                    Apple Music player unavailable for this song.
                  </p>
                )}

                <div className="text-center text-[var(--text-muted)] triangle text-xl">
                  {activeSong.why}
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

export default SpotifyCard;
