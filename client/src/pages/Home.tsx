import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Shield, Bot } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-32 container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-medium tracking-wide uppercase mb-4">Hello, I'm Messi</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight">
              Full Stack Developer <br />
              <span className="text-gradient">
                Automation & Ethical Hacking
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            I build robust web applications, sophisticated automation bots, and secure systems.
            Passionate about code quality and innovative solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Link href="/projects">
              <Button size="lg" className="text-lg px-8 h-12 bg-primary hover:bg-primary/90">
                View Projects <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 h-12 border-primary/20 hover:bg-primary/10">
                Contact Me
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30 border-t border-border/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Code2 className="w-10 h-10 text-primary" />}
              title="Full Stack Dev"
              description="Modern web applications built with React, Node.js, and cutting-edge frameworks."
            />
            <FeatureCard 
              icon={<Bot className="w-10 h-10 text-primary" />}
              title="Automation"
              description="Custom bots for Telegram, WhatsApp, and Instagram to automate your workflows."
            />
            <FeatureCard 
              icon={<Shield className="w-10 h-10 text-primary" />}
              title="Ethical Hacking"
              description="Security audits and vulnerability assessments to keep your systems safe."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold font-heading mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
