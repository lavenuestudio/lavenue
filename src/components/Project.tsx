import type { ProjectData } from "@/types/ProjectTypes";

type ProjectProps = {
  project: ProjectData;
   onClick: () => void;
};

export default function Project({ project, onClick }: ProjectProps) {
  const { id, name, image } = project;
  return (
    <section id={id} className="project">
      <img onClick={onClick} src={`${import.meta.env.BASE_URL}images/${image}`} />
      <p className="subtitle_homepage">{name}</p>
    </section>
  );
}
