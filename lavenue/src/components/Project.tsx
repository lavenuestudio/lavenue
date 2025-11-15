import FuzzyText from "../components/FuzzyText";

export default function Project({ project }) {
  const { id, name, description, image } = project;
  return (
    <div id={id} className="project">
      <FuzzyText
        baseIntensity={0.1}
        hoverIntensity={2}
        enableHover={true}
        fontSize={'clamp(1rem, 3vw, 3rem)'}
        fontFamily={"Arial, sans-serif"}
        color="#F5F5F5"
      >
        {name}
      </FuzzyText>
      <p className="project-description">{description}</p>
      <img src={`/images/${image}`} />
    </div>
  );
}
