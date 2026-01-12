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
      options: ["Программирование", "Дизайн", "Маркетинг", "Аналитика", "Бизнес", "Другое"]
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
            options: ["С нуля", "Есть базовые знания", "Хочу углубиться"]
          };
          setCurrentStep("programming");
        } else if (option === "Дизайн") {
          botResponse = {
            text: "Какое направление дизайна вас интересует?",
            isBot: true,
            options: ["UX/UI дизайн", "Графический дизайн", "Веб-дизайн", "3D и моушн"]
          };
          setCurrentStep("design");
        } else if (option === "Маркетинг") {
          botResponse = {
            text: "Какая область маркетинга?",
            isBot: true,
            options: ["SMM", "Таргет и реклама", "SEO", "Контент-маркетинг"]
          };
          setCurrentStep("marketing");
        } else if (option === "Аналитика") {
          botResponse = {
            text: "Какой вид аналитики?",
            isBot: true,
            options: ["Data Science", "Бизнес-аналитика", "Веб-аналитика"]
          };
          setCurrentStep("analytics");
        } else if (option === "Бизнес") {
          botResponse = {
            text: "Что вас интересует?",
            isBot: true,
            options: ["Свой бизнес", "Управление проектами", "Продажи", "Финансы"]
          };
          setCurrentStep("business");
        } else {
          botResponse = {
            text: "Давайте посмотрим все доступные направления!",
            isBot: true,
            links: [{ text: "Открыть каталог всех курсов", url: REFERRAL_LINK }]
          };
          setCurrentStep("end");
        }
      } else if (currentStep === "programming") {
        if (option === "С нуля") {
          botResponse = {
            text: "Для новичков отлично подойдут курсы программирования!",
            isBot: true,
            links: [
              { text: "Все курсы программирования", url: "https://ihclick.ru/?idp=314945&link=/catalog/programmirovanie/" }
            ]
          };
        } else if (option === "Есть базовые знания") {
          botResponse = {
            text: "Рекомендую продолжить обучение программированию!",
            isBot: true,
            links: [
              { text: "Все курсы программирования", url: "https://ihclick.ru/?idp=314945&link=/catalog/programmirovanie/" }
            ]
          };
        } else {
          botResponse = {
            text: "Для продвинутых есть специализированные курсы!",
            isBot: true,
            links: [
              { text: "Все курсы IT", url: "https://ihclick.ru/?idp=314945&link=/catalog/programmirovanie/" }
            ]
          };
        }
        setCurrentStep("end");
      } else if (currentStep === "design") {
        botResponse = {
          text: `Вот подходящие курсы по дизайну!`,
          isBot: true,
          links: [{ text: "Все курсы дизайна", url: "https://ihclick.ru/?idp=314945&link=/catalog/dizayn/" }]
        };
        setCurrentStep("end");
      } else if (currentStep === "marketing") {
        botResponse = {
          text: `Отличный выбор! Смотрите курсы по маркетингу:`,
          isBot: true,
          links: [{ text: "Все курсы маркетинга", url: "https://ihclick.ru/?idp=314945&link=/catalog/kursy-marketinga/" }]
        };
        setCurrentStep("end");
      } else if (currentStep === "analytics") {
        botResponse = {
          text: `Вот курсы по аналитике:`,
          isBot: true,
          links: [{ text: "Все курсы аналитики", url: "https://ihclick.ru/?idp=314945&link=/catalog/" }]
        };
        setCurrentStep("end");
      } else if (currentStep === "business") {
        botResponse = {
          text: `Подобрал курсы по бизнесу:`,
          isBot: true,
          links: [{ text: "Все бизнес-курсы", url: "https://ihclick.ru/?idp=314945&link=/catalog/" }]
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
              options: ["Программирование", "Дизайн", "Маркетинг", "Аналитика", "Бизнес", "Другое"]
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

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    message.isBot
                      ? "bg-white border border-gray-200 text-foreground"
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
                          className="text-xs h-8 bg-white hover:bg-blue-50 border-blue-200"
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