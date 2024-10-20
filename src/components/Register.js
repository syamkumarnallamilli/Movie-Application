// src/components/Register.js
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Register.css"; // Import CSS for styling

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setError("Passwords do not match!");
//       return;
//     }

//     // Store user details in localStorage (simulate registration)
//     const user = { email, password };
//     localStorage.setItem(email, JSON.stringify(user)); // Use email as the key

//     // Navigate to login after successful registration
//     alert("Registration successful! Please login.");
//     navigate("/login");
//   };

//   return (
//     <div className="register-container">
//       <div className="register-card">
//         <h2>Register for Netflix</h2>
//         <form onSubmit={handleRegister}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//           {error && <p className="error">{error}</p>}
//           <button type="submit">Register</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;

// import React, { useState } from "react";
// import { useDispatch } from "react-redux"; // Import useDispatch
// import { register } from "../redux/authActions"; // Import the register action
// import { useNavigate } from "react-router-dom";
// import "./Register.css"; // Import CSS for styling

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const dispatch = useDispatch(); // Use dispatch to connect to Redux
//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setError("Passwords do not match!");
//       return;
//     }

//     // Dispatch the register action
//     dispatch(register(email, password))
//       .then(() => {
//         alert("Registration successful! Please login.");
//         navigate("/login");
//       })
//       .catch((err) => {
//         setError(err.message); // Display error if registration fails
//       });
//   };

//   return (
//     <div className="register-container">
//       <div className="register-card">
//         <h2>Register for Netflix</h2>
//         <form onSubmit={handleRegister}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//           {error && <p className="error">{error}</p>}
//           <button type="submit">Register</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from "react";
import { useDispatch } from "react-redux"; // Import useDispatch
import { register } from "../redux/authActions"; // Import the register action
import { useNavigate } from "react-router-dom";
import "./Register.css"; // Import CSS for styling

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch(); // Use dispatch to connect to Redux
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
        console.log("User registered:", { email, password });

      setError("Passwords do not match!");
      return;
    }

    // Dispatch the register action
    try {
      await dispatch(register(email, password)); // Await the dispatch
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      setError(err.message); // Display error if registration fails
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Register for Netflix</h2>
        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
