import { useState, useEffect } from "react";

interface FavoriteCourse {
  id: string;
  title: string;
  url: string;
  category: string;
}

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<FavoriteCourse[]>([]);
  const [, forceUpdate] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) {
      setFavorites(JSON.parse(saved));
    }

    const handleStorage = () => {
      const saved = localStorage.getItem("favorites");
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const addFavorite = (course: FavoriteCourse) => {
    const saved = localStorage.getItem("favorites");
    const current = saved ? JSON.parse(saved) : [];
    const exists = current.find((f: FavoriteCourse) => f.id === course.id);
    if (!exists) {
      const updated = [...current, course];
      setFavorites(updated);
      localStorage.setItem("favorites", JSON.stringify(updated));
      forceUpdate({});
      return true;
    }
    return false;
  };

  const removeFavorite = (id: string) => {
    const saved = localStorage.getItem("favorites");
    const current = saved ? JSON.parse(saved) : [];
    const updated = current.filter((f: FavoriteCourse) => f.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
    forceUpdate({});
  };

  const isFavorite = (id: string) => {
    const saved = localStorage.getItem("favorites");
    const current = saved ? JSON.parse(saved) : [];
    return current.some((f: FavoriteCourse) => f.id === id);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
};