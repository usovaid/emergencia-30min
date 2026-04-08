import { CheckCircle2, MessageCircle } from "lucide-react";

const services = [
  { 
    id: 1, 
    title: "Desentupimento de Esgoto", 
    desc: "Resolução rápida de entupimentos em redes de esgoto residencial e comercial.",
    image: "/placeholder-esgoto.jpg",
    keywords: ["Tubulação Central", "Sem Quebra", "Rápido"]
  },
  { 
    id: 2, 
    title: "Desentupimento Residencial", 
    desc: "Pias, vasos sanitários, ralos e tanques. Atendimento rápido na sua casa.",
    image: "/placeholder-residencial.jpg",
    keywords: ["Pias e Ralos", "Vasos Sanitários", "Limpeza"]
  },
  { 
    id: 3, 
    title: "Desentupimento Comercial", 
    desc: "Soluções para restaurantes, shoppings, condomínios e empresas.",
    image: "/placeholder-comercial.jpg",
    keywords: ["Restaurantes", "Condomínios", "Empresas"]
  },
  { 
    id: 4, 
    title: "Desentupimento de Ralo", 
    desc: "Ralos de banheiro, cozinha e área de serviço desentupidos na hora.",
    image: "/placeholder-ralo.jpg",
    keywords: ["Banheiros", "Cozinhas", "Área Externa"]
  },
  { 
    id: 5, 
    title: "Hidrojateamento", 
    desc: "Limpeza profunda com equipamento de alta pressão para casos difíceis.",
    image: "/placeholder-hidro.jpg",
    keywords: ["Alta Pressão", "Limpeza Profunda", "Casos Graves"]
  },
  { 
    id: 6, 
    title: "Limpa Fossa", 
    desc: "Serviço completo de limpeza e esgotamento de fossas sépticas.",
    image: "/placeholder-fossa.jpg",
    keywords: ["Esgotamento", "Limpeza Completa", "Caminhão Sugador"]
  },
];

const ServicesSection = () => {
  // Seu número principal
  const phoneNumber = "554284236339";

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s) => {
            // MÁGICA AQUI: Gera a mensagem personalizada com o nome do serviço
            const zapMessage = encodeURIComponent(`Olá! Preciso de um serviço de ${s.title} urgente!`);
            const zapUrl = `https://wa.me/${phoneNumber}?text=${zapMessage}`;

            return (
              <article 
                key={s.id} 
                className="group bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-border/50 flex flex-col"
              >
                {/* Transformamos a área da foto inteira em uma tag <a> 
                  O target="_blank" garante que o WhatsApp abra em outra aba e o cliente não perca o site
                */}
                <a 
                  href={zapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block h-56 bg-accent/10 relative overflow-hidden group/img cursor-pointer"
                  title={`Solicitar ${s.title} pelo WhatsApp`}
                >
                  <img 
                    src={s.image} 
                    alt={`Serviço de ${s.title}`}
                    className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=800&auto=format&fit=crop"; 
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Badge visual do WhatsApp no canto da foto */}
                  <div className="absolute bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold shadow-lg shadow-green-900/30 group-hover/img:scale-105 group-hover/img:bg-green-400 transition-all">
                    <MessageCircle className="w-4 h-4 fill-current" />
                    Agendar
                  </div>
                </a>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-card-foreground mb-3 leading-tight">
                    {s.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                    {s.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                    {s.keywords.map((keyword, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center gap-1.5 bg-accent/10 text-accent text-xs font-bold px-3 py-1.5 rounded-full"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
