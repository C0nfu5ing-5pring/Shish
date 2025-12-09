import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useThemeColor } from "./ThemeColorContext";

const CertificatePage = ({ title, subtitle, date, description, image }) => {
  const navigate = useNavigate();
  const themeColor = useThemeColor();

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-white text-black"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-2xl w-full bg-white border border-black rounded-2xl shadow-lg p-8 text-center">
        <h1
          className="text-3xl font-extrabold mb-2"
          style={{ color: themeColor }}
        >
          {title}
        </h1>

        <h2 className="text-lg text-gray-600 mb-1">{subtitle}</h2>
        <p className="text-sm text-gray-500 mb-6">{date}</p>

        <p className="text-gray-700 leading-relaxed mb-8">{description}</p>

        {image && (
          <div className="overflow-hidden rounded-xl mb-6">
            <motion.img
              src={image}
              alt={title}
              className="w-full border border-black shadow-md"
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
            />
          </div>
        )}

        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center gap-2 mx-auto px-6 py-2 rounded-full 
                     text-white border border-black transition-opacity hover:opacity-90"
          style={{ backgroundColor: themeColor }}
        >
          <ArrowLeft size={18} />
          Back to Achievements
        </button>
      </div>
    </motion.div>
  );
};

export default CertificatePage;
