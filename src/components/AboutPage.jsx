import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { translations } from "../translations";
import { useLanguage } from "../context/useLanguage";
import MenuOverlay from "./MenuOverlay";
import  MainFooter  from "./MainFooter";

export default function AboutPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* =========================
     ANIMATIONS
  ==========================*/

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const maskReveal = {
    hidden: { y: "100%" },
    show: {
      y: "0%",
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (

    
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-6 md:px-12 overflow-x-hidden">

      {/* ================= BACK BUTTON ================= */}
      <Link
        to="/"
        className="fixed top-8 left-8 group z-50"
      >
        <span className="relative text-sm tracking-[0.3em] text-zinc-400 transition-colors duration-300 group-hover:text-white">
          ME
        </span>
        <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
      </Link>

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

      <div className="max-w-6xl mx-auto pt-40 pb-32 space-y-44">

        {/* ================= HERO ================= */}
        <section className="space-y-12">

          <div className="overflow-hidden">
            <motion.h1
              variants={maskReveal}
              initial="hidden"
              animate="show"
              className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              {t.ab1}
            </motion.h1>
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-zinc-400 text-xl max-w-2xl"
          >
            {t.ab2}
          </motion.p>

        </section>

        {/* ================= ABOUT + PHOTO ================= */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-24 items-center"
        >
          <div className="space-y-8 text-zinc-300 leading-relaxed text-lg">
            <p>
              {t.ab3}
            </p>

            <p>
              {t.ab4}
            </p>

            <p>
              {t.ab5}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden border border-zinc-800 group"
          >
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              alt="It's meee!"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-700" />
          </motion.div>
        </motion.section>

        {/* ================= EXPERIENCE ================= */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-20 relative"
        >
          <h2 className="text-4xl font-semibold tracking-tight">
            {t.ab6}
          </h2>

          {/* Animated vertical line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="absolute left-0 top-20 w-[1px] bg-zinc-800"
          />

          <div className="space-y-16 pl-10">

            <div className="group">
              <p className="text-sm text-zinc-500 tracking-wide">
                {t.ab7} 2024 — {t.ab8} 2025
              </p>
              <a
               href="https://www.globant.com/"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block"
              >
                <h3 className="inline-block border-b text-2xl border-transparent hover:border-white transition duration-300">
                  Globant
                </h3>
              </a>
              <p className="text-zinc-400 mt-4 max-w-2xl">
                {t.ab9}
                <br /> 
                <br />
                {t.ab92}
                <br />
                <br />
                {t.ab93}
              </p>
            </div>

            <div className="group">
              <p className="text-sm text-zinc-500 tracking-wide">
                {t.ab10} 2025 — {t.ab11}
              </p>
              <a
               href="https://trestrigos.com/"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block"
              >
                <h3 className="inline-block text-2xl border-b border-transparent hover:border-white transition duration-300">
                  Tres Trigos
                </h3>
              </a>
              <p className="text-zinc-400 mt-4 max-w-2xl">
                {t.ab12}
                <br />
                <br />
                {t.ab121}
                <br />
                <br />
                {t.ab122}
              </p>
            </div>

          </div>
        </motion.section>

        {/* ================= SKILLS ================= */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-24"
        >
          <h2 className="text-4xl font-semibold tracking-tight">
            {t.ab13}
          </h2>

          <div className="grid md:grid-cols-4 gap-20 text-zinc-400 text-lg">

            {[
              {
                title: "Frontend",
                items: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Framer Motion", "HTML / CSS"]
              },
              {
                title: "Backend",
                items: ["Node.js", "Express", "REST APIs", "Authentication", "Server logic"]
              },
              {
                title: "Databases",
                items: ["PostgreSQL", "SQL", "Schema design"]
              },
              {
                title: "Workflow",
                items: ["Git & GitHub", "Agile", "Component architecture", "Performance optimization", "Code reviews", "Figma", "AI Integration"]
              }
            ].map((category) => (
              <div key={category.title} className="group">
                <h3 className="text-white mb-6 font-medium text-xl relative inline-block">
                  {category.title}
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="transition duration-300 group-hover:text-zinc-200">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </motion.section>

        {/* ================= CLOSING ================= */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="pt-32 space-y-10"
        >
          <h2 className="text-4xl font-semibold leading-tight max-w-3xl">
            {t.abfinal}
            <br />
            {t.abfinal1}
          </h2>

          <p className="text-zinc-400 max-w-2xl text-lg">
            {t.abfinal2}
          </p>

          {/* CONTACT BUTTON PREMIUM */}
          <a
            href="mailto:miguelescobarp03@gmail.com"
            className="inline-block mt-8 group relative"
          >
            <span className="relative px-8 py-4 border border-zinc-700 rounded-full text-sm tracking-widest text-zinc-300 transition-all duration-500 group-hover:border-white group-hover:text-white">
              {t.abdesp}
            </span>

            <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition duration-500 blur-xl" />
          </a>

        </motion.section>

      </div>
      <MainFooter />
    </div>
  );
}