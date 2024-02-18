const API_KEY = import.meta.env.VITE_TMDB_API; // NOTE: .env는 최상단 폴더에 위치.
const BASE_URL = "https://api.themoviedb.org/3";

// 영상종류
export const LIST_TYPE = [
  "nowPlaying",
  "upcomingMovies",
  "popularMovies",
  "tvShow",
];

interface IMovies {
  id: number;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  title: string;
  vote_average: number;
}

// movie/now_playing 타입
export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: string;
  results: IMovies[];
  total_pages: string;
  total_results: string;
}

// 현재 상영중 API
export function getMovies() {
  return fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}

// 다가오는 영화 API
export function getUpcoming() {
  return fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
