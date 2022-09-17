import { memo, useEffect, useMemo, useState } from "react";
import { Button } from "./Button";

import { api } from "../services/api";

import GenreResponseProps from "../interfaces/GenreResponseProps";

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}

const SideBarComponent = ({
  genres,
  selectedGenreId,
  handleClickButton,
}: SideBarProps) => {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
};

export const SideBar = memo(SideBarComponent);
