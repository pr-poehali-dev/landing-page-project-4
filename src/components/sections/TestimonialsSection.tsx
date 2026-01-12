import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ShareButtons from "@/components/ShareButtons";

interface TestimonialsSectionProps {
  referralLink: string;
}

const TestimonialsSection = ({ referralLink }: TestimonialsSectionProps) => {
  const testimonialsAnimation = useScrollAnimation(0.1);
  const faqAnimation = useScrollAnimation(0.1);
  
  const testimonials = [
    {
      name: "Алексей Соколов",
      direction: "Frontend-разработчик",
      course: "Курс по React и современному JavaScript",
      text: "Полностью сменил профессию за 10 месяцев. Курс дал все необходимые знания: от HTML/CSS до сложных React-приложений. Сейчас работаю в продуктовой компании с зарплатой 180к. Лучшее вложение в себя!",
      rating: 5,
      photo: "https://cdn.poehali.dev/projects/d946f235-e34e-46db-8e17-3468ff2dd5c5/files/cb9aa0d1-e554-4228-a97e-9e6dbb39ed21.jpg",
      salary: "180 000 ₽"
    },
    {
      name: "Мария Новикова",
      direction: "UX/UI дизайнер",
      course: "Профессия UX/UI дизайнер с нуля",
      text: "До курса работала администратором. Прошла обучение за 8 месяцев, собрала портфолио из 6 проектов. Через месяц после выпуска получила оффер в дизайн-студию. Зарплата выросла в 3 раза!",
      rating: 5,
      photo: "https://cdn.poehali.dev/projects/d946f235-e34e-46db-8e17-3468ff2dd5c5/files/4a475086-0f4d-4021-bdd2-0f3f4e10eefe.jpg",
      salary: "150 000 ₽"
    },
    {
      name: "Дмитрий Волков",
      direction: "Digital-маркетолог",
      course: "Интернет-маркетолог от А до Я",
      text: "Курс структурирован идеально: теория сразу закрепляется практикой. Изучил все инструменты: от контекста до email-маркетинга. Сейчас веду 5 проектов как фрилансер, доход от 200к в месяц.",
      rating: 5,
      photo: "https://cdn.poehali.dev/projects/d946f235-e34e-46db-8e17-3468ff2dd5c5/files/a667c6a6-3646-44f7-b324-70850ee56b95.jpg",
      salary: "200 000+ ₽"
    },
    {
      name: "Екатерина Морозова",
      direction: "Python-разработчик",
      course: "Python-разработчик с нуля до middle",
      text: "Преподаватели — практики из топовых компаний. Разбирали реальные кейсы, писали код каждый день. За время обучения создала 8 проектов для портфолио. Устроилась в IT-компанию junior разработчиком.",
      rating: 5,
      photo: "https://cdn.poehali.dev/projects/d946f235-e34e-46db-8e17-3468ff2dd5c5/files/84dc6f71-3a7e-4281-b5dc-e80c151a70d6.jpg",
      salary: "120 000 ₽"
    },
    {
      name: "Игорь Петров",
      direction: "Аналитик данных",
      course: "Data Analyst: аналитика и визуализация",
      text: "Научился работать с SQL, Python, строить дашборды в Power BI. Курс дал понимание, как превращать сырые данные в бизнес-решения. Перешёл из продаж в аналитику, зарплата +100% к прежней.",
      rating: 5,
      photo: "https://cdn.poehali.dev/projects/d946f235-e34e-46db-8e17-3468ff2dd5c5/files/ce173984-8390-40cf-a39d-baa8d79f693b.jpg",
      salary: "160 000 ₽"
    },
    {
      name: "Анна Сидорова",
      direction: "Графический дизайнер",
      course: "Графический дизайн и иллюстрация",
      text: "Освоила Adobe Illustrator, Photoshop, научилась создавать иллюстрации с нуля. Преподаватели давали подробную обратную связь по каждой работе. Сейчас работаю с крупными брендами, средний чек проекта 50к.",
      rating: 5,
      photo: "https://cdn.poehali.dev/projects/d946f235-e34e-46db-8e17-3468ff2dd5c5/files/44cccdde-28f0-4274-87f4-934e9d8353ff.jpg",
      salary: "~200 000 ₽"
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
    <>
      <section id="reviews" className="py-12 sm:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">Истории успеха наших выпускников</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные люди, которые полностью изменили свою карьеру после прохождения курсов
            </p>
          </div>

          <div ref={testimonialsAnimation.ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-xl transition-all duration-500 ${
                  testimonialsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-4 sm:p-8">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0">
                      <img src={testimonial.photo} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                        ))}
                      </div>
                      <div className="font-bold text-foreground text-sm sm:text-base">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-accent font-semibold">{testimonial.direction}</div>
                      <div className="text-xs text-muted-foreground mt-0.5 sm:mt-1">Зарплата: {testimonial.salary}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 italic">
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
              onClick={() => {
                if (typeof window.ym !== 'undefined') {
                  window.ym(105955345, 'reachGoal', 'catalog_click');
                }
                if (typeof window.VK !== 'undefined' && window.VK.Retargeting) {
                  window.VK.Retargeting.Event('view_catalog');
                }
                window.open(referralLink, '_blank');
              }}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold"
            >
              Выбрать свой курс
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="faq" className="py-12 sm:py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">Частые вопросы</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              Ответы на главные вопросы о выборе профессии и онлайн-обучении
            </p>
          </div>

          <div ref={faqAnimation.ref}>
            <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={`border-2 rounded-lg px-4 sm:px-6 data-[state=open]:border-accent bg-card transition-all duration-500 ${ 
                  faqAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline text-sm sm:text-base">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-secondary to-accent">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Начните путь к новой профессии уже сегодня
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Более 500 профессий и 2000 курсов ждут вас в каталоге. Найдите идеальный вариант для себя!
          </p>
          <Button 
            onClick={() => {
              if (typeof window.ym !== 'undefined') {
                window.ym(105955345, 'reachGoal', 'catalog_click');
              }
              window.open(referralLink, '_blank');
            }}
            size="lg"
            className="bg-white text-secondary hover:bg-gray-100 h-14 px-10 text-base font-semibold animate-pulse-glow"
          >
            Открыть каталог курсов
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
          <div className="mt-8 text-sm opacity-75">
            Бесплатная консультация по выбору • Сравнение школ • Актуальные цены
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <ShareButtons />
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;