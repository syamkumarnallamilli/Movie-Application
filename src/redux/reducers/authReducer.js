const initialState = {
    isAuthenticated: false,
    user: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "REGISTER_SUCCESS":
        return { ...state }; // Update state as needed
      case "LOGIN_SUCCESS":
        return { ...state, isAuthenticated: true, user: action.payload };
      case "LOGOUT":
        return initialState; // Reset state on logout
      default:
        return state;
    }
  };
  
  export default authReducer;
  