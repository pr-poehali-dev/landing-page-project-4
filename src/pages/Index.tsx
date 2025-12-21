import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  const REFERRAL_LINK = "https://ihclick.ru/?idp=314945&link=/catalog/";

  const stats = [
    { value: "500+", label: "Профессий" },
    { value: "2 000+", label: "Онлайн-курсов" },
    { value: "200+", label: "Школ и платформ" },
    { value: "100%", label: "Актуальная информация" }
  ];

  const directions = [
    {
      title: "Программирование и разработка",
      description: "От основ до продвинутых технологий: веб, мобильная разработка, backend, frontend, DevOps",
      icon: "Code2",
      skills: ["Python", "JavaScript", "React", "Node.js", "SQL", "Git"]
    },
    {
      title: "Дизайн и креатив",
      description: "UX/UI дизайн, графический дизайн, моушн-дизайн, 3D-моделирование, веб-дизайн",
      icon: "Palette",
      skills: ["Figma", "Adobe Suite", "Sketch", "Blender", "Cinema 4D"]
    },
    {
      title: "Маркетинг и продвижение",
      description: "Digital-маркетинг, SMM, SEO, контент-маркетинг, таргетированная реклама",
      icon: "TrendingUp",
      skills: ["Яндекс.Директ", "Google Ads", "Аналитика", "Контент", "Стратегия"]
    },
    {
      title: "Аналитика и работа с данными",
      description: "Анализ данных, бизнес-аналитика, машинное обучение, Big Data, визуализация",
      icon: "BarChart3",
      skills: ["SQL", "Python", "Excel", "Power BI", "Tableau"]
    },
    {
      title: "Менеджмент и управление",
      description: "Управление проектами, продакт-менеджмент, управление командой, Agile, Scrum",
      icon: "Users",
      skills: ["Jira", "Confluence", "Методологии", "Лидерство", "Планирование"]
    },
    {
      title: "Бизнес и предпринимательство",
      description: "Создание и развитие бизнеса, финансы, продажи, e-commerce, инвестиции",
      icon: "Briefcase",
      skills: ["Стратегия", "Финансы", "Продажи", "Маркетплейсы", "Автоматизация"]
    }
  ];

  const portfolioExamples = [
    {
      direction: "Программирование",
      examples: [
        { title: "Интернет-магазин на React", tech: "React, Node.js, MongoDB" },
        { title: "Мобильное приложение для iOS", tech: "Swift, Firebase" },
        { title: "CRM-система для бизнеса", tech: "Python, Django, PostgreSQL" }
      ]
    },
    {
      direction: "Дизайн",
      examples: [
        { title: "Редизайн корпоративного сайта", tech: "Figma, UI/UX" },
        { title: "Брендинг и фирменный стиль", tech: "Adobe Illustrator" },
        { title: "Анимированная инфографика", tech: "After Effects" }
      ]
    },
    {
      direction: "Маркетинг",
      examples: [
        { title: "Продвижение стартапа с нуля", tech: "SEO, Контекст, SMM" },
        { title: "Увеличение продаж на 300%", tech: "Таргет, Аналитика" },
        { title: "Запуск email-рассылки", tech: "Automation, CRM" }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Алексей Соколов",
      direction: "Frontend-разработчик",
      course: "Курс по React и современному JavaScript",
      text: "Полностью сменил профессию за 10 месяцев. Курс дал все необходимые знания: от HTML/CSS до сложных React-приложений. Сейчас работаю в продуктовой компании с зарплатой 180к. Лучшее вложение в себя!",
      rating: 5,
      photo: "👨‍💻",
      salary: "180 000 ₽"
    },
    {
      name: "Мария Новикова",
      direction: "UX/UI дизайнер",
      course: "Профессия UX/UI дизайнер с нуля",
      text: "До курса работала администратором. Прошла обучение за 8 месяцев, собрала портфолио из 6 проектов. Через месяц после выпуска получила оффер в дизайн-студию. Зарплата выросла в 3 раза!",
      rating: 5,
      photo: "👩‍🎨",
      salary: "150 000 ₽"
    },
    {
      name: "Дмитрий Волков",
      direction: "Digital-маркетолог",
      course: "Интернет-маркетолог от А до Я",
      text: "Курс структурирован идеально: теория сразу закрепляется практикой. Изучил все инструменты: от контекста до email-маркетинга. Сейчас веду 5 проектов как фрилансер, доход от 200к в месяц.",
      rating: 5,
      photo: "👨‍💼",
      salary: "200 000+ ₽"
    },
    {
      name: "Екатерина Морозова",
      direction: "Python-разработчик",
      course: "Python-разработчик с нуля до middle",
      text: "Преподаватели — практики из топовых компаний. Разбирали реальные кейсы, писали код каждый день. За время обучения создала 8 проектов для портфолио. Устроилась в IT-компанию junior разработчиком.",
      rating: 5,
      photo: "👩‍💻",
      salary: "120 000 ₽"
    },
    {
      name: "Игорь Петров",
      direction: "Аналитик данных",
      course: "Data Analyst: аналитика и визуализация",
      text: "Научился работать с SQL, Python, строить дашборды в Power BI. Курс дал понимание, как превращать сырые данные в бизнес-решения. Перешёл из продаж в аналитику, зарплата +100% к прежней.",
      rating: 5,
      photo: "👨‍🔬",
      salary: "160 000 ₽"
    },
    {
      name: "Анна Сидорова",
      direction: "Графический дизайнер",
      course: "Графический дизайн и иллюстрация",
      text: "Освоила Adobe Illustrator, Photoshop, научилась создавать иллюстрации с нуля. Преподаватели давали подробную обратную связь по каждой работе. Сейчас работаю с крупными брендами, средний чек проекта 50к.",
      rating: 5,
      photo: "👩‍🎨",
      salary: "~200 000 ₽"
    }
  ];

  const benefits = [
    {
      icon: "Target",
      title: "Полная база знаний о профессиях",
      description: "Вся информация о востребованных IT-специальностях, навыках, зарплатах и перспективах карьерного роста в одном месте"
    },
    {
      icon: "Search",
      title: "Подбор идеального курса",
      description: "Сравнение программ обучения от 200+ школ по всем параметрам: цена, срок, формат, отзывы реальных выпускников"
    },
    {
      icon: "Award",
      title: "Проверенные школы и платформы",
      description: "Только аккредитованные образовательные учреждения с подтверждённым качеством обучения и высоким процентом трудоустройства"
    },
    {
      icon: "TrendingUp",
      title: "Актуальные программы 2024",
      description: "Курсы обновляются каждый квартал в соответствии с требованиями рынка и новыми технологиями"
    },
    {
      icon: "Users",
      title: "Истории успеха выпускников",
      description: "Реальные кейсы людей, которые сменили профессию: с чего начинали, сколько зарабатывают сейчас"
    },
    {
      icon: "BookOpen",
      title: "Экспертные обзоры и советы",
      description: "Гайды по выбору профессии, подробные разборы направлений, рекомендации от практикующих специалистов"
    }
  ];

  const faq = [
    {
      question: "Как выбрать подходящий курс и направление?",
      answer: "Мы собрали подробные описания всех востребованных IT-профессий с указанием необходимых навыков, уровня зарплат и перспектив. Пройдите тест на профориентацию или изучите обзоры направлений. Сравните программы разных школ по срокам, цене и отзывам выпускников."
    },
    {
      question: "Сколько времени нужно на обучение?",
      answer: "Срок зависит от направления и вашего начального уровня. Базовые курсы длятся 3-6 месяцев при нагрузке 10-15 часов в неделю. Полноценная профессиональная переподготовка занимает 8-12 месяцев. Интенсивные программы можно пройти за 2-4 месяца."
    },
    {
      question: "Можно ли учиться с нуля без опыта?",
      answer: "Да, большинство курсов в каталоге рассчитаны на обучение с нуля. Программы начинаются с базовых понятий и постепенно углубляются. Для старта не требуются знания программирования или дизайна — только желание учиться и время на практику."
    },
    {
      question: "Как проверить качество курса перед покупкой?",
      answer: "На платформе вы найдёте детальные обзоры программ, отзывы реальных выпускников с указанием результатов трудоустройства. Проверяйте наличие пробных уроков, гарантии возврата денег в первые недели, процент трудоустройства выпускников. Обращайте внимание на актуальность программы и опыт преподавателей."
    },
    {
      question: "Помогают ли школы с трудоустройством?",
      answer: "Ведущие школы предоставляют помощь центра карьеры: составление резюме, подготовка к собеседованиям, доступ к вакансиям компаний-партнёров. Процент трудоустройства указан в описании каждого курса. Многие школы предлагают стажировки и гарантию трудоустройства."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight text-foreground">
            Энциклопедия Профессий
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#directions" className="text-muted-foreground hover:text-foreground transition-colors">Направления</a>
            <a href="#examples" className="text-muted-foreground hover:text-foreground transition-colors">Примеры работ</a>
            <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">Отзывы</a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">Вопросы</a>
          </nav>
          <Button 
            onClick={() => window.open(REFERRAL_LINK, '_blank')}
            className="bg-secondary hover:bg-secondary/90 text-white font-medium"
          >
            Выбрать курс
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-6">
            Полный гид по IT-профессиям и онлайн-обучению
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
            Найдите профессию<br />своей мечты
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Самый полный каталог IT-курсов и профессий: 500+ специальностей, 2000+ программ обучения от ведущих онлайн-школ. 
            Подберите идеальный курс для смены карьеры или развития навыков.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => window.open(REFERRAL_LINK, '_blank')}
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white h-14 px-10 text-base font-semibold"
            >
              Перейти в каталог
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 px-10 text-base font-semibold border-2"
              onClick={() => document.getElementById('directions')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Изучить направления
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

      <section id="directions" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-foreground">Популярные направления</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите сферу, которая вам интересна, и откройте для себя десятки профессий с высокими зарплатами
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {directions.map((direction, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent cursor-pointer" onClick={() => window.open(REFERRAL_LINK, '_blank')}>
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon name={direction.icon as any} size={28} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{direction.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{direction.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {direction.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full text-foreground">
                        {skill}
                      </span>
                    ))}
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
              Смотреть все направления
              <Icon name="ChevronRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-foreground">Почему тысячи людей выбирают нас</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы создали самую полную базу знаний о современных IT-профессиях и онлайн-обучении
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

      <section id="examples" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-foreground">Примеры реальных проектов выпускников</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Посмотрите, какие проекты создают студенты во время обучения и после его окончания
            </p>
          </div>

          <div className="space-y-12">
            {portfolioExamples.map((category, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold mb-6 text-foreground">{category.direction}</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {category.examples.map((example, i) => (
                    <Card key={i} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="w-full h-32 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg mb-4 flex items-center justify-center">
                          <Icon name="FileCode2" size={40} className="text-accent" />
                        </div>
                        <h4 className="font-bold text-foreground mb-2">{example.title}</h4>
                        <p className="text-sm text-muted-foreground">{example.tech}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
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

      <section id="reviews" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-foreground">Истории успеха наших выпускников</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные люди, которые полностью изменили свою карьеру после прохождения курсов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl">{testimonial.photo}</div>
                    <div className="flex-1">
                      <div className="flex gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                        ))}
                      </div>
                      <div className="font-bold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-accent font-semibold">{testimonial.direction}</div>
                      <div className="text-xs text-muted-foreground mt-1">Зарплата: {testimonial.salary}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="pt-4 border-t">
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
              Выбрать свой курс
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-foreground">Частые вопросы</h2>
            <p className="text-lg text-muted-foreground">
              Ответы на главные вопросы о выборе профессии и онлайн-обучении
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 rounded-lg px-6 data-[state=open]:border-accent bg-white"
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
            Начните путь к новой профессии уже сегодня
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Более 500 профессий и 2000 курсов ждут вас в каталоге. Найдите идеальный вариант для себя!
          </p>
          <Button 
            onClick={() => window.open(REFERRAL_LINK, '_blank')}
            size="lg"
            className="bg-white text-secondary hover:bg-gray-100 h-14 px-10 text-base font-semibold"
          >
            Открыть каталог курсов
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
          <div className="mt-8 text-sm opacity-75">
            Бесплатная консультация по выбору • Сравнение школ • Актуальные цены
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
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
