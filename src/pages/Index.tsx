import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const courses = [
    {
      title: "Основы программирования",
      price: "9 990 ₽",
      duration: "8 недель",
      icon: "Code2",
      gradient: "from-primary to-secondary"
    },
    {
      title: "Веб-дизайн",
      price: "12 990 ₽",
      duration: "10 недель",
      icon: "Palette",
      gradient: "from-secondary to-accent"
    },
    {
      title: "Маркетинг",
      price: "14 990 ₽",
      duration: "12 недель",
      icon: "TrendingUp",
      gradient: "from-accent to-primary"
    },
    {
      title: "Бизнес-аналитика",
      price: "11 990 ₽",
      duration: "9 недель",
      icon: "BarChart3",
      gradient: "from-primary to-accent"
    }
  ];

  const benefits = [
    {
      icon: "Zap",
      title: "Быстрый старт",
      description: "Начните учиться уже сегодня без дополнительных условий"
    },
    {
      icon: "Users",
      title: "Личный наставник",
      description: "Персональное сопровождение на всем пути обучения"
    },
    {
      icon: "Award",
      title: "Сертификат",
      description: "Получите подтверждение ваших знаний и навыков"
    },
    {
      icon: "Clock",
      title: "Гибкий график",
      description: "Учитесь в удобное для вас время в любом месте"
    }
  ];

  const portfolio = [
    {
      name: "Анна Петрова",
      before: "Новичок",
      after: "Frontend разработчик",
      salary: "+120%",
      image: "👩‍💻"
    },
    {
      name: "Дмитрий Иванов",
      before: "Менеджер",
      after: "UX/UI дизайнер",
      salary: "+85%",
      image: "👨‍🎨"
    },
    {
      name: "Мария Смирнова",
      before: "Без опыта",
      after: "Digital-маркетолог",
      salary: "+95%",
      image: "👩‍💼"
    }
  ];

  const testimonials = [
    {
      name: "Алексей Козлов",
      role: "Выпускник курса программирования",
      text: "За 2 месяца получил все необходимые навыки. Сейчас работаю в крупной IT-компании!",
      rating: 5
    },
    {
      name: "Елена Новикова",
      role: "Выпускница курса дизайна",
      text: "Преподаватели объясняют сложные вещи простым языком. Уже веду свои проекты!",
      rating: 5
    },
    {
      name: "Игорь Волков",
      role: "Выпускник курса маркетинга",
      text: "Практические знания, которые сразу применил в работе. Результат превзошел ожидания!",
      rating: 5
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            EduPro
          </h1>
          <nav className="hidden md:flex gap-6">
            <a href="#benefits" className="hover:text-primary transition-colors">Преимущества</a>
            <a href="#courses" className="hover:text-primary transition-colors">Курсы</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Кейсы</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
            Начать учиться
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Построй карьеру мечты
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Онлайн-курсы от практикующих экспертов с гарантией трудоустройства
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105 text-lg px-8 py-6">
                <Icon name="Rocket" className="mr-2" size={20} />
                Выбрать курс
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all text-lg px-8 py-6">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть видео
              </Button>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-scale">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2500+</div>
              <div className="text-muted-foreground">Выпускников</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">95%</div>
              <div className="text-muted-foreground">Трудоустроено</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Курсов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.9</div>
              <div className="text-muted-foreground">Рейтинг</div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Почему выбирают нас
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon as any} size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Популярные курсы
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-32 bg-gradient-to-br ${course.gradient} flex items-center justify-center`}>
                  <Icon name={course.icon as any} size={48} className="text-white group-hover:scale-110 transition-transform" />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-3">{course.title}</h4>
                  <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-4">{course.price}</div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Истории успеха
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((person, index) => (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-7xl mb-4">{person.image}</div>
                  <h4 className="text-2xl font-bold mb-4">{person.name}</h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-muted-foreground">{person.before}</span>
                      <Icon name="ArrowRight" size={16} className="text-primary" />
                      <span className="font-semibold text-primary">{person.after}</span>
                    </div>
                  </div>
                  <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full font-bold">
                    {person.salary} к зарплате
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Отзывы учеников
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="container mx-auto max-w-2xl">
          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-4xl font-bold text-center mb-4">
                Начните учиться сегодня
              </h3>
              <p className="text-center text-muted-foreground mb-8">
                Оставьте заявку и получите бесплатную консультацию
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="h-12"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Сообщение (необязательно)" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-12 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg font-semibold"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                EduPro
              </h4>
              <p className="text-background/70">
                Образовательная платформа для построения успешной карьеры
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Курсы</h5>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-primary transition-colors">Программирование</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Дизайн</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Маркетинг</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Аналитика</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Компания</h5>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Преподаватели</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Контакты</h5>
              <ul className="space-y-2 text-background/70">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@edupro.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (800) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная 1
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>&copy; 2024 EduPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
