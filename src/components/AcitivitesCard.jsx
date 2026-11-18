import { motion, useDragControls } from "motion/react";
import { useState, useRef, useLayoutEffect } from "react";
import SpotifyCard from "./SpotifyCard";
import haveItAll from "../images/songs/haveItAll.jpg";
import hoshiyaar from "../images/songs/hoshiyaar.png";
import videoGames from "../images/songs/videoGames.png";
import dontTell from "../images/songs/dontTell.png";
import dildooba from "../images/songs/dildooba.png";
import mutual from "../images/songs/mutual.png";
import kaise from "../images/songs/kaise.png";
import hardToRead from "../images/songs/hardToRead.png";
import tires from "../images/webseries/tires.png";
import wd2 from "../images/games/wd2.png";
import rdr2 from "../images/games/rdr2.png";
import wd2Banner from "../images/games/wd2Banner.png";
import rdr2Banner from "../images/games/rdr2Banner.png";
import rickroll from "../images/rickRoll.png";
import lifeIsUnfair from "../images/lifeIsUnfair.png";
import iGaveAllIHad from "../images/iGaveAllIHad.png";
import helloMyBaby from "../images/helloMyBaby.png";
import un4 from "../images/games/un4.png";
import un4Banner from "../images/games/un4Banner.png";
import iAmAManOfMyFortuneAndIMustSeekMyFortune from "../images/iAmAManOfMyFortuneAndIMustSeekMyFortune.png";
import un4Video from "../images/un4Video.png";
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
      image: haveItAll,
      embed: "7t7zUhP20qISNDNa1825kK",
    },
    {
      title: "Hoshiyaar",
      artist: "Seedhe Maut, Sez on the Beat",
      image: hoshiyaar,
      embed: "45OIe9DAqIW9wbNJpQhF1P",
    },
    {
      title: "Video Games",
      artist: "Seedhe Maut",
      image: videoGames,
      embed: "3iiQDjlBJdCv7O6jRLmiWq",
    },
    {
      title: "Don't Tell",
      artist: "Dishaan",
      image: dontTell,
      embed: "3ibIs3ijJRsQ45MOwuzZjR",
    },
    {
      title: "Dil Dooba",
      artist: "Frappe Ash, Calm",
      image: dildooba,
      embed: "2vTvYjbONRBCtGLa13u45Y",
    },
    {
      title: "Mutual",
      artist: "RANJ, Clifr",
      image: mutual,
      embed: "25T9KzOqSe44j3nsWuKfiM",
    },
    {
      title: "Kaise",
      artist: "Frappe Ash, Aman Sagar",
      image: kaise,
      embed: "7lE4hlwqJZE7Q19OGqKyXV",
    },
    {
      title: "Hard to Read",
      artist: "Day Wave",
      image: hardToRead,
      embed: "7JpcP0YUCNy8UklFgOf4t4",
    },
  ];

  const series = [
    {
      title: "Tires",
      why: "Hilarious",
      url: "https://www.netflix.com/title/81758875",
      image: tires,
    },
  ];

  const games = [
    {
      title: "Watchdogs 2",
      mainThing: "Love the graffiti and assets",
      image: wd2,
      banner: wd2Banner,
      category: "Open World",
      refundPolicy: "No",
      qrCode: rickroll,
      barCode: lifeIsUnfair,
      timeCost: "100+ hours",
      world: "San Francisco",
    },
    {
      title: "RDR 2",
      mainThing: "Why not?",
      image: rdr2,
      banner: rdr2Banner,
      category: "Open world",
      refundPolicy: "Huh",
      qrCode: helloMyBaby,
      barCode: iGaveAllIHad,
      timeCost: "4 Summer vacations!",
      world: "Fictionalised US",
    },
    {
      title: "Uncharted 4",
      mainThing: "Really awesome views",
      image: un4,
      banner: un4Banner,
      category: "Story",
      refundPolicy: "No need",
      qrCode: un4Video,
      barCode: iAmAManOfMyFortuneAndIMustSeekMyFortune,
      timeCost: "More than 80 hours for sure",
      world: "Madagascar, Scotland, Italy, Libertalia, Panama",
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
      initial={{
        x: pos.x,
        y: pos.y,
        opacity: 0,
      }}
      animate={{
        opacity: 1,
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
      className={`window absolute flex flex-col overflow-hidden w-[90vw] md:w-[560px]  ${
        isActive ? "z-50" : "z-10"
      }`}
      style={{
        left: 0,
        top: 0,
      }}
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

        <button
          className="resize"
          aria-label="Resize the window"
          onPointerDown={(e) => e.stopPropagation()}
        />
      </div>

      <div className="details-bar">
        <p>8 songs</p>
      </div>

      <div className="window-pane flex-1 min-h-0 overflow-y-auto p-1 md:p-2">
        <div className="flex flex-col gap-4">
          <section>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1 mt-3">
              {songs.map((song) => (
                <button
                  key={song.embed}
                  onClick={() => setActiveSong(song)}
                  className={`flex flex-col items-center gap-2 p-1 border-[var(--border)] transition-all ${
                    activeSong?.embed === song.embed
                      ? "bg-[#86878880]"
                      : "hover:bg-[#86878880]"
                  }`}
                >
                  <img
                    src={audionIcon}
                    alt="Play song"
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
              <div className="mt-2 lg:mt-8 flex flex-col text-xs">
                <h2>Now Playing: {activeSong.title}</h2>

                <iframe
                  key={activeSong.embed}
                  src={`https://open.spotify.com/embed/track/${activeSong.embed}?utm_source=generator`}
                  width="100%"
                  height="122"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title={`Spotify player - ${activeSong.title}`}
                  className="border-0"
                />
              </div>
            )}
          </section>

          {/* <section>
            <h2 className="font-black text-lg md:text-xl mb-1">Web Series</h2>
            <hr className="border-black" />
            <div className="grid grid-cols-2 gap-3 mt-3">
              {series.map((serie) => (
                <SeriesCard
                  key={serie.title}
                  title={serie.title}
                  why={serie.why}
                  url={serie.url}
                  image={serie.image}
                />
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-black text-lg md:text-xl mb-1">Games</h2>
            <hr className="border-black" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
              {games.map((game) => (
                <GamesCard key={game.title} {...game} />
              ))}
            </div>
          </section> */}
        </div>
      </div>

      <div className="details-bar shrink-0 flex justify-between">
        <span>{activeSong ? "Playing selection" : "No selection"}</span>
      </div>
    </motion.div>
  );
};

export default AcitivitesCard;
