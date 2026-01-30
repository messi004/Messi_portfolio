import { Link } from "wouter";
import { FaGithub, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";
import { Mail } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/messi004", icon: FaGithub },
  { name: "Telegram", href: "https://t.me/Messi0004", icon: FaTelegram },
  { name: "WhatsApp", href: "https://wa.me/918387041436", icon: FaWhatsapp },
  { name: "HuggingFace", href: "https://huggingface.co/Messi0004", icon: SiHuggingface },
  { name: "Email", href: "mailto:mksheela@duck.com", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold font-heading text-foreground mb-4">Messi</h3>
            <p className="text-muted-foreground text-sm">
              Full Stack Developer specializing in automation, bot development, and ethical hacking.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold font-heading text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    data-testid={`footer-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold font-heading text-foreground mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-md bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid={`footer-social-${social.name.toLowerCase()}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 Messi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
