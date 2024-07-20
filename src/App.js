import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import { searchMovies } from './api/tmdb';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = async (query) => {
    const response = await searchMovies(query);
    setMovies(response.data.results);
    setSelectedMovie(null);
  };

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="app-container">
      <div className="app-content">
        <h1>Movie Search App</h1>
        <SearchBar onSearch={handleSearch} />
        <MovieList movies={movies} onMovieSelect={handleMovieSelect} />
        <MovieDetail movie={selectedMovie} />
      </div>
    </div>
  );
};

export default App;
