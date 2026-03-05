import { useEffect } from "react";
import { useLanguage } from "../context/useLanguage";
import { translations } from "../translations";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export default function MenuOverlay({ isOpen, onClose }) {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const menuItems = [
    { label: t.menuHome, type: "route", value: "/" },
    { label: t.menuProjects, type: "route", value: "/projects" },
    { label: t.menuAbout, type: "route", value: "/about" },
    { label: t.menuContact, type: "mailto", value: "mailto:miguelescobarp03@gmail.com" },
  ];

  const handleClick = (item) => {
    if (item.type === "route") {
      navigate(item.value);
    } else if (item.type === "mailto") {
      window.location.href = item.value;
    }

    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-700 ease-[cubic-bezier(.83,0,.17,1)]
      ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <div className="absolute inset-0 bg-zinc-950/95 backdrop-blur-xl" />

      <button
        onClick={toggleLanguage}
        className="absolute top-8 right-20 z-50 group"
      >
        <div className="relative px-5 py-2 rounded-full border border-zinc-700 text-xs tracking-widest text-zinc-400 transition-all duration-300 group-hover:text-white group-hover:border-white overflow-hidden group-hover:scale-105 active:scale-95">
          <span className="relative z-10">
            {language === "en" ? "ES" : "EN"}
          </span>
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md" />
        </div>
      </button>

      <div
        className={`relative h-full flex flex-col justify-between
        transition-all duration-700 ease-[cubic-bezier(.83,0,.17,1)]
        ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <div className="flex-1 flex flex-col justify-center items-start px-20">

          {menuItems.map((item, i) => (
            <div
              key={i}
              className="text-6xl md:text-8xl font-light tracking-tight mb-8
              transition-all duration-500 hover:translate-x-4 hover:opacity-70 cursor-pointer"
              style={{ transitionDelay: `${i * 120}ms` }}
              onClick={() => handleClick(item)}
            >
              {item.label}
            </div>
          ))}
        </div>

        <div className="px-20 pb-10">
          <Footer />
        </div>
      </div>

      <motion.button
        onClick={onClose}
        className="absolute top-8 right-8 z-50"
        whileHover={{ rotate: 95 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <span className="text-2xl text-zinc-400 hover:text-white transition-colors">
          ✕
        </span>
      </motion.button>
    </div>
  );
}