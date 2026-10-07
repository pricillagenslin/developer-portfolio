import Section from "../ui/Section";
import { Stagger } from "../ui/Reveal";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";
export default function Projects() {
  return (
    <Section
      id="projects"
      title="Selected projects"
      subtitle="A professional product and a personal project."
      alt
    >
      <Stagger
        gap={0.18}
        sx={{
          display: "grid",
          gap: 4,
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
        }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </Stagger>
    </Section>
  );
}
