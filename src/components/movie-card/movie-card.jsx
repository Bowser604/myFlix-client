import React from "react";
import PropTypes from "prop-types";


export const MovieCard = ({ movie, onMovieClick }) => {
    return (
    <Card>
        <Card.Img variant="top" src={movie.imageUrl} />
        <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.director.Name}</Card.Text>
            <Button
              onClick={() => {
                onMovieClick(movie);
              }} variant="link">
                Open
              </Button>
            </Card.Body>
            </Card>
        );
    }; 
    MovieCard.propTypes = {
        movie: PropTypes.shape({
            title: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            director: PropTypes.string.isRequired,
        }).isRequired,
        onBookClick: PropTypes.func.isRequired
    };
