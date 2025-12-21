import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface TestimonialsSectionProps {
  referralLink: string;
}

const TestimonialsSection = ({ referralLink }: TestimonialsSectionProps) => {
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
      <section id="reviews" className="py-24 px-6 bg-gray-50">
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
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <img src={testimonial.photo} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
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
              onClick={() => window.open(referralLink, '_blank')}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold"
            >
              Выбрать свой курс
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
            onClick={() => window.open(referralLink, '_blank')}
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
    </>
  );
};

export default TestimonialsSection;