import axios from "axios";

const BASE_URL =
  "https://v1.nocodeapi.com/madhu123re5435/spotify/pXbqunRTMKEWrTqV";

export const searchSongs = async (query) => {
  const res = await axios.get(
    `${BASE_URL}/search?q=${query}&type=track&perPage=50&page=0`
  );
  return res.data.tracks.items;
};