import { useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import ProjectCard from "../components/ProjectCard";
import AcitivitesCard from "../components/AcitivitesCard";
import GalleryCard from "../components/GalleryCard";
import ContactCard from "../components/ContactCard";
import BooksReadCard from "../components/BooksReadCard";

const Home = () => {
  const date = new Date();
  const year = date.getFullYear();
  const containerRef = useRef(null);
  const [projectCardVisible, setProjectCardVisible] = useState(true);
  const [activitiesCardVisible, setActivitiesCardVisible] = useState(true);
  const [galleryCardVisible, setGalleryCardVisible] = useState(true);
  const [contactCardVisible, setContactCardVisible] = useState(true);
  const [booksReadCardVisible, setBooksReadCardVisible] = useState(true);

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

  const onBooksReadCardClose = () => {
    setBooksReadCardVisible(false);
  };

  return (
    <>
      <div ref={containerRef} className="p-15 flex flex-col h-screen">
        <div className="flex flex-col justify-center items-center gap-20">
          <h1 className="text-8xl text-center font-black">Shish</h1>
          <p className="w-[65%] text-4xl text-right">
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
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {activitiesCardVisible && (
            <AcitivitesCard
              containerRef={containerRef}
              onClose={onActivitiesCardClose}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {galleryCardVisible && (
            <GalleryCard
              containerRef={containerRef}
              onClose={onGalleryCardClose}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {contactCardVisible && (
            <ContactCard
              containerRef={containerRef}
              onClose={onContactCardClose}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {booksReadCardVisible && (
            <BooksReadCard
              containerRef={containerRef}
              onClose={onBooksReadCardClose}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Home;
