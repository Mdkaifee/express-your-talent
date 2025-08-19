import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern, responsive e-commerce platform built with React, TypeScript, and Stripe integration. Features include user authentication, product catalog, shopping cart, and order management.",
      tags: ["React", "TypeScript", "Tailwind", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team workspaces, and advanced filtering. Built with Next.js and Firebase for seamless collaboration.",
      tags: ["Next.js", "Firebase", "Real-time", "PWA"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Design System Library",
      description: "A comprehensive design system and component library for modern web applications. Includes customizable components, design tokens, and extensive documentation.",
      tags: ["Storybook", "Design System", "Components", "Documentation"],
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard with interactive charts, real-time data visualization, and customizable reporting features for business intelligence.",
      tags: ["React", "D3.js", "Analytics", "Data Viz"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Media App",
      description: "A social media platform with user profiles, real-time messaging, content sharing, and engagement features. Built with modern web technologies and responsive design.",
      tags: ["React", "Socket.io", "MongoDB", "Social"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Forecast App",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather insights. Features smooth animations and intuitive design.",
      tags: ["Vue.js", "Weather API", "Maps", "PWA"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills in frontend development, 
            design, and problem-solving. Each project represents a unique challenge 
            and learning opportunity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card border-0 hover-lift group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity flex-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;