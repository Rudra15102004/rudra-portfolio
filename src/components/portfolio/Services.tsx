import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Database, Brain, TrendingUp, Cpu, FileBarChart } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Transform raw data into meaningful insights through comprehensive analysis and statistical modeling.",
      features: [
        "Exploratory Data Analysis (EDA)",
        "Statistical hypothesis testing", 
        "Data cleaning and preprocessing",
        "Pattern recognition and trends"
      ],
      color: "primary",
      gradient: "bg-gradient-primary"
    },
    {
      icon: FileBarChart,
      title: "Dashboard Creation", 
      description: "Build interactive dashboards that provide real-time insights and visual representations of your data.",
      features: [
        "Interactive data visualizations",
        "Real-time analytics dashboards",
        "Custom KPI tracking",
        "Business intelligence reporting"
      ],
      color: "secondary",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: Brain,
      title: "ML Model Building",
      description: "Design, train, and deploy machine learning models tailored to solve your specific business problems.",
      features: [
        "Supervised & unsupervised learning",
        "Model training and optimization",
        "Performance evaluation and tuning",
        "Model deployment and monitoring"
      ],
      color: "accent",
      gradient: "bg-gradient-to-r from-accent to-accent/80"
    }
  ];

  const additionalServices = [
    {
      icon: Database,
      title: "Data Engineering",
      description: "Build scalable data pipelines and architectures"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast trends and future outcomes using advanced algorithms"
    },
    {
      icon: Cpu,
      title: "AI Consultation",
      description: "Strategic guidance on AI/ML implementation for your business"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI/ML and data analytics solutions to drive your business forward
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-500 group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-6">
                {/* Icon */}
                <div className="relative">
                  <div className={`w-16 h-16 ${service.gradient} rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-radial from-transparent to-card/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    What I Deliver
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-start space-x-3 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Button variant="outline" className="w-full group-hover:border-primary/50 group-hover:text-primary transition-all duration-300">
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Additional Expertise</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Specialized services to complement your AI/ML and data analytics needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-card border-border/50 shadow-soft hover:shadow-card transition-all duration-500 text-center group animate-slide-up"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto group-hover:shadow-glow transition-all duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">{service.title}</h4>
                  <p className="text-muted-foreground">{service.description}</p>
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
                Ready to Transform Your Data?
              </h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let's discuss how AI/ML and data analytics can drive innovation and growth for your projects.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="glow" size="lg">
                  Start a Project
                </Button>
                <Button variant="hero" size="lg">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;