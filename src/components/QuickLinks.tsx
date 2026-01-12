import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const QuickLinks = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { icon: "Home", label: "Главная", href: "#" },
    { icon: "Grid3x3", label: "Тематики", href: "#categories" },
    { icon: "Compass", label: "Направления", href: "#directions" },
    { icon: "Star", label: "Отзывы", href: "#reviews" },
  ];

  return (
    <>
      {/* Quick Navigation */}
      <div className="fixed bottom-56 right-4 sm:right-6 z-40 flex flex-col gap-2">
        {quickLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="group relative bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 border border-gray-200"
            title={link.label}
          >
            <Icon name={link.icon} size={20} className="text-secondary" />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {link.label}
            </span>
          </a>
        ))}
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:right-6 z-40 bg-secondary text-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 animate-bounce-slow"
          aria-label="Наверх"
        >
          <Icon name="ArrowUp" size={24} />
        </button>
      )}
    </>
  );
};

export default QuickLinks;