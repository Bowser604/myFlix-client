import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { SignupView } from "../signup-view/signup-view";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [token, setToken] = useState(storedToken? storedToken : null);

  if(!user) {
    return (
      <>
      <LoginView
        OnLoggedIn={(user, token) => {
          setUser(user);
          setToken(token);
        }}
      />
      or
      <SignupView />
      </>
    );
  }

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch("https://cinema-flix-f0ab625d491b.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
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
        // set Movies(movies); ?
        setMovies(moviesApi);
      })
      .catch((e) => console.log(e));
  }, [token]);

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
<button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>