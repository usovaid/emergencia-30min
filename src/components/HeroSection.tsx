import { Phone, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-plumber.jpg";

const WHATSAPP_URL = "https://wa.me/554284236339?text=Olá! Preciso de um serviço de desentupimento urgente!";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Profissional desentupindo encanamento" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-urgent px-4 py-2 rounded-full mb-6 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-urgent-foreground animate-ping" />
            <span className="text-urgent-foreground text-sm font-bold uppercase tracking-wider">
              Atendimento 24 Horas — Ligue Agora!
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-primary-foreground">
            Desentupidora Rápida: <br />
            <span className="text-gradient">Chegamos em até 30 min!</span>
          </h1>

          <p className="text-lg md:text-xl mb-4 text-primary-foreground/90 leading-relaxed">
            Resolvemos seu problema de entupimento com rapidez e eficiência.
            <strong className="text-accent"> Visita técnica GRÁTIS e sem compromisso.</strong>
          </p>

          <div className="flex flex-wrap gap-4 mb-8 text-primary-foreground/80 text-sm">
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-accent" /> Atendimento em até 30 min</span>
            <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /> 24 horas, 7 dias por semana</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="xl" className="animate-pulse-urgent w-full sm:w-auto">
                <MessageCircle className="w-6 h-6" />
                Chamar no WhatsApp Agora
              </Button>
            </a>
            <a href="tel:+554284236339">
              <Button variant="cta" size="xl" className="w-full sm:w-auto">
                <Phone className="w-6 h-6" />
                Ligar Agora
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
