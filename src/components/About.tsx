import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: Palette,
      title: "Design First",
      description: "Creating beautiful interfaces with exceptional user experiences"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and efficiency in every project"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with teams to bring visions to life"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a passionate FullStack developer with over 1.5 years of experience 
                creating digital experiences that matter. My journey started with a 
                curiosity for how things work and evolved into a love for crafting 
                beautiful, functional Mobile & web applications.
              </p>
              
              <p>
                I specialize in Flutter,React-Native,Flutter,React, TypeScript, and modern web technologies, 
                always staying up-to-date with the latest trends and best practices. 
                When I'm not coding, you'll find me exploring new design systems, 
                contributing to open source, or mentoring fellow developers.
              </p>
              
              <p>
                My goal is simple: create digital products that users love and 
                businesses thrive with. Let's build something amazing together.
              </p>
            </div>
          </div>
          
          {/* Right Content - Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="glass-card p-6 hover-lift group"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;