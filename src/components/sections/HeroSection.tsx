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
    <section className="pt-20 sm:pt-32 pb-12 sm:pb-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://cdn.poehali.dev/projects/d946f235-e34e-46db-8e17-3468ff2dd5c5/bucket/web-des.jpg" 
          alt="Background" 
          className="w-full h-full object-cover object-[center_30%] sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white"></div>
      </div>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-block px-3 sm:px-4 py-1.5 text-accent text-xs sm:text-sm font-medium rounded-full mb-4 sm:mb-6 bg-gray-200">
          Полный гид по IT-профессиям и онлайн-обучению
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 text-foreground">
          Найдите профессию<br />своей мечты
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed text-[#000000]">
          Самый полный каталог IT-курсов и профессий: 500+ специальностей, 2000+ программ обучения от ведущих онлайн-школ. 
          Подберите идеальный курс для смены карьеры или развития навыков.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => {
              if (typeof window.ym !== 'undefined') {
                window.ym(105955345, 'reachGoal', 'catalog_click');
              }
              if (typeof window.VK !== 'undefined' && window.VK.Retargeting) {
                window.VK.Retargeting.Event('view_catalog');
              }
              window.open(referralLink, '_blank');
            }}
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-white h-12 sm:h-14 px-6 sm:px-10 text-sm sm:text-base font-semibold animate-pulse-glow w-full sm:w-auto"
          >
            Перейти в каталог
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="h-12 sm:h-14 px-6 sm:px-10 text-sm sm:text-base font-semibold border-2 animate-pulse-glow w-full sm:w-auto"
            onClick={() => document.getElementById('directions')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Изучить направления
          </Button>
        </div>
        
        <div className="mt-12 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2 text-foreground">{stat.value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;