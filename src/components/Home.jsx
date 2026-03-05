//import { useEffect } from "react";
import { useState, useRef } from "react";
import ProjectsSlider from "./ProjectsSlider";
import MenuOverlay from "./MenuOverlay";
import CoreValues from "./CoreValues";
import MainFooter from "./MainFooter";
import { useLanguage } from "../context/useLanguage";
import { translations } from "../translations";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";
import CapabilitiesSection from "./CapabilitiesSection";
import { Link } from "react-router-dom";



function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <main className="relative bg-zinc-950 text-zinc-100">
      
      {/* Glow radial */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(78,108,80,0.15),transparent_70%)]"></div> 

      <button
        onClick={() => setMenuOpen(true)}
        className="fixed top-8 right-8 z-40 text-white text-2xl"
      >
          ☰
      </button>
      <button
        onClick={toggleLanguage}
        className="fixed top-8 right-20 z-40 group"
      >
        <div className="relative px-5 py-2 rounded-full border border-zinc-700 text-xs tracking-widest text-zinc-400 transition-all duration-300 group-hover:text-white group-hover:border-white overflow-hidden group-hover:scale-105 active:scale-95">
      <span className="relative z-10">
        {language === "en" ? "ES" : "EN"}
      </span>
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md" />
        </div>
      </button>

<MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* HERO */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
        className="w-full max-w-6xl mx-auto px-6 py-20 min-h-[70vh] flex items-center"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center w-full">
        <Link
          to="/"
          className="fixed top-8 left-8 group z-50"
        >
          <span className="relative text-sm tracking-[0.3em] text-zinc-400 transition-colors duration-300 group-hover:text-white">
            ME
          </span>
          <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
        </Link>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight fade-up">
              {t.heroTitle}
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-brand-primary fade-up fade-up-delay-1">
              {t.heroSubtitle}
            </h2>

            <p className="text-zinc-400 max-w-xl text-lg leading-relaxed fade-up fade-up-delay-2">
              {t.heroText}
            </p>
            
            <div className="flex gap-4 pt-4 flex-wrap fade-up fade-up-delay-3">

            <Link to="/projects">
              <MagneticButton
                className="bg-brand-primary hover:bg-brand-dark transition-colors duration-300 px-6 py-3 rounded-md font-medium"
              >
                {t.projects}
              </MagneticButton>
            </Link>

            <a href="mailto:miguelescobarp03@gmail.com">
              <MagneticButton
                className="bg-brand-primary hover:bg-brand-dark transition-colors duration-300 px-6 py-3 rounded-md font-medium"
              >
                {t.contact}
              </MagneticButton>
            </a>

            <Link to="/about">
              <MagneticButton
                className="bg-brand-primary hover:bg-brand-dark transition-colors duration-300 px-6 py-3 rounded-md font-medium"
              >
                {t.menuAbout}
              </MagneticButton>
            </Link>

            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl fade-up fade-up-delay-4">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                alt="It's me!"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
          </div>
        </div>

      </motion.section>
      <CoreValues />
      <CapabilitiesSection />
      <ProjectsSlider />
      <MainFooter />
    </main>
  );
}

export default Home;
