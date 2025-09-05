import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BarChart3, Cloud, Zap, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Sales Dashboard",
      description: "Interactive dashboard analyzing sales trends, customer behavior, and product performance for an e-commerce platform. Features real-time analytics and predictive insights.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Plotly", "Pandas", "SQL", "Streamlit"],
      category: "Data Analytics",
      features: [
        "Real-time sales monitoring",
        "Customer segmentation analysis", 
        "Revenue forecasting",
        "Interactive data visualizations"
      ],
      metrics: {
        dataPoints: "10M+",
        accuracy: "94%",
        performance: "< 2s"
      },
      links: {
        demo: "#",
        github: "#"
      },
      color: "primary"
    },
    {
      id: 2, 
      title: "Weather Analytics Dashboard",
      description: "Comprehensive weather data analysis platform with real-time insights, historical trends, and predictive modeling for weather patterns and climate analysis.",
      image: "/api/placeholder/600/400", 
      technologies: ["Python", "OpenWeather API", "Machine Learning", "Dash", "Plotly"],
      category: "Data Visualization",
      features: [
        "Real-time weather monitoring",
        "Historical trend analysis",
        "Weather pattern prediction",
        "Climate data visualization"
      ],
      metrics: {
        dataPoints: "5M+", 
        accuracy: "91%",
        performance: "< 1s"
      },
      links: {
        demo: "#",
        github: "#"
      },
      color: "secondary"
    }
  ];

  const upcomingProjects = [
    {
      title: "AI-Powered Recommendation System",
      description: "Machine learning model for personalized product recommendations",
      status: "In Development",
      technologies: ["TensorFlow", "Python", "Neural Networks"],
      icon: Zap
    },
    {
      title: "Predictive Analytics Platform",
      description: "End-to-end platform for business forecasting and trend analysis", 
      status: "Planning",
      technologies: ["Python", "Time Series", "Cloud Deployment"],
      icon: TrendingUp
    }
  ];

  const getGradientColor = (color: string) => {
    switch (color) {
      case "primary": return "bg-gradient-primary";
      case "secondary": return "bg-gradient-secondary"; 
      default: return "bg-gradient-primary";
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my expertise in AI/ML, data analytics, and dashboard development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="overflow-hidden bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-500 group">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="aspect-[4/3] bg-gradient-to-br from-muted/20 to-card/40 flex items-center justify-center">
                      <BarChart3 className="w-24 h-24 text-muted-foreground/30" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                    <Badge 
                      className={`absolute top-4 left-4 ${getGradientColor(project.color)} text-white`}
                    >
                      {project.category}
                    </Badge>
                  </div>

                  {/* Project Content */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div 
                            key={featureIndex}
                            className="flex items-start space-x-2 text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 p-4 rounded-lg bg-card/20 border border-border/30">
                      <div className="text-center">
                        <div className="text-xl font-bold text-primary">{project.metrics.dataPoints}</div>
                        <div className="text-xs text-muted-foreground">Data Points</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-secondary">{project.metrics.accuracy}</div>
                        <div className="text-xs text-muted-foreground">Accuracy</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-accent">{project.metrics.performance}</div>
                        <div className="text-xs text-muted-foreground">Load Time</div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="outline"
                            className="bg-muted/20 hover:bg-primary/20 hover:border-primary/50 transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex flex-wrap gap-4 pt-2">
                      <Button variant="glow" className="group">
                        <ExternalLink className="w-4 h-4 group-hover:animate-bounce" />
                        Live Demo
                      </Button>
                      <Button variant="outline">
                        <Github className="w-4 h-4" />
                        View Code
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Upcoming Projects */}
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Upcoming Projects</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Currently working on these exciting AI/ML and data analytics projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingProjects.map((project, index) => (
              <Card 
                key={index}
                className="p-8 bg-gradient-card border-border/50 shadow-soft hover:shadow-card transition-all duration-500 group animate-slide-up"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`${
                        project.status === "In Development" 
                          ? "bg-secondary/20 text-secondary border-secondary/30" 
                          : "bg-accent/20 text-accent border-accent/30"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-foreground">{project.title}</h4>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="text-xs bg-muted/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-12 bg-gradient-card border-border/50 shadow-card max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Have a Project in Mind?
              </h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let's collaborate on your next AI/ML or data analytics project. I'd love to help bring your ideas to life.
              </p>
              <Button variant="glow" size="lg">
                Let's Work Together
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;