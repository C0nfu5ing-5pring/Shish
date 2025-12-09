import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Scribbles from "./Scribbles";
import { useThemeColor } from "./ThemeColorContext";

const phrases = [
  { hello: "HELLO!", name: "I am Shish" },
  { hello: "NAMASTE", name: "मैं शिश हूँ" },
  { hello: "HOLA!", name: "Soy Shish" },
  { hello: "مرحباً", name: "أنا شيش" },
];

export default function Hero() {
  const themeColor = useThemeColor();
  const [index, setIndex] = useState(
    Math.floor(Math.random() * phrases.length)
  );

  const textRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIndex((prev) => {
            let next;
            do {
              next = Math.floor(Math.random() * phrases.length);
            } while (next === prev);
            return next;
          });
        },
      });

      tl.to(textRefs.current, {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "power2.inOut",
        stagger: 0.1,
      });

      tl.fromTo(
        textRefs.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
        }
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-screen overflow-hidden flex flex-col justify-center"
      style={{ "--theme": themeColor }}
    >
      <Scribbles themeColor={themeColor} count={5} />

      <div className="relative z-10">
        <h5
          ref={(el) => (textRefs.current[0] = el)}
          className="displayFont font-semibold text-center leading-none 
                     text-[clamp(5rem,10vw,12rem)] text-balance"
          style={{ color: themeColor }}
        >
          {phrases[index].hello}
        </h5>

        <h5
          ref={(el) => (textRefs.current[1] = el)}
          className="displayFont font-semibold text-center leading-none 
                     text-[clamp(5rem,10vw,12rem)] text-balance"
          style={{ color: themeColor }}
        >
          {phrases[index].name}
        </h5>
      </div>
    </section>
  );
}
