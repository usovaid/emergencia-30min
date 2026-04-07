import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// Só não esqueça de trocar os "999999999" pelo número real do seu parceiro técnico
const WHATSAPP_URL = "https://wa.me/5544999999999?text=Olá! Preciso de um serviço de desentupimento urgente!";

const Header = () => {
  return (
    <header className="bg-primary py-3 sticky top-0 z-40 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* Bloco da Nova Logo */}
        <div className="flex items-center">
          <img 
            src="/logo-desentupidora.png" 
            alt="Desentupidora Rápida" 
            className="h-16 w-auto drop-shadow-md hover:scale-105 transition-transform duration-300" 
          />
        </div>

        <div className="flex items-center gap-3">
          <a href="tel:+5544999999999" className="hidden md:flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
            <Phone className="w-4 h-4" />
            (44) 99999-9999
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="sm" className="animate-shake">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
