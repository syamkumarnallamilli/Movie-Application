import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ResponsiveDrawer from "./components/Sidebar";
import Header from "./components/Header";
import MovieGridRedux from "./components/MovieGridRedux";
import SearchResults from "./components/SearchResults";
import Login from "./components/Login";
import Register from "./components/Register";
import MovieDetail from "./components/MovieDetail";
import { Box } from "@mui/material";
import './App.css';
const theme = createTheme();

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false); // State for drawer visibility
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev); // Toggle drawer state
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box
          sx={{
            display: "flex",
            width: "100vw",
            height: "100vh",
            backgroundColor: "black",
          }}
        >
          <Header />
          {isLoggedIn && <ResponsiveDrawer open={drawerOpen} onToggle={toggleDrawer} />}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              padding: 3,
              marginTop: "55px",
              marginLeft: isLoggedIn ? { xs: "0px", sm: "240px" } : "0px",
              width: isLoggedIn ? { xs: "100%", sm: "calc(100% - 240px)" } : "100%",
              backgroundColor: "black",
              color: "white",
            }}
          >
            <Routes>
              <Route path="/" element={isLoggedIn ? <Navigate to="/popular" /> : <Navigate to="/login" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {isLoggedIn && (
                <>
                  <Route path="/popular" element={<MovieGridRedux category="popular" />} />
                  <Route path="/top_rated" element={<MovieGridRedux category="top_rated" />} />
                  <Route path="/upcoming" element={<MovieGridRedux category="upcoming" />} />
                  <Route path="/action" element={<MovieGridRedux category="action" />} />
                  <Route path="/adventure" element={<MovieGridRedux category="adventure" />} />
                  <Route path="/comedy" element={<MovieGridRedux category="comedy" />} />
                  <Route path="/crime" element={<MovieGridRedux category="crime" />} />
                  <Route path="/history" element={<MovieGridRedux category="history" />} />
                  <Route path="/sci-fi" element={<MovieGridRedux category="sci_fi" />} />
                  <Route path="/thriller" element={<MovieGridRedux category="thriller" />} />
                  <Route path="/search" element={<SearchResults />} />
                  <Route path="/movie/:id" element={<MovieDetail />} />
                </>
              )}
              <Route path="*" element={isLoggedIn ? <Navigate to="/popular" /> : <Navigate to="/login" />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
