

export const register = (email, password) => async (dispatch) => {
    return new Promise((resolve, reject) => {
      // Simulate registration logic
      if (email && password) {
        // Store user details in localStorage (simulate registration)
        const user = { email, password };
        localStorage.setItem(email, JSON.stringify(user)); // Use email as the key
        dispatch({ type: "REGISTER_SUCCESS", payload: user }); // Dispatch success action
        resolve(); // Resolve the promise on successful registration
      } else {
        reject(new Error("Invalid registration details")); // Reject if registration fails
      }
    });
  };
  

  export const login = (email, password) => (dispatch) => {
    return new Promise((resolve, reject) => {
      // Retrieve user data from localStorage
      const user = JSON.parse(localStorage.getItem(email)); // Fetch user from localStorage
  
      // Validate credentials
      if (user && user.password === password) {
        dispatch({ type: "LOGIN_SUCCESS", payload: user });

        resolve(); // Resolve the promise on successful login
        console.log("Logged in user:", user);
      } else {
        reject(new Error("Invalid username or password \n please register")); // Reject if login fails
      }
    });
  };
  
export const logout = () => (dispatch) => {
  dispatch({ type: "LOGOUT" });
};
