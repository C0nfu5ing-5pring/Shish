import AcademicsTimeline from "../components/AcademicsTimeline";
import AchievementsTimeline from "../components/AchievementsTimeline";
import TextChange from "../components/TextChange";
import Contact from "../pages/Contact";
import SkillsInterest from "../components/SkillsInterest";

const About = () => {
  return (
    <>
      <div>
        <TextChange />
        <SkillsInterest />
        <AcademicsTimeline />
        <AchievementsTimeline />
        <Contact />
      </div>
    </>
  );
};

export default About;
