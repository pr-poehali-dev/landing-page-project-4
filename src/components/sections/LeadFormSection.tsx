import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const LeadFormSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      alert('Пожалуйста, введите корректный email');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/669698b1-590b-4787-a1e9-348a9cd0bed5', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setEmail('');
        
        if (typeof window.ym !== 'undefined') {
          window.ym(105955345, 'reachGoal', 'lead_submit');
        }
        if (typeof window.VK !== 'undefined' && window.VK.Retargeting) {
          window.VK.Retargeting.Event('lead');
        }
      } else {
        alert('Что-то пошло не так. Попробуйте ещё раз.');
      }
    } catch (error) {
      alert('Ошибка подключения. Проверьте интернет.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-accent/10 via-secondary/10 to-accent/10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-6">
            <Icon name="Check" size={32} className="text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">Отлично! 🎉</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6">
            Подборка топ-10 курсов с максимальными зарплатами уже летит на ваш email
          </p>
          <p className="text-sm text-muted-foreground">
            Проверьте почту (и папку "Спам" на всякий случай)
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-accent/10 via-secondary/10 to-accent/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Gift" size={20} className="text-accent" />
            <span className="text-sm font-semibold text-accent">Бесплатный бонус</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Получите подборку лучших курсов
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Оставьте email — мы пришлём топ-10 курсов с самыми высокими зарплатами в вашей сфере
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <Input
            type="email"
            placeholder="Ваш email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 h-12 sm:h-14 text-base px-4"
            disabled={isSubmitting}
            required
          />
          <Button 
            type="submit"
            size="lg"
            className="h-12 sm:h-14 px-6 sm:px-8 bg-secondary hover:bg-secondary/90 text-white font-semibold whitespace-nowrap"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Icon name="Loader2" className="mr-2 animate-spin" size={20} />
                Отправка...
              </>
            ) : (
              <>
                Получить подборку
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </>
            )}
          </Button>
        </form>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Icon name="Check" size={16} className="text-green-600" />
            <span>Бесплатно</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Check" size={16} className="text-green-600" />
            <span>Без спама</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Check" size={16} className="text-green-600" />
            <span>Актуальная информация</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;