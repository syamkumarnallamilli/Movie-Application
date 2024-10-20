import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import TheatersIcon from "@mui/icons-material/Theaters";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GavelIcon from "@mui/icons-material/Gavel";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu"; 
import ScienceIcon from "@mui/icons-material/Science"; 
import PsychologyIcon from "@mui/icons-material/Psychology"; 
import StarIcon from "@mui/icons-material/Star"; 
import UpcomingIcon from "@mui/icons-material/Update"; 
import { fetchMovies } from '../redux/movieActions'; 
import { styled } from "@mui/material/styles";

const drawerWidth = 240;
const mobileDrawerWidth = 180; // Adjust this value as needed

const CustomDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    backgroundColor: 'rgb(23, 22, 22)',
    color: 'red',
    marginTop: 6.8,
    [theme.breakpoints.down('sm')]: { // Adjusts width for mobile devices
      width: mobileDrawerWidth,
    },
  },
}));

function ResponsiveDrawer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const categories = [
    { name: "Popular", icon: <WhatshotIcon sx={{color:'red'}} />, category: "popular" },
    { name: "Top Rated", icon: <StarIcon sx={{color:'red'}} />, category: "top_rated" },
    { name: "Upcoming", icon: <UpcomingIcon sx={{color:'red'}} />, category: "upcoming" },
    { name: "Action", icon: <MovieIcon sx={{color:'red'}} />, category: "action" },
    { name: "Adventure", icon: <LocalMoviesIcon sx={{color:'red'}} />, category: "adventure" },
    { name: "Comedy", icon: <TheatersIcon sx={{color:'red'}} />, category: "comedy" },
    { name: "Crime", icon: <GavelIcon sx={{color:'red'}} />, category: "crime" },
    { name: "History", icon: <HistoryEduIcon sx={{color:'red'}} />, category: "history" },
    { name: "Sci-Fi", icon: <ScienceIcon sx={{color:'red'}} />, category: "sci_fi" },
    { name: "Thriller", icon: <PsychologyIcon sx={{color:'red'}} />, category: "thriller" },
  ];

  const handleCategoryClick = (category) => {
    dispatch(fetchMovies(category));
    navigate(`/${category}`);
  };

  return (
    <CustomDrawer variant="permanent" open>
      <Toolbar />
      <List>
        {categories.map((category) => (
          <ListItem key={category.name} disablePadding>
            <ListItemButton 
              onClick={() => handleCategoryClick(category.category)}
              sx={{ '&:hover': { backgroundColor: '#1a1a1a' } }}
            >
              <ListItemIcon>{category.icon}</ListItemIcon>
              <ListItemText primary={category.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </CustomDrawer>
  );
}

export default ResponsiveDrawer;
