import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("https://cinema-flix-f0ab625d491b.herokuapp.com/movies")
      .then((response) => response.json())
      .then((movies) => {
        console.log("movies", movies);
        const moviesApi = movies.map((movie) => ({
            id: movie._id,
            title: movie.Title,
            description: movie.Description,
            year: movie.Genre.Year,
            genre: movie.Genre.Name,
            director: {
              Name: movie.Director.Name
            }
        }));
        setMovies(moviesApi);
      })
      .catch((e) => console.log(e));
  }, []);

if (selectedMovie) {
    return (
        <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />  
    );
}

if (movies.length === 0) {
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
