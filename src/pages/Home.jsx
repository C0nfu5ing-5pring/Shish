import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProjectCard from "../components/ProjectCard";
import AcitivitesCard from "../components/AcitivitesCard";
import GalleryCard from "../components/GalleryCard";
import ContactCard from "../components/ContactCard";
import Skills from "../components/Skills";
import StatusCard from "../components/StatusCard";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Toolbar from "../components/Toolbar";

const Home = () => {
  const date = new Date();
  const year = date.getFullYear();
  const containerRef = useRef(null);
  const [projectCardVisible, setProjectCardVisible] = useState(true);
  const [activitiesCardVisible, setActivitiesCardVisible] = useState(true);
  const [galleryCardVisible, setGalleryCardVisible] = useState(true);
  const [contactCardVisible, setContactCardVisible] = useState(true);
  const [skillsCardVisible, setSkillsCardVisible] = useState(true);
  const [statusCardVisible, setStatusCardVisible] = useState(true);
  const [activeWindow, setActiveWindow] = useState(null);

  const onProjectCardClose = () => {
    setProjectCardVisible(false);
  };

  const onActivitiesCardClose = () => {
    setActivitiesCardVisible(false);
  };

  const onGalleryCardClose = () => {
    setGalleryCardVisible(false);
  };

  const onContactCardClose = () => {
    setContactCardVisible(false);
  };

  const onSkilslCardClose = () => {
    setSkillsCardVisible(false);
  };

  const onStatuslCardClose = () => {
    setStatusCardVisible(false);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <>
            <RoughNotationGroup show={true}>
              <div className="flex flex-col h-screen gap-1 font-black text-[var(--text)] bg-[var(--bg)] justify-center items-center">
                <RoughNotation
                  type="circle"
                  color="currentColor"
                  className="text-[var(--text)]"
                  strokeWidth={2}
                  padding={13}
                >
                  <div className="flex text-4xl md:text-5xl lg:text-6xl">
                    {["S", "h", "i", "s", "h"].map((letter, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>
                </RoughNotation>

                <RoughNotation
                  type="underline"
                  color="currentColor"
                  className="text-[var(--text)]"
                >
                  <div className="flex text-base mg:text-xl lg:text-2xl">
                    {["L", "o", "a", "d", "i", "n", "g"].map((letter, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>
                </RoughNotation>
              </div>
            </RoughNotationGroup>
          </>
        )}
      </AnimatePresence>

      {!loading && (
        <div
          ref={containerRef}
          className="p-15 flex flex-col h-screen justify-center items-center relative overflow-hidden bg-[var(--bg)] text-[var(--text)] "
        >
          <div className="flex flex-col justify-center items-center gap-10 md:gap-15 lg:gap-20">
            <h1 className="text-5xl md:text-6xl lg:text-8xl text-center font-black">
              Shish
            </h1>
            <p className="w-full md:w-[55%] lg:w-[65%] text-base md:text-xl leading-5 lg:leading-8 lg:text-2xl text-center">
              I am a <span className="triangle">{year - 2008}</span> year young
              from India, I like to make useful, brutalist and minimalist
              websites, games and CAD designs (household items). I am currently
              in grade XII studying PCB and Computer Science. Apart from coding,
              I am an audiophile, and like to workout whenever I get time. I
              like brutalism in everything. Even in photographs. For
              entertainment, I rely mostly on DHH music.
            </p>
          </div>
          <AnimatePresence>
            {projectCardVisible && (
              <ProjectCard
                containerRef={containerRef}
                onClose={onProjectCardClose}
                setActiveWindow={setActiveWindow}
                activeWindow={activeWindow}
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {activitiesCardVisible && (
              <AcitivitesCard
                containerRef={containerRef}
                onClose={onActivitiesCardClose}
                setActiveWindow={setActiveWindow}
                activeWindow={activeWindow}
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {galleryCardVisible && (
              <GalleryCard
                containerRef={containerRef}
                onClose={onGalleryCardClose}
                setActiveWindow={setActiveWindow}
                activeWindow={activeWindow}
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {contactCardVisible && (
              <ContactCard
                containerRef={containerRef}
                onClose={onContactCardClose}
                setActiveWindow={setActiveWindow}
                activeWindow={activeWindow}
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {skillsCardVisible && (
              <Skills
                containerRef={containerRef}
                onClose={onSkilslCardClose}
                setActiveWindow={setActiveWindow}
                activeWindow={activeWindow}
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {statusCardVisible && (
              <StatusCard
                containerRef={containerRef}
                onClose={onStatuslCardClose}
                setActiveWindow={setActiveWindow}
                activeWindow={activeWindow}
              />
            )}
          </AnimatePresence>
          <Toolbar
            openProject={() => setProjectCardVisible(true)}
            openSkills={() => setSkillsCardVisible(true)}
            openStatus={() => setStatusCardVisible(true)}
            openContact={() => setContactCardVisible(true)}
            openGallery={() => setGalleryCardVisible(true)}
            openActivities={() => setActivitiesCardVisible(true)}
          />
        </div>
      )}
    </>
  );
};

export default Home;
