import { Clock, BadgeCheck, ShieldCheck, Wrench } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Até 30 Minutos", desc: "Chegamos rápido no local" },
  { icon: BadgeCheck, title: "Visita Grátis", desc: "Sem custo e sem compromisso" },
  { icon: ShieldCheck, title: "Garantia Total", desc: "Serviço com garantia" },
  { icon: Wrench, title: "24h / 7 Dias", desc: "Atendemos a qualquer hora" },
];

const BenefitsStrip = () => {
  return (
    <section className="bg-primary py-0 -mt-1">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-primary-foreground/10">
          {benefits.map((b) => (
            <div key={b.title} className="flex flex-col items-center text-center py-8 px-4 group hover:bg-primary-foreground/5 transition-colors">
              <b.icon className="w-10 h-10 text-accent mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-primary-foreground font-bold text-sm md:text-base">{b.title}</h3>
              <p className="text-primary-foreground/60 text-xs md:text-sm mt-1">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsStrip;
