import { motion } from "motion/react";
import discord from "../images/socials/discord.png";
import email from "../images/socials/email.png";
import linkedIn from "../images/socials/linkedIn.png";
import reddit from "../images/socials/reddit.png";
import spotify from "../images/socials/spotify.png";
import github from "../images/tech/github.png";

const ContactCard = ({
  containerRef,
  onClose,
  setActiveWindow,
  activeWindow,
}) => {
  const isActive = activeWindow === "contact";

  return (
    <>
      <motion.div
        drag
        dragConstraints={containerRef}
        onMouseDown={() => setActiveWindow("contact")}
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
        className={`bg-[#ffffffee] border-2 absolute h-65 w-80 overflow-auto flex flex-col cursor-pointer ${
          isActive ? "z-50" : "z-10"
        }`}
      >
        <div className="flex justify-between border-b bg-gray-400 px-3 py-1">
          <div>
            <h1 className="font-black text-xl">Contact</h1>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="bg-red-600 border-2 font-black py-1 px-2 cursor-pointer"
          >
            <p>X</p>
          </motion.button>
        </div>

        <div className="m-5 flex flex-col gap-3 ">
          <div>
            <h1 className="font-black">Socials</h1>
            <hr />
          </div>

          <div className="grid grid-cols-3 gap-3 px-3">
            <img
              onClick={() => window.open("mailto:shishfruitwala29@gmail.com")}
              className="h-10"
              src={email}
              alt=""
            />
            <img
              onClick={() =>
                window.open("https://in.linkedin.com/in/shish-frutwala")
              }
              className="h-10"
              src={linkedIn}
              alt=""
            />
            <img
              onClick={() =>
                window.open("https://www.reddit.com/user/c0nfu5ing-5pring/")
              }
              className="h-10"
              src={reddit}
              alt=""
            />
            <img
              onClick={() =>
                window.open("https://discord.com/users/1077969916793192589")
              }
              className="h-10"
              src={discord}
              alt=""
            />
            <img
              onClick={() =>
                window.open(
                  "https://open.spotify.com/user/31pigmldap7vo7kvfgbu3bmsempe?si=271da90e47f84a7d",
                )
              }
              className="h-10"
              src={spotify}
              alt=""
            />
            <img
              onClick={() => window.open("https://github.com/C0nfu5ing-5pring")}
              className="h-10"
              src={github}
              alt=""
            />
          </div>

          <div>
            <h1 className="font-black">Status</h1>
            <hr />
          </div>

          <div>
            <li>
              <h1>Available for collaboration</h1>
            </li>
            <li>
              <h1>Working on SaralRates</h1>
            </li>
            <li>
              <h1>Flavortown</h1>
            </li>
            <li>
              <h1>Studying for Annual Exam</h1>
            </li>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ContactCard;
