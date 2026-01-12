import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ROICalculator = () => {
  const [currentSalary, setCurrentSalary] = useState(50000);
  const [coursePrice, setCoursePrice] = useState(100000);
  const [newSalary, setNewSalary] = useState(150000);

  const monthlyIncrease = newSalary - currentSalary;
  const paybackMonths = Math.ceil(coursePrice / monthlyIncrease);
  const yearlyGain = monthlyIncrease * 12;
  const threeYearGain = yearlyGain * 3 - coursePrice;

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Калькулятор окупаемости курса
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Посчитайте, как быстро вернутся вложения в обучение и сколько вы заработаете
          </p>
        </div>

        <Card className="border-2 shadow-xl">
          <CardContent className="p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Текущая зарплата
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="200000"
                    step="10000"
                    value={currentSalary}
                    onChange={(e) => setCurrentSalary(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="mt-3 text-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {currentSalary.toLocaleString()} ₽
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Стоимость курса
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="20000"
                    max="300000"
                    step="10000"
                    value={coursePrice}
                    onChange={(e) => setCoursePrice(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                  />
                  <div className="mt-3 text-center">
                    <span className="text-2xl font-bold text-orange-600">
                      {coursePrice.toLocaleString()} ₽
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Зарплата после курса
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="50000"
                    max="400000"
                    step="10000"
                    value={newSalary}
                    onChange={(e) => setNewSalary(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                  />
                  <div className="mt-3 text-center">
                    <span className="text-2xl font-bold text-green-600">
                      {newSalary.toLocaleString()} ₽
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {monthlyIncrease > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 sm:p-6 text-center border-2 border-blue-200">
                    <div className="text-blue-600 mb-2">
                      <Icon name="Clock" size={24} className="mx-auto" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
                      {paybackMonths} мес
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      Окупаемость курса
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 sm:p-6 text-center border-2 border-green-200">
                    <div className="text-green-600 mb-2">
                      <Icon name="TrendingUp" size={24} className="mx-auto" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">
                      +{monthlyIncrease.toLocaleString()} ₽
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      Прирост в месяц
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 sm:p-6 text-center border-2 border-purple-200">
                    <div className="text-purple-600 mb-2">
                      <Icon name="Sparkles" size={24} className="mx-auto" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">
                      {threeYearGain.toLocaleString()} ₽
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      Доход за 3 года
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 sm:p-6 border-2 border-green-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground mb-2">Ваш результат:</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Курс окупится за <span className="font-bold text-green-600">{paybackMonths} месяцев</span>.
                        За первый год вы заработаете дополнительно{" "}
                        <span className="font-bold text-green-600">{yearlyGain.toLocaleString()} ₽</span>.
                        За 3 года ваш чистый доход составит{" "}
                        <span className="font-bold text-green-600">{threeYearGain.toLocaleString()} ₽</span>!
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200 text-center">
                <Icon name="AlertCircle" size={32} className="mx-auto mb-3 text-orange-600" />
                <p className="text-sm text-muted-foreground">
                  Зарплата после курса должна быть выше текущей для расчёта окупаемости
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ROICalculator;