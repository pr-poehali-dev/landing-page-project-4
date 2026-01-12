import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Message {
  text: string;
  isBot: boolean;
  options?: string[];
  links?: { text: string; url: string }[];
}

const CourseBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Привет! Я помогу подобрать курс. Что вас интересует?",
      isBot: true,
      options: ["Программирование", "Дизайн", "Маркетинг", "Аналитика", "Менеджмент", "Бизнес"]
    }
  ]);
  const [currentStep, setCurrentStep] = useState<string>("start");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const REFERRAL_LINK = "https://ihclick.ru/?idp=314945&link=/catalog/";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOptionClick = (option: string) => {
    setMessages(prev => [...prev, { text: option, isBot: false }]);

    setTimeout(() => {
      let botResponse: Message;

      if (currentStep === "start") {
        if (option === "Программирование") {
          botResponse = {
            text: "Отлично! Какой уровень подготовки?",
            isBot: true,
            options: ["С нуля", "Есть базовые знания", "Продвинутый уровень"]
          };
          setCurrentStep("programming_level");
        } else if (option === "Дизайн") {
          botResponse = {
            text: "Какое направление дизайна вас интересует?",
            isBot: true,
            options: ["UX/UI дизайн", "Графический дизайн", "Веб-дизайн", "3D и моушн"]
          };
          setCurrentStep("design_type");
        } else if (option === "Маркетинг") {
          botResponse = {
            text: "У вас уже есть опыт в маркетинге?",
            isBot: true,
            options: ["Да, есть опыт", "Начинаю с нуля", "Хочу сменить специализацию"]
          };
          setCurrentStep("marketing_level");
        } else if (option === "Аналитика") {
          botResponse = {
            text: "Какой уровень подготовки?",
            isBot: true,
            options: ["Новичок", "Знаю основы", "Хочу специализироваться"]
          };
          setCurrentStep("analytics_level");
        } else if (option === "Менеджмент") {
          botResponse = {
            text: "Какая область менеджмента интересует?",
            isBot: true,
            options: ["Управление проектами", "Продакт-менеджмент", "Agile/Scrum", "Управление командой"]
          };
          setCurrentStep("management_type");
        } else if (option === "Бизнес") {
          botResponse = {
            text: "Что вас интересует в бизнесе?",
            isBot: true,
            options: ["Свой бизнес", "Продажи", "Финансы", "E-commerce"]
          };
          setCurrentStep("business_type");
        } else {
          botResponse = {
            text: "Давайте посмотрим все доступные направления!",
            isBot: true,
            links: [{ text: "Открыть каталог всех курсов", url: REFERRAL_LINK }]
          };
          setCurrentStep("end");
        }
      } else if (currentStep === "programming_level") {
        if (option === "С нуля") {
          botResponse = {
            text: "Какое направление программирования интересует?",
            isBot: true,
            options: ["Python", "JavaScript/Frontend", "Java", "Mobile", "Смотреть все"]
          };
          setCurrentStep("programming_beginner");
        } else if (option === "Есть базовые знания") {
          botResponse = {
            text: "Хотите развиваться в направлении:",
            isBot: true,
            options: ["Backend", "Frontend", "Full Stack", "DevOps", "Смотреть все"]
          };
          setCurrentStep("programming_intermediate");
        } else {
          botResponse = {
            text: "Выберите специализацию:",
            isBot: true,
            options: ["Архитектура", "ML/AI", "Blockchain", "Highload", "Смотреть все"]
          };
          setCurrentStep("programming_advanced");
        }
      } else if (currentStep === "programming_beginner" || currentStep === "programming_intermediate" || currentStep === "programming_advanced") {
        botResponse = {
          text: option === "Смотреть все" ? "Все курсы программирования:" : `Курсы по ${option}:`,
          isBot: true,
          links: [{ text: "Открыть курсы программирования", url: "https://ihclick.ru/?idp=314945&link=/catalog/programmirovanie/" }]
        };
        setCurrentStep("end");
      } else if (currentStep === "design_type") {
        if (option === "UX/UI дизайн") {
          botResponse = {
            text: "Ваш опыт в дизайне?",
            isBot: true,
            options: ["Начинаю с нуля", "Уже делаю макеты", "Хочу в продукт", "Смотреть все"]
          };
          setCurrentStep("design_ux");
        } else if (option === "Графический дизайн") {
          botResponse = {
            text: "Что хотите изучить?",
            isBot: true,
            options: ["Логотипы", "Иллюстрация", "Полиграфия", "Смотреть все"]
          };
          setCurrentStep("design_graphic");
        } else if (option === "Веб-дизайн") {
          botResponse = {
            text: "Интересует дизайн или код?",
            isBot: true,
            options: ["Только дизайн", "Дизайн + HTML/CSS", "Смотреть все"]
          };
          setCurrentStep("design_web");
        } else {
          botResponse = {
            text: "3D или анимация?",
            isBot: true,
            options: ["3D-моделирование", "Моушн-дизайн", "After Effects", "Смотреть все"]
          };
          setCurrentStep("design_3d");
        }
      } else if (currentStep === "design_ux" || currentStep === "design_graphic" || currentStep === "design_web" || currentStep === "design_3d") {
        botResponse = {
          text: option === "Смотреть все" ? "Все курсы дизайна:" : `Курсы по ${option}:`,
          isBot: true,
          links: [{ text: "Открыть курсы дизайна", url: "https://ihclick.ru/?idp=314945&link=/catalog/dizayn/" }]
        };
        setCurrentStep("end");
      } else if (currentStep === "marketing_level") {
        if (option === "Да, есть опыт") {
          botResponse = {
            text: "Хотите углубиться в:",
            isBot: true,
            options: ["Performance", "Аналитику", "Стратегию", "Смотреть все"]
          };
          setCurrentStep("marketing_experienced");
        } else if (option === "Начинаю с нуля") {
          botResponse = {
            text: "Какое направление интересует?",
            isBot: true,
            options: ["SMM", "Таргет", "SEO", "Контент", "Смотреть все"]
          };
          setCurrentStep("marketing_beginner");
        } else {
          botResponse = {
            text: "Куда хотите переключиться?",
            isBot: true,
            options: ["Из SEO в контекст", "Из SMM в таргет", "В аналитику", "Смотреть все"]
          };
          setCurrentStep("marketing_switch");
        }
      } else if (currentStep === "marketing_experienced" || currentStep === "marketing_beginner" || currentStep === "marketing_switch") {
        botResponse = {
          text: option === "Смотреть все" ? "Все курсы маркетинга:" : `Курсы: ${option}`,
          isBot: true,
          links: [{ text: "Открыть курсы маркетинга", url: "https://ihclick.ru/?idp=314945&link=/catalog/kursy-marketinga/" }]
        };
        setCurrentStep("end");
      } else if (currentStep === "analytics_level") {
        if (option === "Новичок") {
          botResponse = {
            text: "С чего хотите начать?",
            isBot: true,
            options: ["Excel и BI", "SQL", "Python", "Комплексно", "Смотреть все"]
          };
          setCurrentStep("analytics_beginner");
        } else if (option === "Знаю основы") {
          botResponse = {
            text: "Куда двигаться дальше?",
            isBot: true,
            options: ["Data Science", "Бизнес-аналитика", "ML/AI", "Смотреть все"]
          };
          setCurrentStep("analytics_intermediate");
        } else {
          botResponse = {
            text: "Выберите специализацию:",
            isBot: true,
            options: ["Machine Learning", "Big Data", "Deep Learning", "Смотреть все"]
          };
          setCurrentStep("analytics_advanced");
        }
      } else if (currentStep === "analytics_beginner" || currentStep === "analytics_intermediate" || currentStep === "analytics_advanced") {
        botResponse = {
          text: option === "Смотреть все" ? "Все курсы аналитики:" : `Курсы: ${option}`,
          isBot: true,
          links: [{ text: "Открыть курсы аналитики", url: "https://ihclick.ru/?idp=314945&link=/catalog/data-science-kursy/" }]
        };
        setCurrentStep("end");
      } else if (currentStep === "management_type") {
        if (option === "Управление проектами") {
          botResponse = {
            text: "Опыт в управлении?",
            isBot: true,
            options: ["Новичок", "Есть опыт", "Хочу PMI", "Смотреть все"]
          };
          setCurrentStep("management_pm");
        } else if (option === "Продакт-менеджмент") {
          botResponse = {
            text: "Специализация?",
            isBot: true,
            options: ["IT-продукты", "Digital", "С нуля", "Смотреть все"]
          };
          setCurrentStep("management_product");
        } else if (option === "Agile/Scrum") {
          botResponse = {
            text: "Цель обучения?",
            isBot: true,
            options: ["Scrum Master", "Product Owner", "Общее понимание", "Смотреть все"]
          };
          setCurrentStep("management_agile");
        } else {
          botResponse = {
            text: "Размер команды?",
            isBot: true,
            options: ["До 10 человек", "10-50 человек", "Крупная компания", "Смотреть все"]
          };
          setCurrentStep("management_team");
        }
      } else if (currentStep === "management_pm" || currentStep === "management_product" || currentStep === "management_agile" || currentStep === "management_team") {
        botResponse = {
          text: option === "Смотреть все" ? "Все курсы менеджмента:" : `Курсы: ${option}`,
          isBot: true,
          links: [{ text: "Открыть курсы управления", url: "https://ihclick.ru/?idp=314945&link=/catalog/kursy-po-upravleniyu/" }]
        };
        setCurrentStep("end");
      } else if (currentStep === "business_type") {
        if (option === "Свой бизнес") {
          botResponse = {
            text: "На какой стадии проект?",
            isBot: true,
            options: ["Только идея", "Запускаю", "Уже работает", "Смотреть все"]
          };
          setCurrentStep("business_own");
        } else if (option === "Продажи") {
          botResponse = {
            text: "Какие продажи?",
            isBot: true,
            options: ["B2B", "B2C", "Онлайн", "Смотреть все"]
          };
          setCurrentStep("business_sales");
        } else if (option === "Финансы") {
          botResponse = {
            text: "Что интересует?",
            isBot: true,
            options: ["Анализ", "Инвестиции", "Бухгалтерия", "Смотреть все"]
          };
          setCurrentStep("business_finance");
        } else {
          botResponse = {
            text: "Какой маркетплейс?",
            isBot: true,
            options: ["Wildberries", "Ozon", "Все площадки", "Свой магазин"]
          };
          setCurrentStep("business_ecommerce");
        }
      } else if (currentStep === "business_own" || currentStep === "business_sales" || currentStep === "business_finance" || currentStep === "business_ecommerce") {
        botResponse = {
          text: option.includes("Смотреть") || option.includes("Все") ? "Все бизнес-курсы:" : `Курсы: ${option}`,
          isBot: true,
          links: [{ text: "Открыть бизнес-курсы", url: "https://ihclick.ru/?idp=314945&link=/catalog/kursy-po-biznesu/" }]
        };
        setCurrentStep("end");
      } else {
        botResponse = {
          text: "Могу помочь ещё чем-то?",
          isBot: true,
          options: ["Подобрать другой курс", "Нет, спасибо"]
        };
        setCurrentStep("restart");
      }

      setMessages(prev => [...prev, botResponse]);
    }, 800);

    if (currentStep === "restart") {
      if (option === "Подобрать другой курс") {
        setTimeout(() => {
          setMessages([
            {
              text: "Отлично! Что вас интересует?",
              isBot: true,
              options: ["Программирование", "Дизайн", "Маркетинг", "Аналитика", "Менеджмент", "Бизнес"]
            }
          ]);
          setCurrentStep("start");
        }, 1000);
      } else {
        setTimeout(() => {
          setMessages(prev => [
            ...prev,
            { text: "Удачи в обучении! Пишите, если понадоблюсь 👋", isBot: true }
          ]);
        }, 1000);
      }
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 right-2 sm:right-4 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl flex items-center justify-center animate-bounce-slow"
      >
        {isOpen ? (
          <Icon name="X" size={20} className="text-white sm:w-6 sm:h-6" />
        ) : (
          <Icon name="MessageCircle" size={20} className="text-white sm:w-6 sm:h-6" />
        )}
      </Button>

      {isOpen && (
        <Card className="fixed bottom-36 right-2 sm:right-4 z-50 w-[calc(100vw-1.5rem)] sm:w-96 h-[400px] sm:h-[500px] shadow-2xl border-2 flex flex-col">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Icon name="Bot" size={20} className="text-blue-600" />
              </div>
              <div>
                <div className="font-bold text-white">Бот-помощник</div>
                <div className="text-xs text-white/80">Подберу курс за минуту</div>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    message.isBot
                      ? "bg-card border border-border text-foreground"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>

                  {message.options && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {message.options.map((option, i) => (
                        <Button
                          key={i}
                          onClick={() => handleOptionClick(option)}
                          size="sm"
                          variant="outline"
                          className="text-xs h-8 bg-card hover:bg-blue-50 dark:hover:bg-blue-900/30 border-blue-200 dark:border-blue-800"
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  )}

                  {message.links && (
                    <div className="flex flex-col gap-2 mt-3">
                      {message.links.map((link, i) => (
                        <Button
                          key={i}
                          onClick={() => {
                            if (typeof window.ym !== 'undefined') {
                              window.ym(105955345, 'reachGoal', 'bot_click');
                            }
                            window.open(link.url, '_blank');
                          }}
                          size="sm"
                          className="text-xs h-9 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                        >
                          {link.text}
                          <Icon name="ExternalLink" size={14} className="ml-1" />
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </Card>
      )}
    </>
  );
};

export default CourseBot;