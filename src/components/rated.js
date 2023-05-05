import React, { useState, useEffect } from 'react';
import MovieCard from './movies-card';

const Rated = () => {
  const [ratedMovies, setRatedMovies] = useState([]);

  useEffect(() => {
    const ratedMoviesFromLocalStorage = JSON.parse(localStorage.getItem('ratedMovies') || '[]');
    setRatedMovies(ratedMoviesFromLocalStorage);
  }, []);

  return (
    <div>
      {ratedMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Rated;