import ProductCard from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";

// Mock data - em produção viria do Supabase
const mockProducts = [
  {
    id: 1,
    name: "Blazer Oversized Premium",
    price: 899,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
    category: "Feminino",
    isNew: false,
    isSale: true
  },
  {
    id: 2,
    name: "Vestido Midi Elegante",
    price: 649,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
    category: "Feminino",
    isNew: true,
    isSale: false
  },
  {
    id: 3,
    name: "Camisa Social Luxo",
    price: 459,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400",
    category: "Masculino",
    isNew: false,
    isSale: false
  },
  {
    id: 4,
    name: "Casaco de Lã Premium",
    price: 1299,
    originalPrice: 1899,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400",
    category: "Masculino",
    isNew: false,
    isSale: true
  },
  {
    id: 5,
    name: "Saia Plissada Elegante",
    price: 389,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d76?w=400",
    category: "Feminino",
    isNew: true,
    isSale: false
  },
  {
    id: 6,
    name: "Terno Completo Slim",
    price: 1899,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    category: "Masculino",
    isNew: false,
    isSale: false
  },
  {
    id: 7,
    name: "Bolsa de Couro Premium",
    price: 749,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400",
    category: "Acessórios",
    isNew: false,
    isSale: true
  },
  {
    id: 8,
    name: "Sapato Social Italiano",
    price: 899,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
    category: "Calçados",
    isNew: true,
    isSale: false
  }
];

const ProductGrid = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-elegant bg-clip-text text-transparent">
              Coleção Premium
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Peças cuidadosamente selecionadas para compor o seu guarda-roupa dos sonhos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            variant="elegant"
            size="lg"
            className="px-8 py-4 text-lg"
          >
            Ver Toda Coleção
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;