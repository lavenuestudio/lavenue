import type { ProjectData } from "../data/db";

type ProjectProps = {
  project: ProjectData;
   onClick: () => void; // 👈 añadimos esta prop
};

export default function Project({ project, onClick }: ProjectProps) {
  const { id, name, description, image } = project;
  return (
    <section id={id} className="project">
      <img onClick={onClick} src={`/images/${image}`} />
      <p className="subtitle_homepage">{name}</p>
    </section>
  );
}
