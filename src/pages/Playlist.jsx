import { useEffect, useState } from "react";
import { searchSongs } from "../utils/api";
import SongCard from "../components/SongCard";

const Playlist = () => {
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState("");

  const fetchSongs = async () => {
    const data = await searchSongs(search || "top");
    setSongs(data);
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div className="container mt-3">
      {/* <input
        type="text"
        placeholder="Search music..."
        className="form-control mb-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      /> */}

      {/* <button className="btn btn-success mb-3" onClick={fetchSongs}>
        Search
      </button> */}
      <div className="d-flex justify-content-center mb-4">
        <div style={{ width: "400px" }}>
          <input
            type="text"
            placeholder="Search music..."
            className="form-control mb-2 text-center"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button className="btn btn-success w-100" onClick={fetchSongs}>
            Search
          </button>
        </div>
      </div>

      <div className="row">
        {songs.map((song) => (
          <div key={song.id} className="col-md-3 mb-3">
            <SongCard song={song} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;