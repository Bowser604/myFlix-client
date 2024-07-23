import React from "react";
import PropTypes from "prop-types";

export const MovieView = ({ movie, onBackClick }) => {
    return (
        <div>
            <div>
                <img src={movie.ImageUrl} alt={movie.title} />
            </div>
            <div>
                <h1>{movie.title}</h1>
                <div>
                  <span>Director: </span>
                  <span>{movie.director?.Name || "Unknown Director"}</span>
                </div>
            <div>
                <span>Genre: </span>
                <span>{movie.genre || "Unknown Genre"}</span>
            </div>
            <div>
                <button 
                    onClick={onBackClick}>Back</button>
                </div>
            </div>
        </div>
    );
};

MovieView.propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      imageUrl: PropTypes.string,
      director: PropTypes.shape({
        Name: PropTypes.string
      }).isRequired,
      genre: PropTypes.string
    }).isRequired,
    onBackClick: PropTypes.func.isRequired
  };