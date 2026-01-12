import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface FavoriteCourse {
  id: string;
  title: string;
  url: string;
  category: string;
}

const FavoritesButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [favorites, setFavorites] = useState<FavoriteCourse[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  const removeFavorite = (id: string) => {
    const updated = favorites.filter((f) => f.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const clearAll = () => {
    setFavorites([]);
    localStorage.removeItem("favorites");
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-20 right-4 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-2xl flex items-center justify-center relative"
      >
        <Icon name="Heart" size={24} className="text-white" />
        {favorites.length > 0 && (
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-red-600 border-2 border-red-500">
            {favorites.length}
          </div>
        )}
      </Button>

      {isOpen && (
        <Card className="fixed top-36 right-4 z-50 w-[calc(100vw-2rem)] sm:w-96 max-h-[500px] shadow-2xl border-2 flex flex-col">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Icon name="Heart" size={20} className="text-red-500" />
                </div>
                <div>
                  <div className="font-bold text-white">Избранное</div>
                  <div className="text-xs text-white/80">{favorites.length} курсов</div>
                </div>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                size="sm"
                variant="ghost"
                className="text-white hover:bg-white/20"
              >
                <Icon name="X" size={20} />
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {favorites.length === 0 ? (
              <div className="text-center py-8">
                <Icon name="Heart" size={48} className="mx-auto mb-3 text-gray-300" />
                <p className="text-sm text-muted-foreground mb-2">Избранное пусто</p>
                <p className="text-xs text-muted-foreground">
                  Добавляйте курсы в избранное, чтобы не потерять
                </p>
              </div>
            ) : (
              <>
                {favorites.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-lg p-3 border border-gray-200 flex items-start gap-3"
                  >
                    <div className="flex-1">
                      <div className="text-xs text-orange-600 font-semibold mb-1">
                        {course.category}
                      </div>
                      <div className="text-sm font-medium text-foreground mb-2">
                        {course.title}
                      </div>
                      <Button
                        onClick={() => {
                          if (typeof window.ym !== 'undefined') {
                            window.ym(105955345, 'reachGoal', 'favorite_click');
                          }
                          window.open(course.url, '_blank');
                        }}
                        size="sm"
                        className="h-7 text-xs bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                      >
                        Перейти
                        <Icon name="ExternalLink" size={12} className="ml-1" />
                      </Button>
                    </div>
                    <Button
                      onClick={() => removeFavorite(course.id)}
                      size="sm"
                      variant="ghost"
                      className="text-gray-400 hover:text-red-500 p-1"
                    >
                      <Icon name="Trash2" size={16} />
                    </Button>
                  </div>
                ))}
                <Button
                  onClick={clearAll}
                  variant="outline"
                  size="sm"
                  className="w-full text-red-600 border-red-200 hover:bg-red-50"
                >
                  Очистить все
                </Button>
              </>
            )}
          </div>
        </Card>
      )}
    </>
  );
};

export default FavoritesButton;
