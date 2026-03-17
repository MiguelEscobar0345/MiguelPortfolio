import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/useLanguage";
import MainFooter from "./MainFooter";
import MenuOverlay from "./MenuOverlay";
import { Link } from "react-router-dom";
import { translations } from "../translations";

const PROJECTS = [
  {
    number: "01",
    name: "MeDex",
    accent: "#0071e3",
    accentMuted: "rgba(0,113,227,0.08)",
    url: "https://medex-pokedex.vercel.app",
    github: "https://github.com/MiguelEscobar0345/Medex-Pokedex-.git",
    tech: ["React 18", "Vite 6", "PokéAPI", "Vercel"],
    tagKey: "p1_tag",
    descKey: "p1_desc",
    highlightKey: "p1_highlight",
    howKey: "p1_how",
    challenges: ["p1_ch1", "p1_ch2", "p1_ch3"],
    specs: ["p1_spec1", "p1_spec2", "p1_spec3", "p1_spec4", "p1_spec5", "p1_spec6"],
  },
  {
    number: "02",
    name: "Atmos",
    accent: "#60a5fa",
    accentMuted: "rgba(96,165,250,0.08)",
    url: "https://me-atmos.vercel.app",
    github: "https://github.com/MiguelEscobar0345/MeAtmos.git",
    tech: ["React 18", "Vite 6", "Open-Meteo", "Vercel"],
    tagKey: "p2_tag",
    descKey: "p2_desc",
    highlightKey: "p2_highlight",
    howKey: "p2_how",
    challenges: ["p2_ch1", "p2_ch2", "p2_ch3"],
    specs: ["p2_spec1", "p2_spec2", "p2_spec3", "p2_spec4", "p2_spec5", "p2_spec6"],
  },
  {
    number: "03",
    name: "Pulse",
    accent: "#00d26a",
    accentMuted: "rgba(0,210,106,0.08)",
    url: "https://me-pulse.vercel.app",
    github: "https://github.com/MiguelEscobar0345/MePulse.git",
    tech: ["React 18", "Vite 6", "CoinGecko API", "Vercel Functions"],
    tagKey: "p3_tag",
    descKey: "p3_desc",
    highlightKey: "p3_highlight",
    howKey: "p3_how",
    challenges: ["p3_ch1", "p3_ch2", "p3_ch3"],
    specs: ["p3_spec1", "p3_spec2", "p3_spec3", "p3_spec4", "p3_spec5", "p3_spec6"],
  },
  {
    number: "04",
    name: "Coming Soon...",
    accent: "#fffff",
    accentMuted: "#fffff",
    url: "https://github.com/MiguelEscobar0345/",
    github: "https://github.com/MiguelEscobar0345/",
    tech: ["Who knows?", "Stay tuned!", "👀"],
    tagKey: "p4_tag",
    descKey: "p4_desc",
    highlightKey: "p4_highlight",
    howKey: "p4_how",
    challenges: ["p4_ch1", "p4_ch2", "p4_ch3"],
    specs: ["p4_spec1", "p4_spec2", "p4_spec3", "p4_spec4", "p4_spec5", "p4_spec6"],
  },
];

function ProjectCard({ project, index, t }) {
  const cardRef = useRef(null);
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      style={{
        opacity: 0,
        transform: "translateY(56px)",
        transition: `opacity 0.8s ease ${index * 0.05}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${index * 0.05}s`,
      }}
    >
      <div className="border-t border-white/10 mb-12 md:mb-20" />

      {/* Project header row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex items-baseline gap-5">
          <span
            className="text-6xl md:text-7xl font-black leading-none select-none"
            style={{ color: project.accent, opacity: 0.2 }}
          >
            {project.number}
          </span>
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-none">
              {project.name}
            </h2>
            <span
              className="inline-block mt-2 text-xs tracking-widest uppercase px-3 py-1 rounded-full border"
              style={{
                color: project.accent,
                borderColor: project.accent + "40",
                background: project.accentMuted,
              }}
            >
              {t[project.tagKey]}
            </span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex gap-3 flex-shrink-0">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-opacity duration-200 hover:opacity-80"
            style={{ background: project.accent, color: "#000" }}
          >
            {t.proj_live}
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border border-white/15 text-zinc-300 hover:border-white/30 hover:text-white transition-all duration-200"
          >
            {t.proj_github}
          </a>
        </div>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

        {/* Left column */}
        <div className="lg:col-span-5 flex flex-col gap-6">

          {/* Browser mockup */}
          <div className="rounded-2xl overflow-hidden border border-white/8" style={{ background: "#111" }}>
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8" style={{ background: "#0d0d0d" }}>
              <div className="flex gap-1.5">
                {["bg-zinc-700", "bg-zinc-700", "bg-zinc-700"].map((c, i) => (
                  <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                ))}
              </div>
              <div className="flex-1 mx-3">
                <div className="bg-zinc-800 rounded px-3 py-1 text-xs text-zinc-500 font-mono truncate">
                  {project.url.replace("https://", "")}
                </div>
              </div>
            </div>
            <div
              className="relative h-52 flex items-center justify-center overflow-hidden"
              style={{
                background: `radial-gradient(ellipse at 30% 40%, ${project.accent}18 0%, #0a0a0a 65%)`,
              }}
            >
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `linear-gradient(${project.accent}50 1px, transparent 1px), linear-gradient(90deg, ${project.accent}50 1px, transparent 1px)`,
                  backgroundSize: "36px 36px",
                }}
              />
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="relative z-10 flex flex-col items-center gap-3 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center border transition-transform duration-200 group-hover:scale-110"
                  style={{ background: project.accentMuted, borderColor: project.accent + "50" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={project.accent} strokeWidth="2" strokeLinecap="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </div>
                <span className="text-xs tracking-widest uppercase" style={{ color: project.accent }}>
                  {t.proj_open}
                </span>
              </a>
            </div>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Specs grid */}
          <div className="rounded-xl border border-white/8 overflow-hidden" style={{ background: "#0d0d0d" }}>
            <div
              className="px-4 py-3 text-xs tracking-widest uppercase font-medium border-b border-white/8"
              style={{ color: project.accent }}
            >
              {t.proj_specs}
            </div>
            <div className="grid grid-cols-2">
              {project.specs.map((key, i) => (
                <div
                  key={key}
                  className="px-4 py-3 text-xs text-zinc-400 font-mono border-white/5"
                  style={{
                    borderBottom: i < project.specs.length - 2 ? "1px solid rgba(255,255,255,0.05)" : "none",
                    borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  }}
                >
                  {t[key]}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-7 flex flex-col gap-8">

          {/* Description */}
          <p className="text-zinc-300 text-base leading-relaxed">
            {t[project.descKey]}
          </p>

          {/* Technical highlight */}
          <div
            className="rounded-xl p-5 border"
            style={{ background: project.accentMuted, borderColor: project.accent + "30" }}
          >
            <div
              className="text-xs tracking-widest uppercase mb-3 font-semibold"
              style={{ color: project.accent }}
            >
              {t.proj_highlight}
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              {t[project.highlightKey]}
            </p>
          </div>

          {/* How it was built */}
          <div>
            <div className="text-xs tracking-widest uppercase text-zinc-600 mb-3 font-medium">
              {t.proj_howbuilt}
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {t[project.howKey]}
            </p>
          </div>

          {/* Challenges */}
          <div>
            <div className="text-xs tracking-widest uppercase text-zinc-600 mb-4 font-medium">
              {t.proj_challenges}
            </div>
            <div className="flex flex-col gap-3">
              {project.challenges.map((key, i) => (
                <div key={key} className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                    style={{ background: project.accentMuted, color: project.accent }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {t[key]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* ── Nav ── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5">
        {/* Home link */}
        <Link
          to="/"
          className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
        >
          ME
        </Link>

        <div className="flex items-center gap-4">
          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            className="group relative px-5 py-2 rounded-full border border-zinc-700 text-xs tracking-widest text-zinc-400 transition-all duration-300 hover:text-white hover:border-white"
          >
            {language === "en" ? "ES" : "EN"}
          </button>

          {/* Menu */}
          <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

          {/*botón del menú: */}
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* ── Hero ── */}
      <div
        ref={heroRef}
        style={{
          opacity: 0,
          transform: "translateY(32px)",
          transition: "opacity 0.6s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)",
        }}
        className="px-6 md:px-12 lg:px-20 pt-32 pb-16"
      >
        <p className="text-xs tracking-widest uppercase text-zinc-600 mb-4 font-mono">
          {t.proj_eyebrow}
        </p>
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none text-white mb-6">
          {t.proj_heading}
        </h1>
        <p className="text-zinc-500 text-lg max-w-xl leading-relaxed">
          {t.proj_sub}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 mt-10 pt-10 border-t border-white/8">
          {[
            { n: "03", label: t.proj_stat1 },
            { n: "03", label: t.proj_stat2 },
            { n: "05+", label: t.proj_stat3 },
            { n: "2026", label: t.proj_stat4 },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-black font-mono text-white">{s.n}</div>
              <div className="text-xs text-zinc-600 tracking-wide mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Projects ── */}
      <div className="px-6 md:px-12 lg:px-20 pb-24 flex flex-col gap-20 md:gap-32">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} t={t} />
        ))}
        <div className="border-t border-white/10" />
      </div>

      <MainFooter />
    </div>
  );
}