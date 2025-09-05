import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const About = () => {
  const certifications = [
    { name: "Python Programming", issuer: "GUVI", year: "2024" },
    { name: "Data Analytics", issuer: "GUVI", year: "2024" },
    { name: "SQL Database", issuer: "GUVI", year: "2024" },
    { name: "AI Internship", issuer: "Codsoft", year: "2025" },
    { name: "Virtual DA Internship", issuer: "GUVI under HCL", year: "2025" },
  ];

  const interests = ["Singing", "Music", "Sports", "Machine Learning", "Data Science"];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, education, and what drives my passion for AI/ML
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Bio Section */}
          <div className="space-y-6 animate-slide-up">
            <Card className="p-8 bg-gradient-card border-border/50 shadow-card">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">My Story</h3>
                <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    I am a 3rd-year B.Tech student specializing in AI/ML at Galgotias University. 
                    My journey into the world of artificial intelligence and data science began with 
                    a curiosity about how machines can learn and make intelligent decisions.
                  </p>
                  <p>
                    Skilled in <span className="text-primary font-medium">Python</span>, 
                    <span className="text-primary font-medium"> Machine Learning</span>, 
                    <span className="text-primary font-medium"> Data Analytics</span>, and 
                    <span className="text-primary font-medium"> SQL</span>, I am passionate about 
                    building intelligent solutions and working with data to derive meaningful insights.
                  </p>
                  <p>
                    Outside of tech, I enjoy singing, playing sports, and exploring music. 
                    These creative pursuits help me think outside the box and bring fresh 
                    perspectives to my technical work.
                  </p>
                </div>
              </div>
            </Card>

            {/* Interests */}
            <Card className="p-6 bg-gradient-card border-border/50 shadow-soft">
              <h4 className="text-xl font-semibold mb-4">Interests & Hobbies</h4>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <Badge 
                    key={index} 
                    variant="outline"
                    className="bg-muted/30 hover:bg-primary/20 hover:border-primary/50 transition-colors duration-300"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Education */}
            <Card className="p-8 bg-gradient-card border-border/50 shadow-card">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-primary">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Education</h3>
                  <p className="text-muted-foreground">Academic Background</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-card/30 border border-border/30">
                  <h4 className="text-xl font-semibold text-foreground">B.Tech CSE (AI/ML)</h4>
                  <div className="flex items-center space-x-4 mt-2 text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>Galgotias University</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Batch 2027</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    3rd Year • Specializing in Artificial Intelligence and Machine Learning
                  </p>
                </div>
              </div>
            </Card>

            {/* Certifications */}
            <Card className="p-8 bg-gradient-card border-border/50 shadow-card">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-secondary">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
                  <p className="text-muted-foreground">Professional Achievements</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-card/20 hover:bg-card/30 border border-border/30 hover:border-primary/30 transition-all duration-300"
                  >
                    <div>
                      <h4 className="font-medium text-foreground">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <Badge variant="outline" className="bg-muted/20">
                      {cert.year}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;