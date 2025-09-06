import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, User, Briefcase, Wrench, Mail } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", icon: User, href: "#about" },
    { name: "Experience", icon: Briefcase, href: "#experience" },
    { name: "Skills", icon: Code, href: "#skills" },
    { name: "Services", icon: Wrench, href: "#services" },
    { name: "Contact", icon: Mail, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Rudra Singh
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </a>
            ))}
            <Button 
              variant="glow" 
              size="sm"
              asChild
            >
              <a 
                href="https://docs.google.com/document/d/1MXzGMlhXDkjxGOWZWpN03kFtqC2f0QX-/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </a>
            ))}
            <Button 
              variant="glow" 
              size="sm" 
              className="w-full"
              asChild
            >
              <a 
                href="https://docs.google.com/document/d/1MXzGMlhXDkjxGOWZWpN03kFtqC2f0QX-/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;