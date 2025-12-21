import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface QuickLinksRSYAProps {
  referralLink: string;
}

const QuickLinksRSYA = ({ referralLink }: QuickLinksRSYAProps) => {
  const links = [
    { 
      title: "Программирование", 
      url: `${referralLink}programmirovanie/`,
      icon: "Code2"
    },
    { 
      title: "Дизайн", 
      url: `${referralLink}dizajn/`,
      icon: "Palette"
    },
    { 
      title: "Маркетинг", 
      url: `${referralLink}marketing/`,
      icon: "TrendingUp"
    },
    { 
      title: "Аналитика", 
      url: `${referralLink}analitika/`,
      icon: "BarChart3"
    },
    { 
      title: "Менеджмент", 
      url: `${referralLink}menedzhment/`,
      icon: "Briefcase"
    },
    { 
      title: "Игры", 
      url: `${referralLink}razrabotka-igr/`,
      icon: "Gamepad2"
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Популярные направления обучения
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Быстрый переход к курсам по самым востребованным IT-специальностям
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {links.map((link, index) => (
            <Button
              key={index}
              onClick={() => window.open(link.url, '_blank')}
              variant="outline"
              className="h-auto flex flex-col items-center gap-3 p-4 sm:p-6 bg-white hover:bg-secondary/5 hover:border-secondary transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <Icon name={link.icon} size={24} className="text-secondary" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-foreground text-center leading-tight">
                {link.title}
              </span>
            </Button>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <Button
            onClick={() => window.open(referralLink, '_blank')}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 sm:px-10 h-12 sm:h-14 text-base sm:text-lg"
          >
            Смотреть все курсы
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Более 2000 курсов • Сравнение цен • Реальные отзывы
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuickLinksRSYA;
