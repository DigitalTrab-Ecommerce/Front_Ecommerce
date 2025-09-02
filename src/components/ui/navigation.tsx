import { ShoppingBag, Search, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent">
              ÉLITE
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              Novidades
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              Masculino
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              Feminino
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              Acessórios
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              Sale
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-secondary">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-secondary">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-secondary">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative hover:bg-secondary">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 h-5 w-5 bg-accent text-accent-foreground rounded-full text-xs flex items-center justify-center">
                2
              </span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;