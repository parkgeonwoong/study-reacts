const API_KEY = import.meta.env.VITE_TMDB_API;
const BASE_URL = "https://api.themoviedb.org/3";

// 현재 상영중 API
export function getMovies() {
  return fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
