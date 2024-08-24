import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
// import "./movie-card.scss";

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
      <Card className="Movie-card" onClick={() => onMovieClick(movie)}>
        <Card.Img variant="top" src={movie.ImagePath} alt={`${movie.Title} Poster`} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
        </Card.Body>
      </Card>
    );
};

    MovieCard.propTypes = {
        movie: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            title: PropTypes.string,
            imagePath: PropTypes.string,
            director: PropTypes.shape({
              Name: PropTypes.string,
            })
        }).isRequired,
        onMovieClick: PropTypes.func.isRequired
    };
