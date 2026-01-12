import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface MobileMenuProps {
  referralLink: string;
  onFavoritesClick?: () => void;
}

const MobileMenu = ({ referralLink, onFavoritesClick }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Тематики", href: "#categories" },
    { label: "Направления", href: "#directions" },
    { label: "Примеры", href: "#examples" },
    { label: "Отзывы", href: "#reviews" },
    { label: "💗 Избранное", href: "#favorites", isButton: true },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      {/* Burger Button */}
      <button
        className="md:hidden p-2 text-foreground hover:bg-gray-100 rounded-lg transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <Icon name={isOpen ? "X" : "Menu"} size={28} />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-auto max-h-[80vh] w-48 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden rounded-bl-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 bg-slate-200">
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 p-1 text-foreground hover:bg-gray-100 rounded-lg"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <Icon name="X" size={20} />
          </button>

          {/* Menu Title */}
          <div className="text-base font-bold mb-3 text-foreground">
            Меню
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col gap-0.5">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.isButton) {
                    onFavoritesClick?.();
                    setIsOpen(false);
                  } else {
                    handleNavClick(item.href);
                  }
                }}
                className="text-sm font-semibold text-gray-900 hover:text-secondary hover:bg-gray-50 transition-colors py-2 px-2 rounded-lg"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="mt-3 pt-3 border-t border-gray-200">
            <Button 
              onClick={() => {
                if (typeof window.ym !== 'undefined') {
                  window.ym(105955345, 'reachGoal', 'catalog_click');
                }
                if (typeof window.VK !== 'undefined' && window.VK.Retargeting) {
                  window.VK.Retargeting.Event('view_catalog');
                }
                setIsOpen(false);
                window.open(referralLink, '_blank');
              }}
              size="sm"
              className="w-full bg-secondary hover:bg-secondary/90 text-white font-medium text-xs py-2"
            >
              Выбрать курс
              <Icon name="ArrowRight" className="ml-1" size={14} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;