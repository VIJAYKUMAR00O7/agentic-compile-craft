
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-4">
          <img 
            src="/lovable-uploads/c61550a5-d018-4dc4-a919-d6b90923cd6b.png"
            alt="Agentic Compiler Logo"
            className="h-12 w-auto"
          />
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Agentic Compiler
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <nav>
            <ul className="flex gap-6">
              <li><a href="#features" className="text-sm text-primary/80 hover:text-primary transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-sm text-secondary/80 hover:text-secondary transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/auth">
              <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">Log in</Button>
            </Link>
            <Link to="/auth">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
            </Link>
          </div>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu />
          </Button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border">
          <nav className="container py-4">
            <ul className="flex flex-col gap-4">
              <li><a href="#features" className="text-sm text-primary/80 hover:text-primary transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-sm text-secondary/80 hover:text-secondary transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
            <div className="flex flex-col gap-2 mt-4">
              <Link to="/auth">
                <Button variant="outline" size="sm" className="w-full text-primary border-primary/50 hover:bg-primary/10">Log in</Button>
              </Link>
              <Link to="/auth">
                <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

