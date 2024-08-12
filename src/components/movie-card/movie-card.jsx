import React from "react";
import PropTypes from "prop-types";

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
      <div 
        onClick={() => {
          onMovieClick(movie);
        }}
        >
          {movie.Title}
        </div>
      );
    }; 
    MovieCard.propTypes = {
        movie: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            title: PropTypes.string,
            director: PropTypes.shape({
              Name: PropTypes.string,
            })
        }).isRequired,
        onMovieClick: PropTypes.func.isRequired
    };
