// for api
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const Navbar = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <nav className="d-flex justify-content-between p-3 bg-dark text-white">
      <h4>🎵 Spotify Clone</h4>
      <div>
        <Link to="/" className="text-white me-3">
          Playlist
        </Link>
        <Link to="/favorites" className="text-white">
          Favorites ({favorites.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;