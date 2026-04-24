// For API>JS
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const SongCard = ({ song }) => {
  const { toggleFavorite, favorites } = useContext(FavoritesContext);

  const isFav = favorites.some((f) => f.id === song.id);

  return (
    <div className="card p-2">
      <img
        src={song.album.images[0]?.url}
        height="200"
        className="card-img-top"
      />

      <div className="card-body">
        <h6>{song.name}</h6>
        <p>{song.artists.map((a) => a.name).join(", ")}</p>

        <audio src={song.preview_url} controls className="w-100" />

        <button
          className="btn btn-dark w-100 mt-2"
          onClick={() => toggleFavorite(song)}
        >
          {isFav ? "❤️ Remove" : "🤍 Add"}
        </button>
      </div>
    </div>
  );
};

export default SongCard;


