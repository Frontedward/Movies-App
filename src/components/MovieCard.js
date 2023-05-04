import React, { Component } from 'react';
// import Spinner from './Spinner';
import './MovieCard.css';

export default class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=067511a509b3b027f6785ed944571147&query=return`)
      .then(response => response.json())
      .then(data => {
        const movies = data.results.map(movie => {
          const releaseDate = movie.release_date;
          const formattedDate = new Date(releaseDate).toLocaleDateString("en-US", {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
          return { ...movie, release_date_formatted: formattedDate };
        });
        this.setState({ movies });
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className='main'>
        {/*<Spinner />*/}
        {this.state.movies.map(movie => (
          <div className='movie-card' key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                 alt={movie.title} />
            <div className="movie-info">
              <h2 className='movie-title'>{movie.title}</h2>
              <p className='movie-release-date'>{movie.release_date_formatted}</p>
              <p className='movie-genre'>{movie.genre_ids}</p>
              <p className='movie-overview'>{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

