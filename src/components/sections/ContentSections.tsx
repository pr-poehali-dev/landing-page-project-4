import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ContentSectionsProps {
  referralLink: string;
}

const ContentSections = ({ referralLink }: ContentSectionsProps) => {
  const directionsAnimation = useScrollAnimation(0.1);
  const benefitsAnimation = useScrollAnimation(0.1);
  const examplesAnimation = useScrollAnimation(0.1);
  
  const directions = [
    {
      title: "💻 Программирование и разработка",
      description: "От основ до продвинутых технологий: веб, мобильная разработка, backend, frontend, DevOps",
      icon: "Code2",
      skills: ["Python", "JavaScript", "React", "Node.js", "SQL", "Git"],
      salary: "до 350 000 ₽",
      color: "bg-emerald-500",
      link: "https://ihclick.ru/?idp=314945&link=/catalog/programmirovanie/"
    },
    {
      title: "🎨 Дизайн и креатив",
      description: "UX/UI дизайн, графический дизайн, моушн-дизайн, 3D-моделирование, веб-дизайн",
      icon: "Palette",
      skills: ["Figma", "Adobe Suite", "Sketch", "Blender", "Cinema 4D"],
      salary: "до 200 000 ₽",
      color: "bg-pink-500",
      link: "https://ihclick.ru/?idp=314945&link=/catalog/dizayn/"
    },
    {
      title: "📈 Маркетинг и продвижение",
      description: "Digital-маркетинг, SMM, SEO, контент-маркетинг, таргетированная реклама",
      icon: "TrendingUp",
      skills: ["Яндекс.Директ", "Google Ads", "Аналитика", "Контент", "Стратегия"],
      salary: "до 180 000 ₽",
      color: "bg-blue-500",
      link: "https://ihclick.ru/?idp=314945&link=/catalog/kursy-marketinga/"
    },
    {
      title: "📊 Аналитика и работа с данными",
      description: "Анализ данных, бизнес-аналитика, машинное обучение, Big Data, визуализация",
      icon: "BarChart3",
      skills: ["SQL", "Python", "Excel", "Power BI", "Tableau"],
      salary: "до 220 000 ₽",
      color: "bg-cyan-500",
      link: "https://ihclick.ru/?idp=314945&link=/catalog/data-science-kursy/"
    },
    {
      title: "👥 Менеджмент и управление",
      description: "Управление проектами, продакт-менеджмент, управление командой, Agile, Scrum",
      icon: "Users",
      skills: ["Jira", "Confluence", "Методологии", "Лидерство", "Планирование"],
      salary: "до 200 000 ₽",
      color: "bg-purple-500",
      link: "https://ihclick.ru/?idp=314945&link=/catalog/kursy-po-upravleniyu/"
    },
    {
      title: "🏢 Бизнес и предпринимательство",
      description: "Создание и развитие бизнеса, финансы, продажи, e-commerce, инвестиции",
      icon: "Briefcase",
      skills: ["Стратегия", "Финансы", "Продажи", "Маркетплейсы", "Автоматизация"],
      salary: "до 300 000 ₽",
      color: "bg-orange-500",
      link: "https://ihclick.ru/?idp=314945&link=/catalog/kursy-po-biznesu/"
    }
  ];

  const portfolioExamples = [
    {
      direction: "Программирование",
      examples: [
        { title: "Интернет-магазин на React", tech: "React, Node.js, MongoDB", image: "https://cdn.poehali.dev/projects/d946f235-e34e-46db-8e17-3468ff2dd5c5/files/34139ff8-2225-430d-8fc5-16a62c48cc03.jpg" },
        { title: "Мобильное приложение для iOS", tech: "Swift, Firebase", image: "https://cdn.poehali.dev/projects/d946f235-e34e-46db-8e17-3468ff2dd5c5/files/790f6909-b66d-4026-80b0-e9a4aff44592.jpg" },
        { title: "CRM-система для бизнеса", tech: "Python, Django, PostgreSQL", image: "https://cdn.poehali.dev/projects/d946f235-e34e-46db-8e17-3468ff2dd5c5/files/dae2ebed-924a-4c96-b1a4-b8e2c1eed6fb.jpg" }
      ]
    },
    {
      direction: "Дизайн",
      examples: [
        { title: "Редизайн корпоративного сайта", tech: "Figma, UI/UX", image: "https://cdn.poehali.dev/projects/d946f235-e34e-46db-8e17-3468ff2dd5c5/files/34339b38-eaf7-4671-8ca9-d69159abb276.jpg" },
        { title: "Брендинг и фирменный стиль", tech: "Adobe Illustrator", image: "https://cdn.poehali.dev/projects/d946f235-e34e-46db-8e17-3468ff2dd5c5/files/6475e15b-0d20-4171-939f-e8728fb62f30.jpg" },
        { title: "Анимированная инфографика", tech: "After Effects", image: "https://cdn.poehali.dev/projects/d946f235-e34e-46db-8e17-3468ff2dd5c5/files/73892cc8-05b7-4366-b27b-c98b635cab5e.jpg" }
      ]
    },
    {
      direction: "Маркетинг",
      examples: [
        { title: "Продвижение стартапа с нуля", tech: "SEO, Контекст, SMM", image: "https://cdn.poehali.dev/projects/d946f235-e34e-46db-8e17-3468ff2dd5c5/files/e5defd8f-8092-47b3-b76b-41d81f2a4e60.jpg" },
        { title: "Увеличение продаж на 300%", tech: "Таргет, Аналитика", image: "https://cdn.poehali.dev/projects/d946f235-e34e-46db-8e17-3468ff2dd5c5/files/5259adc3-9f63-4e4d-aac6-fe22b2baa8ea.jpg" },
        { title: "Запуск email-рассылки", tech: "Automation, CRM", image: "https://cdn.poehali.dev/projects/d946f235-e34e-46db-8e17-3468ff2dd5c5/files/be6a5f51-86be-4f1e-9260-2b9dc8bf6796.jpg" }
      ]
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

  return (
    <>
      <section id="directions" className="py-12 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">Популярные направления</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите сферу, которая вам интересна, и откройте для себя десятки профессий с высокими зарплатами
            </p>
          </div>
          
          <div ref={directionsAnimation.ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {directions.map((direction, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent cursor-pointer hover:scale-105 relative overflow-hidden ${
                  directionsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms`, transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
                onClick={() => {
                  if (typeof window.ym !== 'undefined') {
                    window.ym(105955345, 'reachGoal', 'direction_click');
                  }
                  if (typeof window.VK !== 'undefined' && window.VK.Retargeting) {
                    window.VK.Retargeting.Event('view_direction');
                  }
                  window.open(direction.link, '_blank');
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                <CardContent className="p-4 sm:p-8 relative z-10">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 ${direction.color} rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-400`}>
                    <Icon name={direction.icon as any} size={24} className="text-white sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground">{direction.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{direction.description}</p>
                  <div className="flex items-center gap-2 mb-3 sm:mb-4 px-3 py-2 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <span className="text-lg">💰</span>
                    <div>
                      <div className="text-xs text-muted-foreground">Средняя зарплата:</div>
                      <div className="text-sm font-bold text-green-700 dark:text-green-400">{direction.salary}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {direction.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-muted text-xs font-medium rounded-full text-foreground group-hover:bg-accent/10 transition-colors">
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
              onClick={() => window.open(referralLink, '_blank')}
              size="lg" 
              variant="outline"
              className="border-2 font-semibold animate-pulse-glow"
            >
              Смотреть все направления
              <Icon name="ChevronRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">Почему тысячи людей выбирают нас</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы создали самую полную базу знаний о современных IT-профессиях и онлайн-обучении
            </p>
          </div>

          <div ref={benefitsAnimation.ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`group transition-all duration-500 ${
                  benefitsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon name={benefit.icon as any} size={24} className="text-accent" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="examples" className="py-12 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">Примеры реальных проектов выпускников</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Посмотрите, какие проекты создают студенты во время обучения и после его окончания
            </p>
          </div>

          <div ref={examplesAnimation.ref} className="space-y-8 sm:space-y-12">
            {portfolioExamples.map((category, index) => (
              <div key={index}>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground">{category.direction}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  {category.examples.map((example, i) => (
                    <Card 
                      key={i} 
                      className={`hover:shadow-lg transition-all duration-500 ${ 
                        examplesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                      style={{ transitionDelay: `${(index * 3 + i) * 100}ms` }}
                    >
                      <CardContent className="p-4 sm:p-6">
                        <div className="w-full h-40 sm:h-48 rounded-lg mb-3 sm:mb-4 overflow-hidden">
                          <img src={example.image} alt={example.title} className="w-full h-full object-cover" />
                        </div>
                        <h4 className="font-bold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">{example.title}</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">{example.tech}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => window.open(referralLink, '_blank')}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold animate-pulse-glow"
            >
              Начать обучение
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentSections;