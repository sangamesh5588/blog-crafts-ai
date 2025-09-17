import { Button } from "@/components/ui/button";
import { PenTool, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();

  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <PenTool className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            BlogForge AI
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`text-muted-foreground hover:text-foreground transition-colors ${
              location.pathname === '/' ? 'text-foreground font-medium' : ''
            }`}
          >
            Dashboard
          </Link>
          <Link 
            to="/blogs" 
            className={`text-muted-foreground hover:text-foreground transition-colors ${
              location.pathname === '/blogs' ? 'text-foreground font-medium' : ''
            }`}
          >
            My Blogs
          </Link>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Templates
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
          <Link to="/editor">
            <Button variant="premium" size="sm">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}