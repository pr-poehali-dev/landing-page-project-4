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
    { name: "Татьяна Ю.", course: "HR-менеджер", time: "35 минут назад", city: "Тольятти" },
    { name: "Андрей К.", course: "iOS-разработчик", time: "4 минуты назад", city: "Краснодар" },
    { name: "Екатерина М.", course: "Android-разработчик", time: "6 минуты назад", city: "Барнаул" },
    { name: "Владимир С.", course: "Data Science", time: "9 минут назад", city: "Владивосток" },
    { name: "Алёна Р.", course: "SEO-специалист", time: "11 минут назад", city: "Иркутск" },
    { name: "Николай Т.", course: "Аналитик данных", time: "13 минут назад", city: "Хабаровск" },
    { name: "Дарья П.", course: "3D-дизайнер", time: "16 минут назад", city: "Ярославль" },
    { name: "Олег В.", course: "C++ разработчик", time: "17 минут назад", city: "Владимир" },
    { name: "Валерия Н.", course: "Motion-дизайнер", time: "20 минут назад", city: "Тула" },
    { name: "Михаил Б.", course: "Go-разработчик", time: "21 минуты назад", city: "Рязань" },
    { name: "Карина Ж.", course: "Project Manager", time: "24 минуты назад", city: "Пенза" },
    { name: "Денис А.", course: "Node.js разработчик", time: "27 минут назад", city: "Липецк" },
    { name: "Алина К.", course: "Бизнес-аналитик", time: "31 минуту назад", city: "Киров" },
    { name: "Станислав Ф.", course: "React-разработчик", time: "33 минуты назад", city: "Чебоксары" },
    { name: "Кристина Д.", course: "Scrum Master", time: "36 минут назад", city: "Калининград" },
    { name: "Вадим Г.", course: "PHP-разработчик", time: "38 минут назад", city: "Брянск" },
    { name: "Яна С.", course: "Видеомонтажёр", time: "40 минут назад", city: "Иваново" },
    { name: "Тимур Х.", course: "Unity-разработчик", time: "42 минуты назад", city: "Магнитогорск" },
    { name: "Марина Л.", course: "Иллюстратор", time: "44 минуты назад", city: "Курск" },
    { name: "Глеб Ц.", course: "Системный администратор", time: "1 час назад", city: "Сочи" },
    { name: "София Ю.", course: "Менеджер по продажам", time: "1 час назад", city: "Ставрополь" },
    { name: "Кирилл Щ.", course: "Vue.js разработчик", time: "1 час назад", city: "Улан-Удэ" },
    { name: "Полина Э.", course: "Email-маркетолог", time: "1 час назад", city: "Тверь" },
    { name: "Богдан Я.", course: "Blockchain-разработчик", time: "1 час назад", city: "Астрахань" },
    { name: "Василиса И.", course: "Редактор контента", time: "1 час назад", city: "Оренбург" },
    { name: "Арсений О.", course: "Fullstack JS разработчик", time: "1 час назад", city: "Кемерово" },
    { name: "Ксения У.", course: "Performance-маркетолог", time: "1 час назад", city: "Новокузнецк" },
    { name: "Леонид Е.", course: "Кибербезопасность", time: "1 час назад", city: "Балашиха" },
    { name: "Вероника Ё.", course: "Фотограф", time: "1 час назад", city: "Мытищи" },
    { name: "Семён Ы.", course: "Angular-разработчик", time: "1 час назад", city: "Химки" },
    { name: "Лилия Э.", course: "Бренд-менеджер", time: "2 часа назад", city: "Подольск" },
    { name: "Руслан Ю.", course: "Kubernetes администратор", time: "2 часа назад", city: "Люберцы" },
    { name: "Диана Я.", course: "Нутрициолог", time: "2 часа назад", city: "Махачкала" },
    { name: "Егор А.", course: "QA автоматизатор", time: "2 часа назад", city: "Томск" },
    { name: "Милана Б.", course: "Психолог онлайн", time: "2 часа назад", city: "Орёл" },
    { name: "Ярослав В.", course: "Flutter-разработчик", time: "2 часа назад", city: "Сургут" },
    { name: "Камила Г.", course: "Финансовый аналитик", time: "2 часа назад", city: "Вологда" },
    { name: "Матвей Д.", course: "Специалист по ИИ", time: "2 часа назад", city: "Таганрог" },
    { name: "Алиса Е.", course: "Коуч по карьере", time: "2 часа назад", city: "Нижневартовск" },
    { name: "Захар Ж.", course: "Дизайнер интерфейсов", time: "2 часа назад", city: "Якутск" }
  ];

  useEffect(() => {
    const usedIndexes = new Set<number>();
    let timeoutId: NodeJS.Timeout;
    
    const scheduleNext = () => {
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

      const nextDelay = Math.floor(Math.random() * (60000 - 40000 + 1)) + 40000;
      timeoutId = setTimeout(scheduleNext, nextDelay);
    };

    const initialDelay = setTimeout(scheduleNext, Math.floor(Math.random() * 5000) + 8000);

    return () => {
      clearTimeout(initialDelay);
      clearTimeout(timeoutId);
    };
  }, []);

  if (!currentPurchase) return null;

  return (
    <div
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-background border-2 border-black dark:border-white rounded-lg shadow-2xl p-2 sm:p-4 max-w-[calc(100vw-8rem)] sm:max-w-sm transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-[120%] opacity-0"
      }`}
      style={{ transform: isVisible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(120%)' }}
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
          <Icon name="ShoppingCart" size={16} className="text-blue-600 sm:w-5 sm:h-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-foreground text-xs sm:text-sm">{currentPurchase.name}</span>
            <span className="text-[10px] sm:text-xs text-muted-foreground">• {currentPurchase.city}</span>
          </div>
          <p className="text-[10px] sm:text-xs text-muted-foreground mb-0.5 sm:mb-1 leading-tight">
            записался на <span className="font-semibold text-blue-600">«{currentPurchase.course}»</span>
          </p>
          <div className="flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs text-muted-foreground">
            <Icon name="Clock" size={10} className="sm:w-3 sm:h-3" />
            <span>{currentPurchase.time}</span>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Icon name="X" size={14} className="sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  );
};

export default RecentPurchaseNotification;