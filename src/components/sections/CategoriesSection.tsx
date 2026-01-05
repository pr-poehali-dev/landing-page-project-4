import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface CategoriesSectionProps {
  referralLink: string;
}

const CategoriesSection = ({ referralLink }: CategoriesSectionProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const categories = [
    { name: "💰 Финансы", count: 389, icon: "DollarSign", salary: "до 250 000 ₽", color: "bg-green-500", url: "https://ihclick.ru/?idp=314945&link=/catalog/kursy-po-finansam/" },
    { name: "📈 Маркетинг", count: 542, icon: "TrendingUp", salary: "до 180 000 ₽", color: "bg-blue-500", url: "https://ihclick.ru/?idp=314945&link=/catalog/kursy-marketinga/" },
    { name: "👥 Управление", count: 533, icon: "Users", salary: "до 200 000 ₽", color: "bg-purple-500", url: "https://ihclick.ru/?idp=314945&link=/catalog/kursy-po-upravleniyu/" },
    { name: "💼 Карьера и работа", count: 2982, icon: "Briefcase", salary: "до 150 000 ₽", color: "bg-indigo-500", url: "https://ihclick.ru/?idp=314945&link=/catalog/karera-i-rabota/" },
    { name: "🏢 Бизнес-обучение", count: 752, icon: "Building", salary: "до 300 000 ₽", color: "bg-orange-500", url: "https://ihclick.ru/?idp=314945&link=/catalog/kursy-po-biznesu/" },
    { name: "🎨 Дизайн", count: 670, icon: "Palette", salary: "до 200 000 ₽", color: "bg-pink-500", url: "https://ihclick.ru/?idp=314945&link=/catalog/dizayn/" },
    { name: "📊 Аналитика", count: 222, icon: "BarChart3", salary: "до 220 000 ₽", color: "bg-cyan-500", url: "https://ihclick.ru/?idp=314945&link=/catalog/analitika/" },
    { name: "💻 IT, разработка", count: 1097, icon: "Code2", salary: "до 350 000 ₽", color: "bg-emerald-500", url: "https://ihclick.ru/?idp=314945&link=/catalog/it-razrabotka-kursy/" },
    { name: "🧠 Психология", count: 1036, icon: "Heart", salary: "до 120 000 ₽", color: "bg-rose-500", url: "https://ihclick.ru/?idp=314945&link=/catalog/psikhologiya/" },
    { name: "✨ Личностный рост", count: 638, icon: "Sparkles", salary: "консультации", color: "bg-yellow-500", url: "https://ihclick.ru/?idp=314945&link=/catalog/lichnostnyy-rost/" },
    { name: "👗 Женские курсы", count: 542, icon: "User", salary: "до 100 000 ₽", color: "bg-fuchsia-500", url: "https://ihclick.ru/?idp=314945&link=/catalog/zhenskie-kursy/" },
    { name: "🎯 Мужские курсы", count: 81, icon: "UserSquare", salary: "до 150 000 ₽", color: "bg-slate-600", url: "https://ihclick.ru/?idp=314945&link=/catalog/muzhskie-kursy/" },
    { name: "🧒 Детям", count: 761, icon: "Baby", salary: "развитие", color: "bg-sky-400", url: "https://ihclick.ru/?idp=314945&link=/catalog/kursy-dlya-detey/" },
    { name: "🎓 Образование", count: 2155, icon: "GraduationCap", salary: "до 100 000 ₽", color: "bg-violet-500", url: "https://ihclick.ru/?idp=314945&link=/catalog/uchebnye-kursy/" },
    { name: "🌍 Иностранные языки", count: 265, icon: "Globe", salary: "до 80 000 ₽", color: "bg-teal-500", url: "https://ihclick.ru/?idp=314945&link=/catalog/inostrannye-yazyki/" },
    { name: "💚 Здоровье", count: 638, icon: "HeartPulse", salary: "до 120 000 ₽", color: "bg-lime-500", url: "https://ihclick.ru/?idp=314945&link=/catalog/zdorove/" },
    { name: "⚽ Спорт", count: 290, icon: "Activity", salary: "до 90 000 ₽", color: "bg-red-500", url: "https://ihclick.ru/?idp=314945&link=/catalog/sport/" },
    { name: "🎭 Творчество и хобби", count: 783, icon: "Paintbrush", salary: "хобби/работа", color: "bg-amber-500", url: "https://ihclick.ru/?idp=314945&link=/catalog/khobbi-i-uvlecheniya/" },
    { name: "🎵 Искусство", count: 381, icon: "Music", salary: "до 150 000 ₽", color: "bg-purple-600", url: "https://ihclick.ru/?idp=314945&link=/catalog/kursy-obshchestvo-i-nauka/" },
    { name: "🕉️ Духовные практики", count: 824, icon: "Sun", salary: "практика", color: "bg-orange-400", url: "https://ihclick.ru/?idp=314945&link=/catalog/dukhovnye-praktiki/" }
  ];

  return (
    <section id="categories" className="py-12 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://cdn.poehali.dev/projects/d946f235-e34e-46db-8e17-3468ff2dd5c5/bucket/ai-technology-research-expert-featured.jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/70 via-gray-50/60 to-gray-50/70"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">Выберите тематику</h2>
          <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-[#000000]">
            20 категорий курсов для любых целей и интересов — от IT до духовных практик
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                if (typeof window.ym !== 'undefined') {
                  window.ym(105955345, 'reachGoal', 'category_click');
                }
                if (typeof window.VK !== 'undefined' && window.VK.Retargeting) {
                  window.VK.Retargeting.Event('view_category');
                }
                window.open(category.url, '_blank');
              }}
              className={`flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-accent hover:shadow-2xl hover:scale-105 hover:bg-gradient-to-br hover:from-white hover:to-gray-50 group relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0 transition-opacity duration-500' : 'opacity-0 translate-y-8'
              }`}
              style={{ transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              <div className={`w-10 h-10 sm:w-12 sm:h-12 ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-400 relative z-10`}>
                <Icon name={category.icon as any} size={20} className="text-white sm:w-6 sm:h-6" />
              </div>
              <div className="text-center relative z-10">
                <div className="font-semibold text-foreground mb-0.5 sm:mb-1 text-sm sm:text-base">{category.name}</div>
                <div className="text-xs sm:text-sm text-blue-600 font-medium mb-1">{category.count} курсов</div>
                <div className="text-xs font-semibold text-foreground">
                  Зарплата: {category.salary}
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => {
              if (typeof window.ym !== 'undefined') {
                window.ym(105955345, 'reachGoal', 'catalog_click');
              }
              window.open(referralLink, '_blank');
            }}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white font-semibold animate-pulse-glow"
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