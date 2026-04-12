import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-black text-xl mb-4">Desentupidora Rápida</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Desentupidora profissional com mais de 10 anos de experiência. Atendimento 24h com a melhor equipe da região.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <div className="space-y-3 text-primary-foreground/70 text-sm">
              <a href="tel:+554284236339" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" /> (67) 9686-0878
              </a>
              <a href="https://wa.me/554284236339" className="flex items-center gap-2 hover:text-accent transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp 24h
              </a>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> contato@desentupidorarapida.com.br
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Campo Grande e Região
              </span>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-primary-foreground/70 text-sm">
              <li>Desentupimento de esgoto</li>
              <li>Desentupimento residencial</li>
              <li>Hidrojateamento</li>
              <li>Limpa fossa</li>
              <li>Desentupimento comercial</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-primary-foreground/40 text-sm">
          © 2024 Desentupidora Rápida — Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
