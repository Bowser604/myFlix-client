import React from "react";
import PropType from "prop-types";
import { Card, Button } from "react-bootstrap";

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
        movie: PropType.shape({
            title: PropType.string.isRequired,
            imageUrl: PropType.string.isRequired,
            director: PropType.string.isRequired,
        }).isRequired
    };
