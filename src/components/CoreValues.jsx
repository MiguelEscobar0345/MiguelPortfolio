import { useState, useRef } from "react";
import { useLanguage } from "../context/useLanguage";
import { translations } from "../translations";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

function Scramble({ text }) {
  const [display, setDisplay] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const handleHover = () => {
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      iteration += 0.5;

      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplay(text);
      }
    }, 35);
  };

  return (
    <h2
      onMouseEnter={handleHover}
      className="text-6xl md:text-7xl font-bold tracking-tight text-center"
    >
      {display}
    </h2>
  );
}

export default function CoreValues() {
  const { language } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "start 30%"]
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const blurValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(10px)", "blur(0px)"]
  );
  const t = translations[language];
  return (
    <motion.section ref={ref} style={{ opacity, y, filter: blurValue }}className="w-full flex justify-center py-20 md:py-28">
      <div className="max-w-4xl w-full flex flex-col items-center gap-14 text-center px-6">

        <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
          {t.pillars}
        </p>

        <Scramble text={t.pillar1} />
        <Scramble text={t.pillar2} />
        <Scramble text={t.pillar3} />

      </div>
    </motion.section>
  );
}