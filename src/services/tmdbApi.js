import axios from "axios";
import { TMDB_API_KEY, TMDB_BASE_URL } from "../config/tmdb";

const tmdbApi = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  },
});

export const getPopularMovies = async (page = 1) => {
  try {
    const response = await tmdbApi.get("/movie/popular", {
      params: { page },
    });
    return response.data;
  } catch (error) {
    // if (error.response) {
    //   console.error("Response status:", error.response.status);
    //   console.error("Response data:", error.response.data);
    // } else {
    //   console.error("Error message:", error.message);
    // }
     console.error("Error fetching popular movies:", error);
    throw error;
  }
};

export default tmdbApi;