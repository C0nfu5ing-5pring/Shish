import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProjectCard from "../components/ProjectCard";
import AcitivitesCard from "../components/AcitivitesCard";
import GalleryCard from "../components/GalleryCard";
import ContactCard from "../components/ContactCard";
import Skills from "../components/Skills";
import StatusCard from "../components/StatusCard";
import fileIcon from "../images/icons/fileIcon.png";
import appleLogo from "../images/icons/logo.png";
import trashIcon from "../images/icons/trashIcon.png";

const Home = () => {
  const containerRef = useRef(null);

  const [projectCardVisible, setProjectCardVisible] = useState(false);
  const [activitiesCardVisible, setActivitiesCardVisible] = useState(false);
  const [galleryCardVisible, setGalleryCardVisible] = useState(false);
  const [contactCardVisible, setContactCardVisible] = useState(false);
  const [skillsCardVisible, setSkillsCardVisible] = useState(false);
  const [statusCardVisible, setStatusCardVisible] = useState(false);
  const [activeWindow, setActiveWindow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const folders = [
    { name: "Projects", open: () => setProjectCardVisible(true) },
    { name: "Songs", open: () => setActivitiesCardVisible(true) },
    { name: "Polaroid Now", open: () => setGalleryCardVisible(true) },
    { name: "Contact", open: () => setContactCardVisible(true) },
    { name: "About Me", open: () => setSkillsCardVisible(true) },
    { name: "Status", open: () => setStatusCardVisible(true) },
  ];

  return (
    <>
      <div
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden bg-[#888888] text-black"
        style={{
          backgroundImage: `
              repeating-linear-gradient(
                45deg,
                #888888 0px,
                #888888 1px,
                #929292 1px,
                #929292 2px
              )
            `,
        }}
      >
        <ul
          role="menu-bar"
          className="absolute top-0 left-0 right-0 h-9  bg-white flex items-center px-4 md:px-7 gap-4 md:gap-6 select-none"
        >
          <li role="menu-item">
            <img
              src={appleLogo}
              className="w-6 md:w-6.5"
              alt="1994 Apple Logo"
            />
          </li>

          <div className="ml-auto flex items-center gap-3 md:gap-5">
            <span>
              {new Date().toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
              })}
            </span>
          </div>
        </ul>

        <div
          className="window absolute z-10 flex flex-col"
          style={{
            left: "4%",
            top: "12%",
            width: "min(625px, 90vw)",
            height: "min(405px, 65vh)",
            maxWidth: "none",
          }}
        >
          <div className="title-bar shrink-0">
            <button className="close" aria-label="Close" disabled />
            <h1 className="title">Shish</h1>
            <button className="resize" aria-label="Resize" disabled />
          </div>

          <div className="details-bar shrink-0 flex justify-between">
            <span>6 items</span>
          </div>

          <div className="window-pane flex-1 min-h-0 overflow-auto p-4">
            <div className="grid grid-cols-3 gap-5 md:gap-8">
              {folders.map((folder) => (
                <button
                  key={folder.name}
                  onClick={folder.open}
                  className="flex flex-col items-center justify-center gap-1 group"
                >
                  <img
                    src={fileIcon}
                    alt="File Icon"
                    draggable="false"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain transition-transform duration-200 group-hover:scale-110"
                  />

                  <span className="text-xs font-bold text-center group-hover:underline">
                    {folder.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="details-bar shrink-0">
            <span>Ready</span>
          </div>
        </div>

        <div className="absolute bottom-5 right-8 flex flex-col items-center z-[1]">
          <img
            src={trashIcon}
            className="w-10 h-10 lg:w-14 lg:h-14 object-contain"
          />
          <span className="text-xs font-bold inactive-title-bar bg-white px-1">
            Trash
          </span>
        </div>

        <AnimatePresence>
          {projectCardVisible && (
            <ProjectCard
              containerRef={containerRef}
              onClose={() => setProjectCardVisible(false)}
              setActiveWindow={setActiveWindow}
              activeWindow={activeWindow}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {activitiesCardVisible && (
            <AcitivitesCard
              containerRef={containerRef}
              onClose={() => setActivitiesCardVisible(false)}
              setActiveWindow={setActiveWindow}
              activeWindow={activeWindow}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {galleryCardVisible && (
            <GalleryCard
              containerRef={containerRef}
              onClose={() => setGalleryCardVisible(false)}
              setActiveWindow={setActiveWindow}
              activeWindow={activeWindow}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {contactCardVisible && (
            <ContactCard
              containerRef={containerRef}
              onClose={() => setContactCardVisible(false)}
              setActiveWindow={setActiveWindow}
              activeWindow={activeWindow}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {skillsCardVisible && (
            <Skills
              containerRef={containerRef}
              onClose={() => setSkillsCardVisible(false)}
              setActiveWindow={setActiveWindow}
              activeWindow={activeWindow}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {statusCardVisible && (
            <StatusCard
              containerRef={containerRef}
              onClose={() => setStatusCardVisible(false)}
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
