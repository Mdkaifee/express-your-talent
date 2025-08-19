import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text mb-2">Alex Morgan</h3>
            <p className="text-muted-foreground">
              Frontend Developer & Designer
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:alex@example.com"
              className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Alex Morgan. Made with 
            <Heart className="w-4 h-4 text-red-500" /> 
            and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;