import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectSection from "./ProjectSection";
import { useLanguage } from "../context/useLanguage";
import MeDexHome from "../assets/MeDexHome.png";
import MeDexPokeCard from "../assets/MeDexPokeCard.png";
import AtmoCity from "../assets/AtmoCity.png";
import PulseMarket from "../assets/PulseMarket.png";


export default function ProjectsSlider() {
  const [index, setIndex] = useState(0);
  const { language } = useLanguage();

  const projects = [
    {
      title: "MeDex",
      tech: "React · Vite · PokéAPI · Vercel",
      url: "https://medex-pokedex.vercel.app",
      label: { en: "Pokédex App", es: "App Pokédex" },
      images: [
        MeDexHome,
        MeDexPokeCard,
      ],
    },
    {
      title: "Atmos",
      tech: "React · Vite · Open-Meteo · Vercel",
      url: "https://me-atmos.vercel.app",
      label: { en: "Weather & Air Quality", es: "Clima y Calidad del Aire" },
      images: [
         AtmoCity,
        "https://images.unsplash.com/photo-1530908295418-a12e326966ba?w=1600&q=80",
      ],
    },
    {
      title: "Pulse",
      tech: "React · Vite · CoinGecko API · Vercel Functions",
      url: "https://me-pulse.vercel.app",
      label: { en: "Crypto Dashboard", es: "Dashboard Cripto" },
      images: [
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=80",
          PulseMarket,
        "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=1600&q=80",
      ],
    },
  ];

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  const current = projects[index];

  return (
    <section className="relative h-screen overflow-hidden">

      {/* Slides track */}
      <div
        className="flex h-full transition-transform duration-1000 ease-[cubic-bezier(.83,0,.17,1)]"
        style={{ transform: `translateX(-${index * 100}vw)` }}
      >
        {projects.map((project, i) => (
          <div key={i} className="w-screen h-screen flex-shrink-0">
            <ProjectSection {...project} isActive={i === index} />
          </div>
        ))}
      </div>

      {/* Left arrow */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white text-3xl opacity-50 hover:opacity-100 transition-opacity duration-200"
      >
        ←
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 text-white text-3xl opacity-50 hover:opacity-100 transition-opacity duration-200"
      >
        →
      </button>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between px-8 pb-8">

        {/* Counter + dots */}
        <div className="flex flex-col gap-3">
          <div className="text-xs tracking-widest text-zinc-500 font-mono">
            {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </div>
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="transition-all duration-300"
                style={{
                  width: i === index ? 24 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: i === index ? "#fff" : "rgba(255,255,255,0.25)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Right: label + buttons */}
        <div className="flex flex-col items-end gap-3">
          <span className="text-xs tracking-widest uppercase text-zinc-400">
            {current.label[language]}
          </span>
          <div className="flex gap-3">
            {/* Live demo */}
            <a
              href={current.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border border-white/20 text-zinc-300 hover:border-white/50 hover:text-white transition-all duration-200 backdrop-blur-sm"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              {language === "en" ? "Live Demo" : "Ver Live"}
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>

            {/* Go to Projects page */}
            <Link
              to="/projects"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200"
              style={{ background: "#fff", color: "#000" }}
            >
              {language === "en" ? "All Projects" : "Ver Proyectos"}
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}