import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
        id: 1,
        Title: "Snatch",
        Director: "Guy Ritchie",
        Image:
          "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg",
        Genre: "Crime",
      },
      {
        id: 2,
        Title: "Sicario",
        Director: "Denis Villeneuve",
        Image:
          "https://images-na.ssl-images-amazon.com/images/I/51WAikRq37L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
        Genre: "Action",
      },
      {
        id: 3,
        Title: "Gladiator",
        Director: "Ridley Scott",
        Image:
          "https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg",
        Genre: "Action",
      },
  ]);

const [selectedMovie, setSelectedMovie] = useState(null);

if (selectedmovie) {
    return (
        <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />  
    );
}

if (movie.length === 0) {
    return <div>The list is empty!</div>;
}

return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
