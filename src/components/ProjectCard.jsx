import { motion } from "motion/react";
import IndividualProjectCard from "./IndividualProjectCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Card = ({ containerRef, onClose }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/C0nfu5ing-5pring/repos?sort=updated")
      .then((res) => {
        setRepos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <motion.div
        drag
        dragConstraints={containerRef}
        initial={{
          x: Math.random() * 400,
          y: Math.random() * 300,
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
            <h1 className="font-black text-xl">Projects</h1>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="bg-red-600 border-2 font-black py-1 px-2 cursor-pointer"
          >
            <p>X</p>
          </motion.button>
        </div>

        <div className="m-5 grid grid-cols-2 gap-5">
          {repos.map((repo) => {
            return (
              <IndividualProjectCard
                key={repo.id}
                url={repo.homepage || repo.html_url}
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
