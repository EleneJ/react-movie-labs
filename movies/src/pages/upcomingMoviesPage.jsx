import React from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/spinner";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import IconButton from "@mui/material/IconButton";

const UpcomingMoviesPage = () => {
    const { data, error, isPending, isError } = useQuery({
        queryKey: ["upcoming"],
        queryFn: getUpcomingMovies,
      });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  const playlist = movies.filter((m) => m.playlist);
  localStorage.setItem("playlist", JSON.stringify(playlist));

  const addToPlaylist = (movieId) => true;

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      
      action={(movie) => (
        <IconButton onClick={() => addToPlaylist(movie.id)}>
          <PlaylistAddIcon />
        </IconButton>
      )}
    />
  );
};
 
export default UpcomingMoviesPage;