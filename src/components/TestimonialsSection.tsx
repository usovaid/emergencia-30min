import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  { name: "Maria S.", location: "Campo Grande - MS", text: "Chegaram em 20 minutos! Resolveram o entupimento da pia rapidinho. Super recomendo!", rating: 5 },
  { name: "Carlos R.", location: "Campo Grande - MS", text: "Serviço excelente e preço justo. A visita técnica gratuita me deu muita confiança.", rating: 5 },
  { name: "Ana L.", location: "Campo Grande - MS", text: "Precisei às 2h da manhã e eles vieram! Profissionais e atenciosos. Nota 10!", rating: 5 },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted/50" id="depoimentos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-accent font-bold text-sm uppercase tracking-widest">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mt-2">
            O Que Nossos Clientes Dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name} className="bg-card border-border/50">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{t.text}"</p>
                <div>
                  <p className="font-bold text-card-foreground">{t.name}</p>
                  <p className="text-muted-foreground text-sm">{t.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
