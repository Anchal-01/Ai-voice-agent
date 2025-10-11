import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold gradient-text">VoiceAI</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#use-cases" className="text-foreground/80 hover:text-foreground transition-colors">
                Use Cases
              </a>
              <a href="#technology" className="text-foreground/80 hover:text-foreground transition-colors">
                Technology
              </a>
              <a href="#integration" className="text-foreground/80 hover:text-foreground transition-colors">
                Integration
              </a>
              <Button variant="default" className="glow-effect">
                Get Started
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-card border-t border-border/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#features"
              className="block px-3 py-2 text-foreground/80 hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#use-cases"
              className="block px-3 py-2 text-foreground/80 hover:text-foreground transition-colors"
            >
              Use Cases
            </a>
            <a
              href="#technology"
              className="block px-3 py-2 text-foreground/80 hover:text-foreground transition-colors"
            >
              Technology
            </a>
            <a
              href="#integration"
              className="block px-3 py-2 text-foreground/80 hover:text-foreground transition-colors"
            >
              Integration
            </a>
            <div className="px-3 pt-2">
              <Button variant="default" className="w-full glow-effect">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
