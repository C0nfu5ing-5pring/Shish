import { motion } from "motion/react";
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

const AcitivitesCard = ({ containerRef, onClose }) => {
  const songs = [
    {
      title: "Have It All",
      artist: "CASTLE BEAT",
      image: haveItAll,
      url: "https://open.spotify.com/track/7t7zUhP20qISNDNa1825kK?si=6f2c926c05cb4450",
    },
    {
      title: "Hoshiyaar",
      artist: "Seedhe Maut, Sez on the Beat",
      image: hoshiyaar,
      url: "https://open.spotify.com/track/45OIe9DAqIW9wbNJpQhF1P?si=1cd4183d67c747c0",
    },
    {
      title: "Bond Fission",
      artist: "Reble",
      image: bondFission,
      url: "https://open.spotify.com/track/1vQH3BXqf0Y4S4t7RSX2Cp?si=ad9e0d78d99441ed",
    },
    {
      title: "Don't Tell",
      artist: "Dishaan",
      image: dontTell,
      url: "https://open.spotify.com/track/3ibIs3ijJRsQ45MOwuzZjR?si=f0b1388aeb9b419f",
    },
    {
      title: "Attached",
      artist: "RANJ, Clifr, Issamood",
      image: attached,
      url: "https://open.spotify.com/track/4LXP4tw0mucgLy8zeNj7lL?si=82adb8b44b9f4d52",
    },
    {
      title: "Mutual",
      artist: "RANJ, Clifr",
      image: mutual,
      url: "https://open.spotify.com/track/25T9KzOqSe44j3nsWuKfiM?si=b5cdf40a882343e0",
    },
    {
      title: "Kaise",
      artist: "Frappe Ash, Aman Sagar",
      image: kaise,
      url: "https://open.spotify.com/track/7lE4hlwqJZE7Q19OGqKyXV?si=0973123f276d415e",
    },

    {
      title: "Hard to Read",
      artist: "Day Wave",
      image: hardToRead,
      url: "https://open.spotify.com/track/7JpcP0YUCNy8UklFgOf4t4?si=e4808261c9084bd3",
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
  ];

  return (
    <>
      <motion.div
        drag
        dragConstraints={containerRef}
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
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
        className="bg-[#ffffffee] border-2 absolute h-125 overflow-auto flex flex-col cursor-pointer"
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
                  id={key}
                  title={song.title}
                  image={song.image}
                  url={song.url}
                  artist={song.artist}
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

          <div className="grid grid-cols-2 gap-3 w-full justify-start items-center">
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
