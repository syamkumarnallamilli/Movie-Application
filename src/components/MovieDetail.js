import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"; 
import { fetchVideos, fetchMovieDetails } from "../redux/movieActions"; 
import { Box, Typography } from "@mui/material"; 
import './MovieDetails.css'; 

const MovieDetail = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();

  const videos = useSelector((state) => state.movies.videos);
  const movieDetails = useSelector((state) => state.movies.movieDetails); 

  useEffect(() => {
    dispatch(fetchMovieDetails(id)); 
    dispatch(fetchVideos(id)); 
  }, [dispatch, id]);

  // Filter only unique trailers
  const uniqueTrailers = Array.from(new Set(videos.map(trailer => trailer.key)))
    .map(key => videos.find(trailer => trailer.key === key && trailer.type === "Trailer"));

  // Remove any undefined entries in case there are no trailers
  const trailers = uniqueTrailers.filter(trailer => trailer);

  return (
    <Box sx={{ padding: 3 }}>
      {movieDetails && (
        <div 
          className='movie-detail-container'
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path})`, // Set backdrop dynamically
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: 'white',
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          <div className='movie-title'>
            <Typography variant="h4" fontWeight={900} color="red" align="center" paddingBottom={2} >
              {movieDetails.title}
            </Typography>
            <Typography variant="body1" fontSize={16} fontWeight={500} align="center" color='white'>
              Overview: {movieDetails.overview}
            </Typography>
          </div>

          {/* Display the trailer */}
          {trailers.length > 0 && (
            <Box mt={2} className='trailer-container'>
              {/* <Typography variant="h5">Trailer:</Typography> */}
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${trailers[0].key}`} // Use the first trailer
                title="Movie Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '10px', marginTop: '10px' }}
              />
            </Box>
          )}
        </div>
      )}
    </Box>
  );
};

export default MovieDetail;
