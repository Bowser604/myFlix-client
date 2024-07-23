import React from "react";
import PropTypes from "prop-types";

export const MovieView = ({ movie, onBackClick }) => {
    return (
        <div>
          <div>
            <button onClick={() => onBackClick()}>Back</button>
          </div>
          <div>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <div>
                <span>Director: </span>
                <span>{movie.director.Name}</span>
            </div>
            <div>
                <span>Genre: </span>
                <span>{movie.genre}</span>
            </div>
            <div>
                <span>Year: </span>
                <span>{movie.year}</span>
            </div>
        </div>
    </div>
    );
  };

MovieView.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        director: PropTypes.shape({
            Name: PropTypes.string.isRequired
        }).isRequired,
        imageUrl: PropTypes.string.isRequired
    }).isRequired,
    onBackClick: PropTypes.func.isRequired
  };