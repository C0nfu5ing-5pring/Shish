import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RoughCircleHeading from "../components/RoughCircleHeading";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          opacity: 0,
          y: -40,
          duration: 0.8,
          ease: "power3.out",
        });
      }

      if (formRef.current) {
        gsap.from(formRef.current, {
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
          },
          opacity: 0,
          scale: 0.9,
          duration: 1,
          ease: "power2.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-[90vh] flex flex-col items-center justify-center m-4 px-6 bg-white text-center gap-6"
    >
      <div ref={headingRef}>
        <RoughCircleHeading>Let's Connect</RoughCircleHeading>
      </div>

      <p className="max-w-md text-base md:text-2xl lg:text-3xl opacity-90 pt-10 ">
        Have an idea, feedback, or just wanna say hi? My inbox is always open.
      </p>

      <div className="flex flex-wrap gap-6 mt-4">
        <a
          href="mailto:shishfruitwala29@gmail.com"
          className="relative text-lg md:text-2xl lg:text-3xl font-medium group"
        >
          <span className="relative  z-10">Email Me</span>
          <span
            className="absolute left-0 -bottom-1 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
            style={{ backgroundColor: "currentColor" }}
          />
        </a>

        <a
          href="https://github.com/c0nfu5ing-5pring"
          target="_blank"
          className="relative text-lg md:text-2xl lg:text-3xl font-medium group"
          rel="noreferrer"
        >
          <span className="relative z-10">GitHub</span>
          <span
            className="absolute left-0 -bottom-1 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
            style={{ backgroundColor: "currentColor" }}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/shish-frutwala"
          target="_blank"
          className="relative text-lg md:text-2xl lg:text-3xl font-medium group"
          rel="noreferrer"
        >
          <span className="relative z-10">LinkedIn</span>
          <span
            className="absolute left-0 -bottom-1 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
            style={{ backgroundColor: "currentColor" }}
          />
        </a>
      </div>
    </section>
  );
};

export default Contact;
