import { Navigation } from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Artificial Intelligence",
    items: ["Machine Learning", "Deep Learning", "NLP", "TensorFlow", "PyTorch", "OpenAI API"]
  },
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS", "Bash"]
  },
  {
    category: "Web Development",
    items: ["React", "Node.js", "Express", "Next.js", "Tailwind CSS", "PostgreSQL", "SQLite"]
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "Linux", "AWS", "Nginx", "GitHub Actions"]
  }
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            A comprehensive overview of my technical expertise and the technologies I work with daily.
          </p>
        </div>

        <div className="space-y-12">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full" />
                {group.category}
              </h2>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="text-base px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
