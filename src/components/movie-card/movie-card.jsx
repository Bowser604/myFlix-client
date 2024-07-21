import React from "react";
import PropTypes from "prop-types";


export const MovieCard = ({ movie, onMovieClick }) => {
    return (
      <div
      onClick={() => {
        onMovieClick(movie);
      }}
      >
        {movie.title}
      </div>
        );
    }; 
    MovieCard.propTypes = {
        movie: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            director: PropTypes.string.isRequired,
              Name: PropTypes.string.isRequired
        }).isRequired,
        onBookClick: PropTypes.func.isRequired
    };
