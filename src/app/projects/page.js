import { projects } from "@/data/Projects";
import ProjectContent from "@/components/projects/ProjectContent";
import SectionBackground from "@/components/sections/SectionBackground";
export default function ProjectsSection() {
  return (
    <SectionBackground id="projects">
      <ProjectContent projects={projects} />
    </SectionBackground>
  );
}
