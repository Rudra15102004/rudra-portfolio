import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-dark">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="text-primary font-medium text-lg">Hello, I'm</div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Rudra Pratap</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">Singh</span>
              </h1>
              <div className="text-xl lg:text-2xl text-muted-foreground font-medium">
                AI/ML Enthusiast | Data Engineer in the Making
              </div>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                3rd-year B.Tech CSE student passionate about building intelligent solutions 
                and working with data. Specializing in AI/ML, Python, and Data Analytics.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="glow" size="lg" className="group">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                View My Work
              </Button>
              <Button variant="hero" size="lg">
                <Mail className="w-5 h-5" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-sm text-muted-foreground">Connect with me:</div>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Rudra15102004" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-card/20 hover:bg-card/40 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-soft"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/rudra-pratap-singh-759a2027a" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-card/20 hover:bg-card/40 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-soft"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:rudrashiv1510@gmail.com"
                  className="p-2 rounded-lg bg-card/20 hover:bg-card/40 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-soft"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 scale-110"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card shadow-card">
                <img 
                  src={profileImage}
                  alt="Rudra Pratap Singh - AI/ML Engineer" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow animate-float">
                <span className="text-white font-bold text-sm">AI/ML</span>
              </div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center shadow-soft animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-white font-bold text-xs">2027</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;