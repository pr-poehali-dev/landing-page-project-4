import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface CategoriesSectionProps {
  referralLink: string;
}

const CategoriesSection = ({ referralLink }: CategoriesSectionProps) => {
  const categories = [
    { name: "Финансы", count: 389, icon: "DollarSign" },
    { name: "Маркетинг", count: 542, icon: "TrendingUp" },
    { name: "Управление", count: 533, icon: "Users" },
    { name: "Карьера и работа", count: 2982, icon: "Briefcase" },
    { name: "Бизнес-обучение", count: 752, icon: "Building" },
    { name: "Дизайн", count: 670, icon: "Palette" },
    { name: "Аналитика", count: 222, icon: "BarChart3" },
    { name: "IT, разработка", count: 1097, icon: "Code2" },
    { name: "Психология", count: 1036, icon: "Heart" },
    { name: "Личностный рост", count: 638, icon: "Sparkles" },
    { name: "Женские курсы", count: 542, icon: "User" },
    { name: "Мужские курсы", count: 81, icon: "UserSquare" },
    { name: "Детям", count: 761, icon: "Baby" },
    { name: "Образование", count: 2155, icon: "GraduationCap" },
    { name: "Иностранные языки", count: 265, icon: "Globe" },
    { name: "Здоровье", count: 638, icon: "HeartPulse" },
    { name: "Спорт", count: 290, icon: "Activity" },
    { name: "Творчество и хобби", count: 783, icon: "Paintbrush" },
    { name: "Искусство", count: 381, icon: "Music" },
    { name: "Духовные практики", count: 824, icon: "Sun" }
  ];

  return (
    <section id="categories" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-foreground">Выберите тематику</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            20 категорий курсов для любых целей и интересов — от IT до духовных практик
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => window.open(referralLink, '_blank')}
              className="flex flex-col items-center gap-3 p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-accent hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Icon name={category.icon as any} size={24} className="text-accent" />
              </div>
              <div className="text-center">
                <div className="font-semibold text-foreground mb-1">{category.name}</div>
                <div className="text-sm text-muted-foreground">{category.count} курсов</div>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => window.open(referralLink, '_blank')}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white font-semibold"
          >
            Смотреть все курсы
            <Icon name="ChevronRight" className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
