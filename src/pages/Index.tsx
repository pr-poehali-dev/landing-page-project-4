import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import HeroSection from "@/components/sections/HeroSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import ContentSections from "@/components/sections/ContentSections";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

const Index = () => {
  const REFERRAL_LINK = "https://ihclick.ru/?idp=314945&link=/catalog/";

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <div className="text-base sm:text-xl font-bold tracking-tight text-foreground">
            Энциклопедия Профессий
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#categories" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110">Тематики</a>
            <a href="#directions" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110">Направления</a>
            <a href="#examples" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110">Примеры</a>
            <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110">Отзывы</a>
          </nav>
          <Button 
            onClick={() => window.open(REFERRAL_LINK, '_blank')}
            className="bg-secondary hover:bg-secondary/90 text-white font-medium animate-pulse-glow text-xs sm:text-sm px-3 sm:px-4 h-9 sm:h-10"
          >
            Выбрать курс
          </Button>
        </div>
      </header>

      <HeroSection referralLink={REFERRAL_LINK} />
      <CategoriesSection referralLink={REFERRAL_LINK} />
      <ContentSections referralLink={REFERRAL_LINK} />
      <TestimonialsSection referralLink={REFERRAL_LINK} />

      <footer className="bg-foreground text-white py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div>
              <div className="text-xl font-bold mb-4">Энциклопедия Профессий</div>
              <p className="text-white/70 text-sm leading-relaxed">
                Полный гид по IT-профессиям и онлайн-обучению. Более 2000 курсов от проверенных школ.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Направления</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Программирование</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Дизайн</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Маркетинг</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Аналитика</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Ресурсы</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Обзоры школ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сравнение курсов</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьерный гид</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@edu-pro.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} />
                  Поддержка 24/7
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            <p>© 2024 Энциклопедия Профессий. Информационный портал о современных профессиях и онлайн-образовании.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;