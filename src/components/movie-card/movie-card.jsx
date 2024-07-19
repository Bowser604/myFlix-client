import React from "react";
import PropTypes from "prop-types";


export const MovieCard = ({ movie, onMovieClick }) => {
    return (
    <div className="movie-card">
      <img src={movie.imageUrl} alt={movie.title} className="movie-card-card-img" />
      <div className="movie-card-body">
        <h2 className="movie-card-title">{movie.title}</h2>
        <p className="movie-card-text">{movie.director.Name}</p>
        <button
          onClick={() => {
                onMovieClick(movie);
              }} 
              className="movie-card-button"
            >
              Open
              </button>
            </div>
          </div>
        );
    }; 
    MovieCard.propTypes = {
        movie: PropTypes.shape({
            title: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            director: PropTypes.string.isRequired,
              Name: PropTypes.string.isRequired,
            }).isRequired,
          onMovieClick: PropTypes.func.isRequired,
    };
