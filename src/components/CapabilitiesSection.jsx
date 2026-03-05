import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { useRef, useEffect } from "react";
import { useLanguage } from "../context/useLanguage";
import { translations } from "../translations";
import {
  siReact,
  siNextdotjs,
  siTailwindcss,
  siFramer,
  siJavascript,
  siVite,
} from "simple-icons";
import { Link } from "react-router-dom";

const MotionSVG = motion("svg");

function TechIcon({ icon, className, float = 8, duration = 8 }) {
  return (
    <MotionSVG
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      animate={{ y: [0, -float, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d={icon.path} />
    </MotionSVG>
  );
}

export default function CapabilitiesSection() {
  const sectionRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* Mouse parallax */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX - innerWidth / 2) / innerWidth);
      mouseY.set((e.clientY - innerHeight / 2) / innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const logoLayer1X = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);
  const logoLayer1Y = useTransform(mouseY, [-0.5, 0.5], [-20, 20]);
  const logoLayer2X = useTransform(mouseX, [-0.5, 0.5], [-40, 40]);
  const logoLayer2Y = useTransform(mouseY, [-0.5, 0.5], [-40, 40]);
  const lightX = useTransform(mouseX, [-0.5, 0.5], [-120, 120]);
  const lightY = useTransform(mouseY, [-0.5, 0.5], [-120, 120]);

  /* Background */
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.25, 0.1]);

  /* Slides — blur reducido a 4px máximo */
  const slide1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const slide1Blur    = useTransform(scrollYProgress, [0, 0.15, 0.25], [0, 0, 4]);
  const slide1Scale   = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0.97]);

  const slide2Opacity = useTransform(scrollYProgress, [0.2, 0.28, 0.45, 0.55], [0, 1, 1, 0]);
  const slide2Blur    = useTransform(scrollYProgress, [0.2, 0.28, 0.45, 0.55], [4, 0, 0, 4]);
  const slide2Scale   = useTransform(scrollYProgress, [0.2, 0.28, 0.55], [0.97, 1, 0.97]);

  const slide3Opacity = useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.8], [0, 1, 1, 0]);
  const slide3Blur    = useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.8], [4, 0, 0, 4]);
  const slide3Scale   = useTransform(scrollYProgress, [0.45, 0.55, 0.8], [0.97, 1, 0.97]);

  const slide4Opacity = useTransform(scrollYProgress, [0.75, 0.88, 1], [0, 1, 1]);
  const slide4Blur    = useTransform(scrollYProgress, [0.75, 0.88], [4, 0]);
  const slide4Scale   = useTransform(scrollYProgress, [0.75, 0.88], [0.97, 1]);

  /* Logo opacity per slide */
  const logoOp2 = useTransform(scrollYProgress, [0.15, 0.28, 0.45, 0.55], [0, 0.18, 0.18, 0]);
  const logoOp3 = useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.8], [0, 0.18, 0.18, 0]);

  /* Progress bar width */
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const slides = [
    { key: 1, opacity: slide1Opacity, blur: slide1Blur, scale: slide1Scale, title: t.capabilities1, text: t.capabilities2 },
    { key: 2, opacity: slide2Opacity, blur: slide2Blur, scale: slide2Scale, title: t.capabilities3, text: t.capabilities4 },
    { key: 3, opacity: slide3Opacity, blur: slide3Blur, scale: slide3Scale, title: t.capabilities5, text: t.capabilities6 },
    { key: 4, opacity: slide4Opacity, blur: slide4Blur, scale: slide4Scale, title: t.capabilities7, text: t.capabilities8, isLast: true },
  ]

  return (
    <section ref={sectionRef} className="relative" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center bg-zinc-950 overflow-hidden">

        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black -z-30" />

        {/* Light follow */}
        <motion.div
          style={{ x: lightX, y: lightY }}
          className="absolute w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
        />

        {/* Glow */}
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-3xl"
        />

        {/* Tech icons layer 1 */}
        <motion.div
          style={{ x: logoLayer1X, y: logoLayer1Y, opacity: logoOp2 }}
          className="absolute inset-0 pointer-events-none"
        >
          <TechIcon icon={siReact}      className="absolute top-1/4  left-1/4  w-16 h-16 text-cyan-400" />
          <TechIcon icon={siNextdotjs}  className="absolute bottom-1/3 right-1/4 w-14 h-14 text-white" />
          <TechIcon icon={siJavascript} className="absolute top-1/3  right-1/4 w-12 h-12 text-yellow-400" />
        </motion.div>

        {/* Tech icons layer 2 */}
        <motion.div
          style={{ x: logoLayer2X, y: logoLayer2Y, opacity: logoOp3 }}
          className="absolute inset-0 pointer-events-none"
        >
          <TechIcon icon={siTailwindcss} className="absolute top-1/3  right-1/3 w-20 h-20 text-sky-400" />
          <TechIcon icon={siFramer}      className="absolute bottom-1/4 left-1/3 w-16 h-16 text-white" />
          <TechIcon icon={siVite}        className="absolute top-1/4  right-1/4 w-14 h-14 text-purple-400" />
        </motion.div>

        {/* ── Progress bar lateral ── */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />
        {slides.map((s) => (
          <motion.div
            key={s.key}
            style={{ opacity: s.opacity }}
            className="w-1.5 h-1.5 rounded-full bg-white"
          />
        ))}
        </div>

        {/* ── Slide counter ── */}
        <div className="absolute bottom-8 right-8 z-10">
          {slides.map((s) => (
            <motion.span
              key={s.key}
              style={{ opacity: s.opacity }}
              className="absolute text-xs font-mono text-zinc-600 tracking-widest"
            >
              0{s.key} / 04
            </motion.span>
          ))}
        </div>

        {/* ── Scroll progress bar (bottom) ── */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5 z-10">
          <motion.div
            style={{ width: progressWidth }}
            className="h-full bg-emerald-500/60"
          />
        </div>

        {/* ── Slides ── */}
        {slides.map((s) => (
          <Slide
            key={s.key}
            opacity={s.opacity}
            blur={s.blur}
            scale={s.scale}
            title={s.title}
            text={s.text}
            isLast={s.isLast}
          />
        ))}
      </div>
    </section>
  );
}

function Slide({ opacity, blur, scale, title, text, isLast }) {
  const { language } = useLanguage();
  const t = translations[language];

  const blurFilter = useTransform(blur, (b) => `blur(${b}px)`);

  return (
    <motion.div
      style={{ opacity, scale, filter: blurFilter }}
      className="absolute w-full max-w-5xl px-6 md:px-12"
    >
      <div className="max-w-2xl">

        {/* Decorative line */}
        <motion.div
          style={{ opacity }}
          className="w-8 h-px bg-emerald-500 mb-6"
        />

        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
          {title}
        </h2>

        <p className="text-zinc-300 mt-6 text-lg leading-relaxed">
          {text}
        </p>

        {isLast && (
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/about"
              className="px-6 py-3 bg-brand-primary hover:bg-brand-dark transition-colors duration-300 rounded-md font-medium"
            >
              {t.pfp}
            </Link>
            <a
              href="/CV_Miguel_Escobar.docx"
              download
              className="px-6 py-3 border bg-brand-primary hover:bg-brand-dark transition-colors duration-300 rounded-md font-medium"
            >
              {t.ddcv}
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}