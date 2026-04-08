import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/554284236339?text=Olá! Preciso de um serviço de desentupimento urgente!";

const Header = () => {
  return (
    <header className="bg-primary py-3 sticky top-0 z-40 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* Bloco da Logo com Título Elegante */}
        <div className="flex items-center gap-3 sm:gap-4">
          <img 
            src="/logo-desentupidora.jpeg" 
            alt="Logo Desentupidora Rápida" 
            // rounded-full deixa o JPEG com visual de "badge" redondo
            className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover border-2 border-cyan-400/30 drop-shadow-md hover:scale-105 transition-transform duration-300" 
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-none drop-shadow-sm">
              <span className="text-white">Desentupidora</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300 ml-1">
                Rápida
              </span>
            </h1>
            <span className="hidden sm:block text-white/70 text-[11px] font-semibold uppercase tracking-widest mt-1">
              Atendimento de Emergência
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a href="tel:+554284236339" className="hidden md:flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
            <Phone className="w-4 h-4" />
            (44) 99999-9999
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="sm" className="animate-shake shadow-lg hover:shadow-green-500/20">
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
