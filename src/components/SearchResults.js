import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieDetails, clearSearchResults } from '../redux/movieActions'; // Import the action

const SearchResults = () => {
  const searchResults = useSelector((state) => state.movies.searchResults || []);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMovieClick = (movieId) => {
    dispatch(fetchMovieDetails(movieId)); // Fetch movie details before navigating
    dispatch(clearSearchResults()); // Clear search results
    navigate(`/movie/${movieId}`); // Navigate to MovieDetail with the selected movie ID
  };

  return (
    <div className="movie-grid">
      <h2>Search Results</h2>
      {searchResults.length > 0 ? (
        searchResults.map((movie) => (
          <div key={movie.id} className="movie-card" onClick={() => handleMovieClick(movie.id)}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
