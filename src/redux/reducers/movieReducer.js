const initialState = {
    popular: [],
    action: [],
    adventure: [],
    comedy: [],
    crime: [],
    history: [],
    sci_fic: [],
    thriller: [],
    upcoming: [],
    top_rated: [],
    searchResults: [],
    
    movieDetails: {}, // For storing movie details
    videos: [], // For storing video information
    isLoading: false, // Loading state
    error: null, // Error state
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_MOVIE_DETAILS_REQUEST":
      case "FETCH_VIDEOS_REQUEST":
      case "FETCH_MOVIES_REQUEST": // General movies fetching request
        return {
          ...state,
          isLoading: true, // Set loading to true when fetching
          error: null, // Reset errors when a new request is made
        };
  
      case "SET_MOVIE_DETAILS":
        return {
          ...state,
          movieDetails: action.payload, // Store the fetched movie details
          isLoading: false, // Set loading to false after fetching details
        };
  
      case "SET_VIDEOS":
        return {
          ...state,
          videos: action.payload, // Store the fetched videos
          isLoading: false, // Set loading to false after fetching videos
        };
  
      case "FETCH_MOVIE_DETAILS_FAILURE":
      case "FETCH_VIDEOS_FAILURE":
      case "FETCH_MOVIES_FAILURE": // General movies fetching failure
        return {
          ...state,
          isLoading: false, // Stop loading if there’s an error
          error: action.payload, // Store the error message
        };
  
      case "SET_MOVIES":
        return {
          ...state,
          [action.payload.category]: action.payload.movies, // Store movies for the specific category
          isLoading: false, // Set loading to false after fetching category
        };
  
      case "SET_SEARCH_RESULTS":
        return {
          ...state,
          searchResults: action.payload, // Store search results
          isLoading: false, // Set loading to false after fetching search results
        };
        
  
        case "CLEAR_SEARCH_RESULTS":
    return {
      ...state,
      searchResults: [], // Clear search results
    };
  
  
      default:
        return state;
    }
  };
  
  export default movieReducer;
  