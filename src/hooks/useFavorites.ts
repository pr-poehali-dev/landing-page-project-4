import { useState, useEffect } from "react";

interface FavoriteCourse {
  id: string;
  title: string;
  url: string;
  category: string;
}

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<FavoriteCourse[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  const addFavorite = (course: FavoriteCourse) => {
    const exists = favorites.find((f) => f.id === course.id);
    if (!exists) {
      const updated = [...favorites, course];
      setFavorites(updated);
      localStorage.setItem("favorites", JSON.stringify(updated));
      return true;
    }
    return false;
  };

  const removeFavorite = (id: string) => {
    const updated = favorites.filter((f) => f.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const isFavorite = (id: string) => {
    return favorites.some((f) => f.id === id);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
};
