import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá! Preciso de um serviço de desentupimento urgente!";

const CtaBanner = () => {
  return (
    <section className="bg-accent py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-accent-foreground mb-4">
          Não Espere o Problema Piorar!
        </h2>
        <p className="text-accent-foreground/90 text-lg mb-8 max-w-lg mx-auto">
          Quanto mais tempo, mais caro fica. Solicite agora sua <strong>visita técnica GRATUITA</strong> e resolva hoje mesmo!
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="whatsapp" size="xl" className="animate-pulse-urgent">
            <MessageCircle className="w-6 h-6" />
            Solicitar Visita Grátis pelo WhatsApp
            <ArrowRight className="w-5 h-5" />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CtaBanner;
