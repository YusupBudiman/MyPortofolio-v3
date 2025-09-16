import { projects } from "@/data/Projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
}
