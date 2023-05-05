import React, { useState } from 'react';
import { Card, Rate } from 'antd';
import PropTypes from 'prop-types';
import './movies.css';

const MovieCard = ({ movie }) => {
  const [rating, setRating] = useState(0);

  const handleRateChange = (value) => {
    setRating(value);
  };

  return (
    <Card
      cover={<img alt="poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />}
      title={movie.title}
      description={ `${movie.release_date} 
                     ${movie.genres ? movie.genres.map((genre) => genre.name).join(', ') : ''}`}
    >
      <p>{movie.overview}</p>
      <Rate count={10} value={rating} onChange={handleRateChange} />
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
