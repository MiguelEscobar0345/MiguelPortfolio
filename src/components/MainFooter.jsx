import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../context/useLanguage";
import { translations } from "../translations";

/* =========================
   MACAW ICON (LINE ART)
==========================*/
function MacawIcon({ className }) {

    return (
      <svg
        viewBox="0 0 12 512"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="28"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
      </svg>
    );
  }


export default function MainFooter() {
    const { language } = useLanguage();
    const t = translations[language];
  return (
    <footer className="bg-white text-black px-8 md:px-20 py-20 relative">

      <div className="max-w-7xl mx-auto space-y-20">

        <div className="border-t border-black/20 pt-12" />

        {/* GRID PRINCIPAL */}
        <div className="grid md:grid-cols-3 gap-16">

          {/* SITEMAP */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-black/50 mb-6">
              {t.fot1}
            </p>

            <ul className="space-y-4 text-2xl font-light">
              <li>
                <Link className="hover:opacity-60 transition" to="/">
                  {t.fot2}
                </Link>
              </li>
              <li>
                <Link className="hover:opacity-60 transition" to="/about">
                  {t.fot3}
                </Link>
              </li>
              <li>
                <Link className="hover:opacity-60 transition" to="/projects">
                  {t.fot4}
                </Link>
              </li>
              <li>
                <a
                  className="hover:opacity-60 transition"
                  href="mailto:miguelescobarp03@gmail.com"
                >
                  {t.fot5}
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block" />

          {/* SOCIALS */}
          <div className="md:text-right">
            <p className="text-xs uppercase tracking-[0.3em] text-black/50 mb-6">
              {t.sc}
            </p>

            <ul className="space-y-4 text-2xl font-light">
              <li>
                <a
                  href="https://www.linkedin.com/in/miguel-escobar-p"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-60 transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/MiguelEscobar0345/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-60 transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/escomiguep"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-60 transition"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:miguelescobarp03@gmail.com"
                  className="hover:opacity-60 transition"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BLOQUE INFERIOR */}
        <div className="flex flex-col md:flex-row justify-between items-end pt-20">

          <h2 className="text-6xl md:text-8xl font-serif leading-none tracking-tight">
            Miguel E.
            <br />
            Escobar P.
          </h2>

          {/* Version + Macaw */}
          <div className="flex items-center gap-6 mt-10 md:mt-0">

            <div className="text-right">
              <p className="text-xs text-black/50 uppercase tracking-widest">
                {t.vs}
              </p>
              <p className="text-2xl font-light">
                2026
              </p>
            </div>

            {/* El animal mas hermoso*/}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 4 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 4,
                ease: "easeInOut",
              }}
              className="w-10 h-14"
            >
              <img
                src="/macaw.png"
                alt="Favorite Macaw"
                className="w-30 h-15 opacity-80 hover:opacity-100 transition"
            />
            </motion.div>

          </div>
        </div>

      </div>
    </footer>
  );
}