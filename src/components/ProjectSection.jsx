import { useState, useEffect } from "react";

export default function ProjectSection({ title, tech, images, isActive }) {
  const [current, setCurrent] = useState(0);
  const [animateText, setAnimateText] = useState(false);


  useEffect(() => {
    if (!isActive) return;
  
    const timer = setTimeout(() => {
      setAnimateText(true);
    }, 300);
  
    return () => {
      clearTimeout(timer);
      setAnimateText(false);
    };
  }, [isActive]);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Images */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="project visual"
            className={`project-image ${
              index === current ? "active" : ""
            }`}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div
            className={`relative z-10 h-full flex flex-col justify-center items-center text-center px-6
            transition-all duration-700 ease-[cubic-bezier(.83,0,.17,1)]
            ${
              animateText
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-32"
              }`}
      >


        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          {title}
        </h2>
        <p className="text-zinc-300 text-lg tracking-wide">
          {tech}
        </p>
      </div>

    </section>
  );
}
