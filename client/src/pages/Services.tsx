import { Navigation } from "@/components/Navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Laptop, Database, Bot, Cog, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Laptop className="w-12 h-12 text-blue-500" />,
    title: "Web & App Development",
    description: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js. Responsive, fast, and SEO-friendly."
  },
  {
    icon: <Database className="w-12 h-12 text-purple-500" />,
    title: "Software Development",
    description: "Desktop applications and backend systems tailored to your business needs. Scalable architecture and clean code."
  },
  {
    icon: <Bot className="w-12 h-12 text-green-500" />,
    title: "Bot Development",
    description: "Automated bots for Telegram, WhatsApp, and Instagram. Handle customer support, content distribution, and task automation effortlessly."
  },
  {
    icon: <Cog className="w-12 h-12 text-orange-500" />,
    title: "Automation Tools",
    description: "Scripts and tools to automate repetitive tasks, data scraping, and workflow optimization. Save time and reduce errors."
  },
  {
    icon: <ShieldAlert className="w-12 h-12 text-red-500" />,
    title: "Ethical Hacking",
    description: "Security assessments, penetration testing, and vulnerability analysis to identify and fix security weaknesses in your systems."
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Services & <span className="text-gradient">Solutions</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            I provide comprehensive technical solutions ranging from full-stack development
            to security auditing and automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 p-3 bg-background rounded-xl w-fit border border-border">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
