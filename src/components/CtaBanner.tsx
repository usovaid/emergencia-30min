import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mantendo o número de Cianorte
const WHATSAPP_URL = "https://wa.me/5511925896591?text=Olá! Preciso de um serviço de desentupimento urgente!";

const CtaBanner = () => {
  return (
    // Fundo alterado para vermelho forte focado em urgência
    <section className="bg-red-600 py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 drop-shadow-sm tracking-tight">
          Não Espere o Problema Piorar!
        </h2>
        
        <p className="text-red-100 mb-8 text-lg md:text-xl font-medium max-w-2xl mx-auto">
          Quanto mais tempo, mais caro fica. Solicite agora sua <strong className="text-white font-bold">visita técnica GRATUITA</strong> e resolva hoje mesmo!
        </p>
        
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
          {/* Botão com animação de pulso para aumentar o CTR */}
          <Button 
            size="lg" 
            variant="whatsapp" 
            className="animate-pulse hover:animate-none shadow-xl shadow-green-900/30 text-base md:text-lg px-8 h-14"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Solicitar Visita Grátis pelo WhatsApp
            <ArrowRight className="w-5 h-5 ml-2 hidden sm:inline-block" />
          </Button>
        </a>

      </div>
    </section>
  );
};

export default CtaBanner;
