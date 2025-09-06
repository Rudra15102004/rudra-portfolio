import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download, MessageCircle, Calendar } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rudrashiv1510@gmail.com",
      href: "mailto:rudrashiv1510@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6395258756",
      href: "tel:+916395258756",
      color: "secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Galgotias University, India",
      href: "#",
      color: "accent"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Rudra15102004",
      color: "hover:text-foreground"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/rudra-pratap-singh-759a2027a",
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:rudrashiv1510@gmail.com",
      color: "hover:text-primary"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Rudra Pratap Singh",
        to_email: "rudrashiv1510@gmail.com",
        reply_to: formData.email
      };

      await emailjs.send(
        'service_7kbgv2q', // Service ID
        'template_u7el3dg', // Template ID
        templateParams,
        'GJzim6NBWo1N9NqmW' // Public Key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly at rudrashiv1510@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getGradientColor = (color: string) => {
    switch (color) {
      case "primary": return "bg-gradient-primary";
      case "secondary": return "bg-gradient-secondary";
      case "accent": return "bg-gradient-to-r from-accent to-accent/80";
      default: return "bg-gradient-primary";
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on AI/ML projects or discuss data analytics opportunities? Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <Card className="p-8 bg-gradient-card border-border/50 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-card/20 hover:bg-card/30 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 ${getGradientColor(info.color)} rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8 bg-gradient-card border-border/50 shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-6">Connect on Social</h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-card/20 hover:bg-card/40 border border-border/50 hover:border-primary/50 rounded-lg flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300 hover:shadow-soft`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 bg-gradient-card border-border/50 shadow-soft">
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Quick Actions</h4>
                <div className="space-y-3">
                  <Button variant="glow" className="w-full">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </Button>
                  <Button variant="hero" className="w-full">
                    <MessageCircle className="w-4 h-4" />
                    Schedule a Call
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Card className="p-8 bg-gradient-card border-border/50 shadow-card">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Send Me a Message</h3>
                  <p className="text-muted-foreground">
                    Have a project in mind or want to discuss AI/ML opportunities? I'd love to hear from you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                        className="bg-card/20 border-border/50 focus:border-primary/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        className="bg-card/20 border-border/50 focus:border-primary/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Project collaboration, consultation, etc."
                      className="bg-card/20 border-border/50 focus:border-primary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Tell me about your project, requirements, or any questions you have..."
                      className="bg-card/20 border-border/50 focus:border-primary/50 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="glow" 
                    size="lg" 
                    className="w-full group" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:animate-bounce" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="p-12 bg-gradient-card border-border/50 shadow-card max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Whether it's an AI/ML project, data analytics solution, or innovative dashboard, 
                I'm here to help turn your ideas into reality.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="glow" size="lg">
                  <Mail className="w-5 h-5" />
                  Start a Conversation
                </Button>
                <Button variant="hero" size="lg">
                  <Calendar className="w-5 h-5" />
                  Book a Meeting
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;