import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-card/20 border-t border-border/50 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                Rudra Pratap Singh
              </div>
              <p className="text-sm text-muted-foreground">
                AI/ML Enthusiast | Data Engineer in the Making
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © 2025 Rudra Pratap Singh. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Built with React, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;