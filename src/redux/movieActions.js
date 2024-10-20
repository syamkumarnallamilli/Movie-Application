
import axios from "axios";
import { TMDB_API_KEY, TMDB_BASE_URL } from "../config/tmdb";

const tmdbApi = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  },
});

export const fetchMovies = (category) => async (dispatch) => {
  console.log("Fetching movies for category:", category); // Log the category being fetched
  try {
    let endpoint;
    switch (category) {
      case "action":
        endpoint = "/discover/movie?with_genres=28";
        break;
      case "adventure":
        endpoint = "/discover/movie?with_genres=12";
        break;
      case "comedy":
        endpoint = "/discover/movie?with_genres=35";
        break;
      case "crime":
        endpoint = "/discover/movie?with_genres=80";
        break;
      case "history":
        endpoint = "/discover/movie?with_genres=36";
        break;
      case "sci_fic":
        endpoint = "/discover/movie?with_genres=878";
        break;
      case "thriller":
        endpoint = "/discover/movie?with_genres=53";
        break;
      case "top_rated":
        endpoint = "/movie/top_rated";
        break;
      case "upcoming":
        endpoint = "/movie/upcoming";
        break;
      case "popular":
      default:
        endpoint = "/movie/popular";
    }

    const response = await tmdbApi.get(endpoint, {
      params: {
        language: "en-US",
        page: 1,
      },
    });

    dispatch({
      type: "SET_MOVIES",    //changes
      payload: { category:category.toLowerCase(), movies: response.data.results },
    });
  } catch (error) {
    console.error(`Error fetching ${category} movies:`, error);
  }
};

export const searchMovies = (query) => async (dispatch) => {
  try {
    const response = await tmdbApi.get("/search/movie", {
      params: {
        language: "en-US",
        query: query,
        page: 1,
      },
    });
    dispatch({ type: "SET_SEARCH_RESULTS", payload: response.data.results });
  } catch (error) {
    console.error(`Error searching movies:`, error);
  }
};




export const clearSearchResults = () => {
  return {
    type: "CLEAR_SEARCH_RESULTS",
  };
};


// cast and crew of a movie
// src/redux/movieActions.js



//trailer&clips

export const fetchVideos = (movieId) => async (dispatch) => {
  try {
    const response = await tmdbApi.get(`/movie/${movieId}/videos`);
    dispatch({
      type: "SET_VIDEOS",
      payload: response.data.results,
    });
  } catch (error) {
    console.error(`Error fetching videos:`, error);
  }
};

//movie details



export const fetchMovieDetails = (movieId) => async (dispatch) => {
  try {
    const response = await tmdbApi.get(`/movie/${movieId}`, {
      params: {
        language: "en-US",
      },
    });

    console.log("Fetched movie details:", response.data); // Log the response for debugging

    dispatch({
      type: "SET_MOVIE_DETAILS", // Ensure your reducer handles this action type
      payload: response.data,
    });
  } catch (error) {
    console.error(`Error fetching movie details:`, error.message); // Log the error message
    dispatch({
      type: "FETCH_MOVIE_DETAILS_FAILURE",
      payload: error.message,
    });
  }
};
