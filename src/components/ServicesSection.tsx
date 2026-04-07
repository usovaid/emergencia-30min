import { Droplets, Home, Building2, ShowerHead, PipetteIcon, Waves } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { icon: Droplets, title: "Desentupimento de Esgoto", desc: "Resolução rápida de entupimentos em redes de esgoto residencial e comercial." },
  { icon: Home, title: "Desentupimento Residencial", desc: "Pias, vasos sanitários, ralos e tanques. Atendimento rápido na sua casa." },
  { icon: Building2, title: "Desentupimento Comercial", desc: "Soluções para restaurantes, shoppings, condomínios e empresas." },
  { icon: ShowerHead, title: "Desentupimento de Ralo", desc: "Ralos de banheiro, cozinha e área de serviço desentupidos na hora." },
  { icon: PipetteIcon, title: "Hidrojateamento", desc: "Limpeza profunda com equipamento de alta pressão para casos difíceis." },
  { icon: Waves, title: "Limpa Fossa", desc: "Serviço completo de limpeza e esgotamento de fossas sépticas." },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background" id="servicos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-accent font-bold text-sm uppercase tracking-widest">Nossos Serviços</span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mt-2">
            Soluções Completas em Desentupimento
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Atendemos todos os tipos de entupimento com equipamentos modernos e profissionais qualificados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card key={s.title} className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border/50 bg-card">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <s.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
