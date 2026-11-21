import { motion, useDragControls } from "motion/react";
import { useState, useRef, useLayoutEffect } from "react";
import audionIcon from "../images/icons/audion.png";

const getRandomPosition = (container, card) => {
  const c = container.getBoundingClientRect();
  const b = card.getBoundingClientRect();

  return {
    x: Math.random() * Math.max(0, c.width - b.width),
    y: Math.random() * Math.max(0, c.height - b.height),
  };
};

const AcitivitesCard = ({
  containerRef,
  onClose,
  activeWindow,
  setActiveWindow,
}) => {
  const songs = [
    {
      title: "Have It All",
      artist: "CASTLE BEAT",
      embed:
        "https://embed.music.apple.com/us/album/have-it-all/1634630718?i=1634630721&itscg=30200&itsct=music_box_player&ls=1&app=music&mttnsubad=1634630721&theme=auto",
    },
    {
      title: "Hoshiyaar",
      artist: "Seedhe Maut, Sez on the Beat",
      embed:
        "https://embed.music.apple.com/us/album/hoshiyaar/1804725962?i=1804725978&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1804725978&amp;theme=auto",
    },

    {
      title: "Video Games",
      artist: "Seedhe Maut",
      embed:
        "https://embed.music.apple.com/us/album/video-games/1812504728?i=1812506985&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1812506985&amp;theme=auto",
    },
    {
      title: "Don't Tell",
      artist: "Dishaan",
      embed:
        "https://embed.music.apple.com/us/album/dont-tell/1698395999?i=1698396003&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1698396003&amp;theme=auto",
    },
    {
      title: "Dil Dooba",
      artist: "Frappe Ash, Calm",
      embed:
        "https://embed.music.apple.com/us/album/dil-dooba/6812613593?i=6812613789&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=6812613789&amp;theme=auto",
    },
    {
      title: "Mutual",
      artist: "RANJ, Clifr",
      embed:
        "https://embed.music.apple.com/us/album/mutual/6807476243?i=6807476246&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=6807476246&amp;theme=auto",
    },
    {
      title: "Kaise",
      artist: "Frappe Ash, Aman Sagar",
      embed:
        "https://embed.music.apple.com/us/album/kaise/1747466384?i=1747467541&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1747467541&amp;theme=auto",
    },
    {
      title: "Hard to Read",
      artist: "Day Wave",
      embed:
        "https://embed.music.apple.com/us/album/hard-to-read/1215423842?i=1215424565&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1215424565&amp;theme=auto",
    },
    {
      title: "Jo Bhi Ho",
      artist: "Frappe Ash",
      embed:
        "https://embed.music.apple.com/us/album/jo-bhi-ho/1747466384?i=1747466676&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1747466676&amp;theme=auto",
    },
  ];

  const [activeSong, setActiveSong] = useState(null);
  const isActive = activeWindow === "activities";
  const cardRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const dragControls = useDragControls();

  useLayoutEffect(() => {
    if (!containerRef.current || !cardRef.current) return;
    setPos(getRandomPosition(containerRef.current, cardRef.current));
  }, [containerRef]);

  return (
    <motion.div
      ref={cardRef}
      drag
      dragListener={false}
      dragControls={dragControls}
      dragConstraints={containerRef}
      dragMomentum={false}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        x: pos.x,
        y: pos.y,
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
        y: 10,
      }}
      whileDrag={{
        scale: 0.98,
      }}
      onPointerDown={() => setActiveWindow("activities")}
      className={`window absolute flex flex-col overflow-hidden w-[94vw] min-w-[296px] max-w-[420px] max-h-[75vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
        isActive ? "z-50" : "z-10"
      }`}
    >
      <div
        className="title-bar shrink-0 touch-none select-none"
        onPointerDown={(e) => dragControls.start(e)}
      >
        <button
          className="close"
          aria-label="Close window"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        />

        <h1 className="title">Songs</h1>
      </div>

      <div className="details-bar shrink-0">
        <p>8 songs</p>
      </div>

      <div className="window-pane flex-1 min-h-0 overflow-y-auto p-1 md:p-2">
        <div className="flex flex-col gap-4">
          <section>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1 mt-3">
              {songs.map((song) => (
                <button
                  key={song.embed}
                  type="button"
                  onClick={() => setActiveSong(song)}
                  aria-pressed={activeSong?.embed === song.embed}
                  className={`flex flex-col items-center gap-2 p-1 border-[var(--border)] transition-all ${
                    activeSong?.embed === song.embed
                      ? "bg-[#86878880]"
                      : "hover:bg-[#86878880]"
                  }`}
                >
                  <img
                    src={audionIcon}
                    alt=""
                    draggable="false"
                    className="w-10 h-10 lg:w-14 lg:h-14 object-contain"
                  />

                  <span className="font-bold text-sm text-center">
                    {song.title}
                    <br />
                    <span className="font-light">{song.artist}</span>
                  </span>
                </button>
              ))}
            </div>

            {activeSong && (
              <div className="mt-4 lg:mt-8 flex flex-col gap-3">
                <h2 className="text-xs font-black">
                  Now Playing: {activeSong.title}
                </h2>

                <div className="w-full min-w-0 overflow-hidden">
                  <iframe
                    key={activeSong.embed}
                    src={activeSong.embed}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                    title={`Apple Music - ${activeSong.title}`}
                    loading="lazy"
                    className="border-0 rounded-xl w-full"
                  />
                </div>

                <a
                  href={activeSong.embed.replace(
                    "embed.music.apple.com",
                    "music.apple.com",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center underline font-bold text-sm"
                >
                  Open in Apple Music
                </a>
              </div>
            )}
          </section>
        </div>
      </div>

      <div className="details-bar shrink-0 flex justify-between">
        <span>{activeSong ? "Selection ready" : "No selection"}</span>
      </div>
    </motion.div>
  );
};

export default AcitivitesCard;
