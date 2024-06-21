import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
        id: 1,
        Title: "Snatch",
        Director: "Guy Ritchie",
        ImageUrl:
          "https://snatch.fandom.com/wiki/Snatch?file=Snatch_Film_Poster.jpg",
        Genre: "Crime"
      },
      {
        id: 2,
        Title: "Sicario",
        Director: "Denis Villeneuve",
        ImageUrl:
          "https://en.wikipedia.org/wiki/Sicario_(2015_film)#/media/File:Sicario_poster.jpg",
        Genre: "Action"
      },
      {
        id: 3,
        Title: "Gladiator",
        Director: "Ridley Scott",
        ImageUrl:
          "https://en.wikipedia.org/wiki/Gladiator_(2000_film)#/media/File:Gladiator_(2000_film_poster).png",
        Genre: "Action"
      },
  ]);

const [selectedMovie, setSelectedMovie] = useState(null);

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
