import { useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import ProjectCard from "../components/ProjectCard";
import AcitivitesCard from "../components/AcitivitesCard";
import GalleryCard from "../components/GalleryCard";
import ContactCard from "../components/ContactCard";
import Skills from "../components/Skills";
import StatusCard from "../components/StatusCard";

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

  return (
    <>
      <div
        ref={containerRef}
        className="p-15 flex flex-col h-screen overflow-hidden justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center gap-10 md:gap-15 lg:gap-20">
          <h1 className="text-5xl md:text-6xl lg:text-8xl text-center font-black">
            Shish
          </h1>
          <p className="w-full md:w-[55%] lg:w-[65%] text-base md:text-xl leading-5 lg:leading-8 lg:text-2xl text-center">
            I am a <span className="triangle">{year - 2008}</span> year old from
            India, I like to make useful, brutalist and minimalist websites. I
            am currently in grade XI studying PCB and Computer Science. After
            school I spend most of my time learning more about web development
            and AI. I like understanding how things work under the hood. I am
            always curious about how things work around us. I think that
            journalism is a very cool thing. I like reading documents and data
            and researching and making inferences. I really want to researach on
            something <span className="triangle">(</span>I did but I want to do
            the same thing on a larger scale<span className="triangle">)</span>.
            I like brutalism in everything. Even in photographs. For
            entertainment, I rely mostly on DHH music and web-series. I don't
            like mainstream music. I DON'T LIKE ANYTHING WHICH IS MAINSTREAM.
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
      </div>
    </>
  );
};

export default Home;
