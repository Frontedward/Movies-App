import React, { useState, useEffect } from "react";
// import { format } from 'date-fns';

import './MovieCard.css';

function MovieCard() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=067511a509b3b027f6785ed944571147&query=return`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error(error));
  }, []);

  // const release = format(new Date(movie.release_date), 'MMMM dd, yyyy');

  return (
    <div className='main'>
      {movies.map(movie => (
        <div className='movie-card' key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <div className="movie-info">
            <h2 className='movie-title'>{movie.title}</h2>
            <p className='movie-release-date'>{movie.release_date}</p>
            <p className='movie-genre'>{movie.genre_ids}</p>
            <p className='movie-overview'>{movie.overview}</p>
          </div>

        </div>
      ))}
    </div>
  );
}

export default MovieCard;
