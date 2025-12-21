import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  const REFERRAL_LINK = "https://example.com/ref/your-link";

  const stats = [
    { value: "15 000+", label: "Выпускников" },
    { value: "92%", label: "Трудоустроено" },
    { value: "150+", label: "Курсов" },
    { value: "4.8/5", label: "Средний рейтинг" }
  ];

  const courses = [
    {
      category: "Программирование",
      title: "Python-разработчик",
      duration: "12 месяцев",
      level: "С нуля",
      price: "5 500 ₽/мес",
      modules: "18 модулей",
      icon: "Code2",
      program: [
        "Основы Python и алгоритмы",
        "ООП и паттерны проектирования",
        "Django/Flask фреймворки",
        "Работа с базами данных",
        "REST API и микросервисы",
        "Тестирование и CI/CD"
      ]
    },
    {
      category: "Дизайн",
      title: "UX/UI дизайнер",
      duration: "10 месяцев",
      level: "С нуля",
      price: "4 900 ₽/мес",
      modules: "14 модулей",
      icon: "Palette",
      program: [
        "Основы композиции и типографики",
        "Figma и инструменты прототипирования",
        "User Research и аналитика",
        "Проектирование интерфейсов",
        "Дизайн-системы",
        "Портфолио и презентация проектов"
      ]
    },
    {
      category: "Маркетинг",
      title: "Digital-маркетолог",
      duration: "8 месяцев",
      level: "С нуля",
      price: "3 900 ₽/мес",
      modules: "12 модулей",
      icon: "TrendingUp",
      program: [
        "Основы интернет-маркетинга",
        "Контекстная и таргетированная реклама",
        "SEO и контент-маркетинг",
        "Email-маркетинг и CRM",
        "Аналитика и метрики",
        "Стратегия и бюджетирование"
      ]
    },
    {
      category: "Аналитика",
      title: "Аналитик данных",
      duration: "11 месяцев",
      level: "С нуля",
      price: "5 200 ₽/мес",
      modules: "16 модулей",
      icon: "BarChart3",
      program: [
        "SQL и работа с базами данных",
        "Python для анализа данных",
        "Статистика и A/B тестирование",
        "Визуализация данных",
        "Machine Learning основы",
        "Построение дашбордов"
      ]
    }
  ];

  const benefits = [
    {
      icon: "GraduationCap",
      title: "Экспертные преподаватели",
      description: "Обучение ведут практикующие специалисты из ведущих IT-компаний с опытом работы от 7 лет"
    },
    {
      icon: "Briefcase",
      title: "Гарантия трудоустройства",
      description: "Помощь в составлении резюме, подготовка к собеседованиям, доступ к вакансиям компаний-партнёров"
    },
    {
      icon: "Clock",
      title: "Гибкий формат обучения",
      description: "Совмещайте учёбу с работой: видеолекции доступны 24/7, живые вебинары записываются"
    },
    {
      icon: "Users",
      title: "Поддержка кураторов",
      description: "Персональный куратор на весь период обучения, проверка домашних заданий в течение 24 часов"
    },
    {
      icon: "FolderOpen",
      title: "Реальные проекты в портфолио",
      description: "5-8 готовых проектов для портфолио, работа над кейсами реальных компаний"
    },
    {
      icon: "Award",
      title: "Диплом государственного образца",
      description: "Официальный документ о профессиональной переподготовке с занесением в реестр ФИС ФРДО"
    }
  ];

  const testimonials = [
    {
      name: "Александр Морозов",
      role: "Python-разработчик в Яндекс",
      course: "Python-разработчик",
      text: "До курса работал менеджером по продажам. За год обучения получил все необходимые знания и навыки. Через 3 месяца после выпуска получил оффер в Яндекс. Зарплата выросла в 2.5 раза.",
      rating: 5
    },
    {
      name: "Мария Соколова",
      role: "UX/UI дизайнер в Сбер",
      course: "UX/UI дизайнер",
      text: "Программа курса структурирована идеально: от теории к практике. Особенно ценно, что работали над реальными проектами. Сейчас работаю в команде дизайнеров Сбера, применяю полученные знания каждый день.",
      rating: 5
    },
    {
      name: "Дмитрий Петров",
      role: "Аналитик данных в VK",
      course: "Аналитик данных",
      text: "Курс превзошёл ожидания. Преподаватели — топовые специалисты, которые делятся реальным опытом. Научился работать с большими данными, строить ML-модели. Через 2 месяца после окончания курса получил оффер в VK.",
      rating: 5
    }
  ];

  const faq = [
    {
      question: "Подойдёт ли мне курс, если я никогда не программировал?",
      answer: "Да, все наши курсы рассчитаны на обучение с нуля. Программа построена от простого к сложному, начинается с базовых понятий. Первые недели посвящены основам, чтобы все студенты вышли на один уровень."
    },
    {
      question: "Сколько времени нужно уделять обучению?",
      answer: "Рекомендуем выделять 10-15 часов в неделю: 3-4 часа на просмотр видеолекций, 5-7 часов на выполнение домашних заданий, 2-3 часа на участие в вебинарах. График гибкий — можете учиться в удобное время."
    },
    {
      question: "Как проходит трудоустройство?",
      answer: "Центр карьеры работает с вами на протяжении всего обучения: помогаем составить резюме, готовим к собеседованиям, подбираем вакансии. Проводим mock-интервью, даём обратную связь. После выпуска предоставляем доступ к базе вакансий компаний-партнёров."
    },
    {
      question: "Что, если я не смогу пройти курс?",
      answer: "Мы возвращаем деньги, если вы не удовлетворены качеством обучения в первые 2 недели. Также можем заморозить обучение на срок до 12 месяцев по уважительной причине (болезнь, декрет, командировка)."
    },
    {
      question: "Выдаётся ли документ об окончании?",
      answer: "Да, после успешного завершения курса вы получаете диплом о профессиональной переподготовке государственного образца. Все дипломы заносятся в федеральный реестр ФИС ФРДО, что подтверждает их легитимность."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight text-foreground">
            SkillHub
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#courses" className="text-muted-foreground hover:text-foreground transition-colors">Курсы</a>
            <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">Преимущества</a>
            <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">Отзывы</a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">Вопросы</a>
          </nav>
          <Button 
            onClick={() => window.open(REFERRAL_LINK, '_blank')}
            className="bg-secondary hover:bg-secondary/90 text-white font-medium"
          >
            Начать обучение
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-6">
            Онлайн-университет для IT-специалистов
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
            Освойте профессию<br />будущего
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Практические курсы от экспертов индустрии с гарантией трудоустройства. 
            Получите востребованную профессию и начните зарабатывать через 8-12 месяцев.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => window.open(REFERRAL_LINK, '_blank')}
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white h-14 px-10 text-base font-semibold"
            >
              Выбрать курс
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 px-10 text-base font-semibold border-2"
            >
              Смотреть программы
            </Button>
          </div>
          
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-foreground">Популярные направления</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите курс и получите востребованную профессию с гарантией трудоустройства
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-sm text-accent font-semibold mb-2">{course.category}</div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">{course.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" size={16} />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Signal" size={16} />
                          {course.level}
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="BookOpen" size={16} />
                          {course.modules}
                        </div>
                      </div>
                    </div>
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={course.icon as any} size={28} className="text-accent" />
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm font-semibold text-foreground mb-3">Программа курса:</div>
                    <ul className="space-y-2">
                      {course.program.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Стоимость</div>
                      <div className="text-3xl font-bold text-foreground">{course.price}</div>
                    </div>
                    <Button 
                      onClick={() => window.open(REFERRAL_LINK, '_blank')}
                      className="bg-secondary hover:bg-secondary/90 text-white"
                    >
                      Подробнее
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => window.open(REFERRAL_LINK, '_blank')}
              size="lg" 
              variant="outline"
              className="border-2 font-semibold"
            >
              Смотреть все курсы
              <Icon name="ChevronRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-foreground">Почему выбирают нас</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексный подход к обучению для достижения максимального результата
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon name={benefit.icon as any} size={24} className="text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-foreground">Истории успеха выпускников</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные отзывы студентов, которые изменили свою карьеру
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="pt-4 border-t">
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-accent mb-1">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">Курс: {testimonial.course}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => window.open(REFERRAL_LINK, '_blank')}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold"
            >
              Начать обучение
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-foreground">Частые вопросы</h2>
            <p className="text-lg text-muted-foreground">
              Ответы на основные вопросы об обучении
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 rounded-lg px-6 data-[state=open]:border-accent"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-br from-secondary to-accent">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-5xl font-bold mb-6">
            Готовы начать обучение?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Оставьте заявку и получите бесплатную консультацию по выбору курса
          </p>
          <Button 
            onClick={() => window.open(REFERRAL_LINK, '_blank')}
            size="lg"
            className="bg-white text-secondary hover:bg-gray-100 h-14 px-10 text-base font-semibold"
          >
            Записаться на курс
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
          <div className="mt-8 text-sm opacity-75">
            Первые 2 недели обучения бесплатно • Рассрочка без процентов
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold mb-4">SkillHub</div>
              <p className="text-white/70 text-sm leading-relaxed">
                Онлайн-университет для освоения востребованных IT-профессий с нуля
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
              <h5 className="font-semibold mb-4">Компания</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Преподаватели</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@skillhub.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (800) 555-35-35
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, Тверская 1
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            <p>© 2024 SkillHub. Образовательная лицензия № 123456. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
