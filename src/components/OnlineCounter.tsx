import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const OnlineCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const baseCount = 147;
    const variance = 25;
    
    const updateCount = () => {
      const randomVariance = Math.floor(Math.random() * variance) - Math.floor(variance / 2);
      setCount(baseCount + randomVariance);
    };

    updateCount();
    const interval = setInterval(updateCount, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 left-2 sm:left-4 z-40 border-2 border-black dark:border-white rounded-lg shadow-lg sm:px-4 sm:py-2 flex items-center gap-1.5 sm:gap-2 animate-fade-in bg-fuchsia-50 dark:bg-slate-800 px-1.5 py-[1px]">
      <div className="relative">
        <Icon name="Users" size={16} className="text-green-500 sm:w-5 sm:h-5" />
        <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] sm:text-xs text-muted-foreground font-medium">Онлайн</span>
        <span className="text-xs sm:text-sm font-bold text-foreground">{count}</span>
      </div>
    </div>
  );
};

export default OnlineCounter;