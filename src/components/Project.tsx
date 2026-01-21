import { useState, useRef, useEffect } from 'react';
import type { ProjectData } from "../data/db";

type ProjectProps = {
  project: ProjectData;
   onClick: () => void; // 👈 añadimos esta prop
};

export default function Project({ project, onClick }: ProjectProps) {
  const { id, name, image, video } = project;
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const img = imgRef.current;
    if (img) {
      const setHeight = () => {
        if (sectionRef.current) {
          sectionRef.current.style.height = `${img.offsetHeight}px`;
        }
      };
      if (img.complete) {
        setHeight();
      } else {
        img.addEventListener('load', setHeight);
      }
    }
  }, []);

  return (
    <section ref={sectionRef} id={id} className="project" onMouseEnter={() => !isMobile && setIsHovered(true)} onMouseLeave={() => !isMobile && setIsHovered(false)}>
      {isHovered ? (
        <video
          onClick={onClick}
          src={`${import.meta.env.BASE_URL}videos/${video}`}
          autoPlay
          muted
          loop
          preload="metadata"
        />
      ) : (
        <img ref={imgRef} onClick={onClick} src={`${import.meta.env.BASE_URL}images/${image}`} />
      )}
      <p className="subtitle_homepage">{name}</p>
    </section>
  );
}
