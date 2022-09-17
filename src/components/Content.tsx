import { memo, useEffect, useState } from "react";

import { MovieCard } from "../components/MovieCard";

import { api } from "../services/api";

import MovieProps from "../interfaces/MovieProps";
import GenreResponseProps from "../interfaces/GenreResponseProps";

interface ContentProps {
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
}

const ContentComponent: React.FC<ContentProps> = ({
  movies,
  selectedGenre,
}) => {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export const Content = memo(ContentComponent);
