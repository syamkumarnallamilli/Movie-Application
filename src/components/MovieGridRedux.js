import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../redux/movieActions";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./MovieGrid.css";

const MovieGridRedux = ({ category }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate
  const movies = useSelector((state) => state.movies[category]);

  useEffect(() => {
    dispatch(fetchMovies(category));
  }, [dispatch, category]);

  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = Math.round(rating / 2);
    const starStyle = {
      color: "#FFD700",
      fontSize: "20px",
    };

    const stars = [];

    for (let i = 0; i < totalStars; i++) {
      stars.push(
        <span key={i} style={starStyle}>
          {i < filledStars ? "★" : "☆"}
        </span>
      );
    }
    return stars;
  };

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`); // Navigate to the movie detail page
  };

  return (
    <div className="movie-grid">
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-card"
            style={{ backgroundColor: 'black', cursor: 'pointer' }}
            onClick={() => handleMovieClick(movie.id)} // Call handleMovieClick on click
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <div className="movie-rating">
              {renderStars(movie.vote_average)}
            </div>
          </div>
        ))
      ) : (
        <p>No movies available.</p>
      )}
    </div>
  );
};

export default MovieGridRedux;
