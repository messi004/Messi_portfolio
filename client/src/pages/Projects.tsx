import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { useProjects } from "@/hooks/use-projects";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const { data: projects, isLoading } = useProjects();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            A collection of my recent work in web development, automation, and security.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-primary" />
          </div>
        ) : projects?.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            No projects found. Check back soon!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
