import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import SongCard from "../components/SongCard";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="container mt-3">
      <h3>Your Favorites ❤️</h3>

      {favorites.length === 0 ? (
        <h5>No favorites added</h5>
      ) : (
        <div className="row">
          {favorites.map((song) => (
            <div key={song.id} className="col-md-3 mb-3">
              <SongCard song={song} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;