import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "AI Intern",
      company: "Codsoft",
      location: "Remote",
      duration: "2025",
      type: "Internship",
      description: "Gained hands-on experience in ML project work and model development basics. Worked on real-world AI applications and learned industry best practices.",
      skills: ["Python", "Machine Learning", "Model Development", "Data Analysis"],
      achievements: [
        "Built and trained machine learning models",
        "Learned industry-standard ML workflows",
        "Gained practical experience in AI project development"
      ]
    },
    {
      id: 2,
      position: "Virtual Data Analytics Intern",
      company: "GUVI under HCL",
      location: "Remote",
      duration: "2025",
      type: "Virtual Internship",
      description: "5-day intensive virtual internship focusing on Data Analytics, SQL queries, and data visualization under HCL faculties. Developed practical skills in data processing and analysis.",
      skills: ["SQL", "Data Analytics", "Data Visualization", "Python"],
      achievements: [
        "Completed comprehensive data analytics training",
        "Mastered SQL query optimization techniques",
        "Created interactive data visualizations",
        "Learned data processing workflows"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey in AI/ML and data analytics
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="p-8 bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-500 group">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Company Icon & Timeline */}
                  <div className="flex lg:flex-col items-center lg:items-start space-x-4 lg:space-x-0 lg:space-y-4 lg:w-48 flex-shrink-0">
                    <div className="p-4 rounded-xl bg-gradient-primary group-hover:shadow-glow transition-all duration-300">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center lg:text-left">
                      <Badge 
                        variant="outline" 
                        className="bg-primary/10 text-primary border-primary/30"
                      >
                        {exp.type}
                      </Badge>
                      <div className="flex items-center justify-center lg:justify-start space-x-1 mt-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    {/* Header */}
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {exp.position}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="text-xl text-muted-foreground font-medium">
                          {exp.company}
                        </div>
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex}
                            variant="outline"
                            className="bg-secondary/10 text-secondary border-secondary/30 hover:bg-secondary/20 transition-colors duration-300"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li 
                            key={achIndex}
                            className="flex items-start space-x-3 text-muted-foreground"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* External Link */}
                  <div className="flex lg:flex-col justify-end items-center lg:items-end space-x-2 lg:space-x-0 lg:space-y-2">
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Timeline Connector */}
        <div className="flex justify-center mt-12">
          <div className="w-1 h-16 bg-gradient-primary rounded-full opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;