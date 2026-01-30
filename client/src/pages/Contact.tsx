import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useCreateMessage } from "@/hooks/use-contact";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FaWhatsapp, 
  FaTelegram, 
  FaGithub, 
  FaEnvelope 
} from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2 } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const createMessage = useCreateMessage();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  async function onSubmit(data: InsertContactMessage) {
    try {
      await createMessage.mutateAsync(data);
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  }

  const socialLinks = [
    { icon: <FaWhatsapp className="w-6 h-6" />, label: "WhatsApp", value: "+91 8387041436", href: "https://wa.me/918387041436" },
    { icon: <FaTelegram className="w-6 h-6" />, label: "Telegram", value: "@Messi0004", href: "https://t.me/Messi0004" },
    { icon: <FaGithub className="w-6 h-6" />, label: "GitHub", value: "messi004", href: "https://github.com/messi004" },
    { icon: <SiHuggingface className="w-6 h-6" />, label: "HuggingFace", value: "@Messi0004", href: "https://huggingface.co/Messi0004" },
    { icon: <FaEnvelope className="w-6 h-6" />, label: "Email", value: "mksheela@duck.com", href: "mailto:mksheela@duck.com" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Have a project in mind or just want to say hi? I'm always open to discussing new projects, 
                creative ideas or opportunities to be part of your visions.
              </p>
            </div>

            <div className="grid gap-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:bg-muted/50 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {link.icon}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{link.label}</p>
                    <p className="text-sm text-muted-foreground">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 border-border/50 p-6 lg:p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold font-heading mb-6">Send a Message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-background/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" type="email" className="bg-background/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project..." 
                            className="bg-background/50 min-h-[150px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg font-medium"
                    disabled={createMessage.isPending}
                  >
                    {createMessage.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
