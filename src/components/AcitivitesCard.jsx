import { motion } from "motion/react";
import { useState } from "react";
import SpotifyCard from "./SpotifyCard";
import haveItAll from "../images/songs/haveItAll.jpg";
import hoshiyaar from "../images/songs/hoshiyaar.png";
import bondFission from "../images/songs/bondFission.png";
import dontTell from "../images/songs/dontTell.png";
import attached from "../images/songs/attached.png";
import mutual from "../images/songs/mutual.png";
import kaise from "../images/songs/kaise.png";
import hardToRead from "../images/songs/hardToRead.png";
import tires from "../images/webseries/tires.png";
import wd2 from "../images/games/wd2.png";
import rdr2 from "../images/games/rdr2.png";
import SeriesCard from "./SeriesCard";
import GamesCard from "./GamesCard";
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

const AcitivitesCard = ({
  containerRef,
  onClose,
  activeWindow,
  setActiveWindow,
}) => {
  const date = new Date();
  const year = date.getFullYear();
  const years = year - 2023;

  const songs = [
    {
      title: "Have It All",
      artist: "CASTLE BEAT",
      image: haveItAll,
      embed: `7t7zUhP20qISNDNa1825kK`,
      why: `In my playlist since ${years} years now`,
    },
    {
      title: "Hoshiyaar",
      artist: "Seedhe Maut, Sez on the Beat",
      image: hoshiyaar,
      embed: `45OIe9DAqIW9wbNJpQhF1P`,
      why: "Beautiful lyrics ",
    },
    {
      title: "Bond Fission",
      artist: "Reble",
      image: bondFission,
      embed: `1vQH3BXqf0Y4S4t7RSX2Cp`,
      why: "Sounds good when I am happy",
    },
    {
      title: "Don't Tell",
      artist: "Dishaan",
      image: dontTell,
      embed: `3ibIs3ijJRsQ45MOwuzZjR`,
      why: "You'll like it if you like indie music",
    },
    {
      title: "Attached",
      artist: "RANJ, Clifr, Issamood",
      image: attached,
      embed: `4LXP4tw0mucgLy8zeNj7lL`,
      why: "Sounds cool to me",
    },
    {
      title: "Mutual",
      artist: "RANJ, Clifr",
      image: mutual,
      embed: `25T9KzOqSe44j3nsWuKfiM`,
      why: "Nice vocals and music",
    },
    {
      title: "Kaise",
      artist: "Frappe Ash, Aman Sagar",
      image: kaise,
      embed: `7lE4hlwqJZE7Q19OGqKyXV`,
      why: "I like it just because it's relatable sometimes",
    },

    {
      title: "Hard to Read",
      artist: "Day Wave",
      image: hardToRead,
      embed: `7JpcP0YUCNy8UklFgOf4t4`,
      why: "Listened this one from WatchDogs 2, loving it since then",
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
      mainThing: "Love the graffiti, assets and the story",
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
  const CARD_WIDTH = 400;
  const CARD_HEIGHT = 300;

  const [initialPos] = useState(() => ({
    x: Math.random() * (window.innerWidth - CARD_WIDTH),
    y: Math.random() * (window.innerHeight - CARD_HEIGHT),
  }));

  return (
    <>
      <motion.div
        drag
        dragConstraints={containerRef}
        onMouseDown={() => setActiveWindow("activities")}
        initial={{
          x: initialPos.x,
          y: initialPos.y,
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
          scale: 0.9,
        }}
        className={`bg-[#ffffffee] border-2 absolute h-125 overflow-auto flex flex-col cursor-pointer ${
          isActive ? "z-50" : "z-10"
        }`}
      >
        <div className="flex justify-between border-b bg-gray-400 px-3 py-1">
          <div>
            <h1 className="font-black text-xl">Favourites</h1>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="bg-red-600 border-2 font-black py-1 px-2 cursor-pointer"
          >
            <p>X</p>
          </motion.button>
        </div>

        <div className="m-5 flex flex-col gap-3">
          <div>
            <h1 className="font-black text-xl">Songs</h1>
            <hr />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {songs.map((song, key) => {
              return (
                <SpotifyCard
                  song={song}
                  activeSong={activeSong}
                  setActiveSong={setActiveSong}
                />
              );
            })}
          </div>

          <div>
            <h1 className="font-black text-xl">Web Series</h1>
            <hr />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {series.map((serie, key) => {
              return (
                <SeriesCard
                  id={key}
                  title={serie.title}
                  why={serie.why}
                  url={serie.url}
                  image={serie.image}
                />
              );
            })}
          </div>

          <div>
            <h1 className="font-black text-xl">Games</h1>
            <hr />
          </div>

          <div className="grid grid-cols-3">
            {games.map((game, key) => {
              return <GamesCard id={key} {...game} />;
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AcitivitesCard;
