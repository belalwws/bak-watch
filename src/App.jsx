import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import AboutUs from "./Screens/AboutUs";
import NotFound from "./Screens/NotFound";
import MoviePage from "./Screens/Movie";
import Anime from "./Screens/Anime";
import SingleMovie from "./Screens/SingleMovie";
import WatchPage from "./Screens/WatchPage";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Profile from "./Screens/Dashboard/Profile";
import Aos from "aos";
import Password from "./Screens/Dashboard/Password";
import FavouritesMovies from "./Screens/Dashboard/FavouritesMovies";
import MovieList from "./Screens/Dashboard/Admin/MovieList";
import Dashboard from "./Screens/Dashboard/Admin/Dashboard";
import Categores from "./Screens/Dashboard/Admin/Categores";
import Users from "./Screens/Dashboard/Admin/Users";
import NewAnime from "./Screens/NewAnime";
const App = () => {
  Aos.init();
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/Movis" element={<MoviePage />} />
      <Route path="/Movis/:id" element={<SingleMovie />} />
      <Route path="/Anime/:id" element={<NewAnime />} />
      <Route path="/watch/:id" element={<WatchPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Anime" element={<Anime />} />
      <Route path="/password" element={<Password />} />
      <Route path="/favorites" element={<FavouritesMovies />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/categories" element={<Categores />} />
      <Route path="/movieslist" element={<MovieList />} />
      <Route path="/users" element={<Users />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
