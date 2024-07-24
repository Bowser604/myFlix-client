import React from "react";
import PropTypes from "prop-types";


export const MovieCard = ({ movie, onMovieClick }) => {
    return (
      <div onClick={() => onMovieClick(movie)}>
        <h2>{movie.title}</h2>
        <p>{movie.director.Name}</p>
        </div>
      );
    }; 
    MovieCard.propTypes = {
        movie: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            director: PropTypes.shape({
              Name: PropTypes.string.isRequired
            }).isRequired
        }).isRequired,
        onMovieClick: PropTypes.func.isRequired
    };
