import React from "react";
import "./movie-view.scss";

export const MovieView = ({ movie, onBackClick }) => {
    return (
        <div className="movie-view">
            <div className="back-button">
                <button onClick={() => onBackClick()}>Back</button>
            </div>
            <div className="movie-image">
                <img src={movie.ImagePath} alt={`${movie.Title} poster`} />
            </div>
            <div className="movie-details">
                <div className="movie-title">
                    <span>Title: </span>
                    <span>{movie.Title}</span>
                </div>
                <div className="movie-director">
                    <span>Director: </span>
                    <span>{movie.Director.Name}</span>
                </div>
                <div className="movie-genre">
                    <span>Genre: </span>
                    <span>{movie.Genre.Name}</span>
                </div>
                <div className="movie-year">
                    <span>Year: </span>
                    <span>{movie.Year}</span>
                </div>
                <div className="movie-description">
                    <span>Description: </span>
                    <span>{movie.Description}</span>
                </div>
            </div>
        </div>
    );
};

