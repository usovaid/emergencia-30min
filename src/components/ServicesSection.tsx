import { CheckCircle2 } from "lucide-react";

// Lista com os seus 6 serviços originais adaptada para receber fotos!
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
  return (
    <section className="py-20 bg-background" id="servicos">
      <div className="container mx-auto px-4">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-14">
          <span className="text-accent font-bold text-sm uppercase tracking-widest">Nossos Serviços</span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mt-2">
            Soluções Completas em Desentupimento
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Atendemos todos os tipos de entupimento com equipamentos modernos e profissionais qualificados.
          </p>
        </div>

        {/* Grid de Cartões de Serviço com Imagens */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s) => (
            <article 
              key={s.id} 
              className="group bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-border/50 flex flex-col"
            >
              {/* Área da Foto */}
              <div className="h-56 bg-accent/10 relative overflow-hidden">
                <img 
                  src={s.image} 
                  alt={`Serviço de ${s.title}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  // Imagem temporária enquanto você não sobe as oficiais
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=800&auto=format&fit=crop"; 
                  }}
                />
                {/* Degradê para deixar o texto de baixo mais legível caso queira adicionar títulos na imagem depois */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Área de Textos */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-card-foreground mb-3 leading-tight">
                  {s.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {s.desc}
                </p>
                
                {/* Palavras-chave para reforço de SEO */}
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
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
