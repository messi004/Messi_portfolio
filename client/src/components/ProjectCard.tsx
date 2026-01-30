import { Project } from "@shared/schema";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden bg-card border-border/50 card-hover group">
        <div className="relative aspect-video overflow-hidden bg-muted">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="gap-2">
                Visit Project <ExternalLink size={16} />
              </Button>
            </a>
          </div>
        </div>
        
        <CardHeader>
          <CardTitle className="text-xl font-bold font-heading">{project.title}</CardTitle>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </CardContent>
        
        <CardFooter className="pt-0">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/10 hover:text-primary">
              View Details
            </Button>
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
