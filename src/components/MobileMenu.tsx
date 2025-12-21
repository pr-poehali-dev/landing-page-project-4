import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface MobileMenuProps {
  referralLink: string;
}

const MobileMenu = ({ referralLink }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Тематики", href: "#categories" },
    { label: "Направления", href: "#directions" },
    { label: "Примеры", href: "#examples" },
    { label: "Отзывы", href: "#reviews" },
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
        className="md:hidden p-2 text-foreground"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <Icon name={isOpen ? "X" : "Menu"} size={24} />
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
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 p-2 text-foreground"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <Icon name="X" size={24} />
          </button>

          {/* Menu Title */}
          <div className="text-xl font-bold mb-8 text-foreground">
            Меню
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <Button 
              onClick={() => {
                setIsOpen(false);
                window.open(referralLink, '_blank');
              }}
              className="w-full bg-secondary hover:bg-secondary/90 text-white font-medium"
            >
              Выбрать курс
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
