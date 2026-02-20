import { motion } from "motion/react";
import IndividualProjectCard from "./IndividualProjectCard";
import { useEffect, useState, useLayoutEffect, useRef } from "react";
import axios from "axios";

const getRandomPosition = (container, card) => {
  const c = container.getBoundingClientRect();
  const b = card.getBoundingClientRect();

  const maxX = c.width - b.width;
  const maxY = c.height - b.height;

  return {
    x: Math.random() * Math.max(0, maxX),
    y: Math.random() * Math.max(0, maxY),
  };
};

const Card = ({ containerRef, onClose, setActiveWindow, activeWindow }) => {
  const [repos, setRepos] = useState([]);
  const isActive = activeWindow === "project";
  const cardRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    if (!containerRef.current || !cardRef.current) return;
    setPos(getRandomPosition(containerRef.current, cardRef.current));
  }, []);

  useEffect(() => {
    const query = `{
      user(login: "C0nfu5ing-5pring"){
        pinnedItems(first: 6){
          nodes{
            ... on Repository{
              homepageUrl
              name
              url
            }
          }
        }
      }
    }`;

    axios
      .post(
        "https://api.github.com/graphql",
        { query },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
        },
      )
      .then((res) => {
        setRepos(res.data.data.user.pinnedItems.nodes);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <motion.div
        ref={cardRef}
        drag
        dragConstraints={containerRef}
        onMouseDown={() => setActiveWindow("project")}
        initial={{
          opacity: 0,
        }}
        animate={{
          x: pos.x,
          y: pos.y,
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
        className={`bg-[#ffffffee] border-2 absolute bottom-30 right-20 overflow-auto flex flex-col cursor-pointer ${
          isActive ? "z-50" : "z-10"
        }`}
      >
        <div className="flex justify-between items-center border-b bg-gray-400 px-2 lg:px-3 py-1">
          <div>
            <h1 className="font-black text-base lg:text-xl">Projects</h1>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="bg-red-600 border-2 font-black py-1 px-2 cursor-pointer"
          >
            <p className="text-xs lg:text-base">X</p>
          </motion.button>
        </div>

        <div className="m-5 grid grid-cols-2 gap-5">
          {repos.map((repo, index) => {
            return (
              <IndividualProjectCard
                key={index}
                url={repo.homepageUrl || repo.url}
                title={repo.name}
                desc={repo.description || "No description"}
              />
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
