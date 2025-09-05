import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, BarChart, Cpu, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "primary",
      skills: [
        { name: "Python", level: 90, description: "Advanced proficiency in ML and data analysis" },
        { name: "SQL", level: 85, description: "Database querying and optimization" },
        { name: "JavaScript", level: 70, description: "Frontend development and scripting" },
        { name: "R", level: 65, description: "Statistical analysis and data visualization" }
      ]
    },
    {
      title: "Machine Learning",
      icon: Brain,
      color: "secondary",
      skills: [
        { name: "Supervised Learning", level: 85, description: "Classification and regression models" },
        { name: "Deep Learning", level: 75, description: "Neural networks and TensorFlow" },
        { name: "Model Deployment", level: 70, description: "Flask and cloud deployment" },
        { name: "Feature Engineering", level: 80, description: "Data preprocessing and selection" }
      ]
    },
    {
      title: "Data Analytics",
      icon: BarChart,
      color: "accent",
      skills: [
        { name: "Data Visualization", level: 88, description: "Matplotlib, Seaborn, Plotly" },
        { name: "Statistical Analysis", level: 82, description: "Hypothesis testing and A/B testing" },
        { name: "ETL Processes", level: 75, description: "Data pipeline creation" },
        { name: "Business Intelligence", level: 70, description: "Dashboard creation and insights" }
      ]
    }
  ];

  const tools = [
    "Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", 
    "Seaborn", "SQL", "Git", "Jupyter", "VS Code", "Docker"
  ];

  const getGradientColor = (color: string) => {
    switch (color) {
      case "primary": return "bg-gradient-primary";
      case "secondary": return "bg-gradient-secondary";
      case "accent": return "bg-gradient-to-r from-accent to-accent/80";
      default: return "bg-gradient-primary";
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical expertise and proficiency across AI/ML, data analytics, and programming
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <Card className="p-8 bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-500">
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`p-4 rounded-xl ${getGradientColor(category.color)}`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                    <p className="text-muted-foreground">Professional competencies</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="space-y-3 p-4 rounded-lg bg-card/20 hover:bg-card/30 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-foreground">{skill.name}</h4>
                        <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Card className="p-8 bg-gradient-card border-border/50 shadow-card">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-4 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Tools & Technologies</h3>
                <p className="text-muted-foreground">Development and analysis tools I work with</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="px-4 py-2 text-base bg-muted/20 hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* Core Competencies */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Cpu,
              title: "Problem Solving",
              description: "Analytical thinking and solution-oriented approach",
              color: "primary"
            },
            {
              icon: Database,
              title: "Data Engineering",
              description: "Building robust data pipelines and architectures",
              color: "secondary"
            },
            {
              icon: Brain,
              title: "Gen AI",
              description: "Exploring generative AI and language models",
              color: "accent"
            }
          ].map((competency, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card border-border/50 shadow-soft hover:shadow-glow transition-all duration-500 text-center animate-slide-up"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${getGradientColor(competency.color)} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <competency.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">{competency.title}</h4>
              <p className="text-muted-foreground">{competency.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;