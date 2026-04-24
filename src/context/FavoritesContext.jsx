// For API
import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (song) => {
    if (favorites.some((f) => f.id === song.id)) return;
    setFavorites([...favorites, song]);
  };

  const removeFavorite = (song) => {
    setFavorites(favorites.filter((f) => f.id !== song.id));
  };

  const toggleFavorite = (song) => {
    favorites.some((f) => f.id === song.id)
      ? removeFavorite(song)
      : addFavorite(song);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
