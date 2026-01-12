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
    <div className="fixed bottom-4 left-4 z-40 bg-white border-2 border-black rounded-lg shadow-lg px-4 py-2 flex items-center gap-2 animate-fade-in">
      <div className="relative">
        <Icon name="Users" size={20} className="text-green-500" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-muted-foreground font-medium">Онлайн сейчас</span>
        <span className="text-sm font-bold text-foreground">{count} человек</span>
      </div>
    </div>
  );
};

export default OnlineCounter;