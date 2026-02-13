import { motion } from "motion/react";

const Home = () => {
  return (
    <div>
      <motion.div
        animate={{
          x: 1000,
          y: 500,
          rotate: 350,
        }}
        transition={{
          duration: 3,
          delay: 2,
        }}
        className="h-[200px] bg-red-500 border-3 border-solid w-[200px]"
      ></motion.div>
      <motion.div
        animate={{
          x: 500,
          scale: 0.5,
        }}
        className="h-[200px] w-[200px] bg-blue-500 border-3 border-solid rounded-full"
      ></motion.div>
    </div>
  );
};

export default Home;
