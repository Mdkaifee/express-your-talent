import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "JavaScript ES6+", level: 92 }
      ]
    },
    {
      title: "Design & Tools",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe Creative Suite", level: 80 },
        { name: "UI/UX Design", level: 88 },
        { name: "Responsive Design", level: 95 }
      ]
    },
    {
      title: "Backend & Deployment",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Git/GitHub", level: 90 },
        { name: "Vercel/Netlify", level: 85 },
        { name: "REST APIs", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience 
            and continuous learning in the ever-evolving world of web development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="glass-card p-8 hover-lift">
              <h3 className="text-xl font-semibold mb-6 text-center gradient-text">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;