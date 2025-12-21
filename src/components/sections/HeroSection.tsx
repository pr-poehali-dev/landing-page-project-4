import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  referralLink: string;
}

const HeroSection = ({ referralLink }: HeroSectionProps) => {
  const stats = [
    { value: "500+", label: "Профессий" },
    { value: "2 000+", label: "Онлайн-курсов" },
    { value: "200+", label: "Школ и платформ" },
    { value: "100%", label: "Актуальная информация" }
  ];

  return (
    <section className="pt-32 pb-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://cdn.poehali.dev/projects/d946f235-e34e-46db-8e17-3468ff2dd5c5/files/c4af28d5-1406-496e-bd4f-0fb90fb9b66b.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white"></div>
      </div>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-6">
          Полный гид по IT-профессиям и онлайн-обучению
        </div>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
          Найдите профессию<br />своей мечты
        </h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
          Самый полный каталог IT-курсов и профессий: 500+ специальностей, 2000+ программ обучения от ведущих онлайн-школ. 
          Подберите идеальный курс для смены карьеры или развития навыков.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => window.open(referralLink, '_blank')}
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-white h-14 px-10 text-base font-semibold animate-pulse-glow"
          >
            Перейти в каталог
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="h-14 px-10 text-base font-semibold border-2 animate-pulse-glow"
            onClick={() => document.getElementById('directions')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Изучить направления
          </Button>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;