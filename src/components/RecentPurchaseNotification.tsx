import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface Purchase {
  name: string;
  course: string;
  time: string;
  city: string;
}

const RecentPurchaseNotification = () => {
  const [currentPurchase, setCurrentPurchase] = useState<Purchase | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const purchases: Purchase[] = [
    { name: "Александр М.", course: "Python-разработчик", time: "2 минуты назад", city: "Москва" },
    { name: "Мария К.", course: "UX/UI дизайнер", time: "5 минут назад", city: "Санкт-Петербург" },
    { name: "Дмитрий В.", course: "Frontend-разработчик", time: "8 минут назад", city: "Новосибирск" },
    { name: "Елена С.", course: "Digital-маркетолог", time: "12 минут назад", city: "Екатеринбург" },
    { name: "Игорь П.", course: "Data Analyst", time: "15 минут назад", city: "Казань" },
    { name: "Анна Л.", course: "Графический дизайн", time: "18 минут назад", city: "Нижний Новгород" },
    { name: "Сергей Т.", course: "SMM-специалист", time: "22 минуты назад", city: "Краснодар" },
    { name: "Ольга Б.", course: "Веб-дизайнер", time: "25 минут назад", city: "Самара" },
    { name: "Максим Р.", course: "Java-разработчик", time: "28 минут назад", city: "Ростов-на-Дону" },
    { name: "Виктория Н.", course: "Контент-маркетолог", time: "30 минут назад", city: "Воронеж" },
    { name: "Артём Ш.", course: "Full Stack разработчик", time: "3 минуты назад", city: "Уфа" },
    { name: "Наталья Г.", course: "Таргетолог", time: "7 минут назад", city: "Челябинск" },
    { name: "Павел З.", course: "DevOps инженер", time: "10 минут назад", city: "Омск" },
    { name: "Ирина Ф.", course: "Копирайтер", time: "14 минут назад", city: "Пермь" },
    { name: "Константин Д.", course: "Backend-разработчик", time: "19 минут назад", city: "Красноярск" },
    { name: "Юлия А.", course: "Интернет-маркетолог", time: "23 минуты назад", city: "Волгоград" },
    { name: "Роман Л.", course: "ML-инженер", time: "26 минут назад", city: "Саратов" },
    { name: "Светлана П.", course: "Продакт-менеджер", time: "29 минут назад", city: "Тюмень" },
    { name: "Евгений Х.", course: "Тестировщик ПО", time: "32 минуты назад", city: "Ижевск" },
    { name: "Татьяна Ю.", course: "HR-менеджер", time: "35 минут назад", city: "Тольятти" }
  ];

  useEffect(() => {
    const usedIndexes = new Set<number>();
    
    const showNotification = () => {
      if (usedIndexes.size === purchases.length) {
        usedIndexes.clear();
      }
      
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * purchases.length);
      } while (usedIndexes.has(randomIndex));
      
      usedIndexes.add(randomIndex);
      
      const randomPurchase = purchases[randomIndex];
      setCurrentPurchase(randomPurchase);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 6000);
    };

    const initialDelay = setTimeout(showNotification, 5000);

    const interval = setInterval(() => {
      showNotification();
    }, 25000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  if (!currentPurchase) return null;

  return (
    <div
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-white border-2 border-blue-500 rounded-lg shadow-2xl p-4 max-w-sm transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-[120%] opacity-0"
      }`}
      style={{ transform: isVisible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(120%)' }}
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
          <Icon name="ShoppingCart" size={20} className="text-blue-600" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-foreground text-sm">{currentPurchase.name}</span>
            <span className="text-xs text-muted-foreground">• {currentPurchase.city}</span>
          </div>
          <p className="text-xs text-muted-foreground mb-1">
            записался на курс <span className="font-semibold text-blue-600">«{currentPurchase.course}»</span>
          </p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Icon name="Clock" size={12} />
            <span>{currentPurchase.time}</span>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Icon name="X" size={16} />
        </button>
      </div>
    </div>
  );
};

export default RecentPurchaseNotification;