import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/554284236339?text=Olá! Preciso de um serviço de desentupimento urgente!";

const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-whatsapp flex items-center justify-center shadow-whatsapp animate-pulse-urgent hover:bg-whatsapp-hover transition-colors"
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-whatsapp-foreground" />
    </a>
  );
};

export default FloatingWhatsApp;
