import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext"; // Import MoviesContext
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd"; // Material-UI Playlist Icon

const AddToPlaylistIcon = ({ movie }) => {
  const context = useContext(MoviesContext); // Get the context

  const handleAddToPlaylist = (e) => {
    e.preventDefault(); // Prevent default action (form submission, etc.)
    context.addToPlaylist(movie); // Call addToPlaylist from context
  };

  return (
    <IconButton aria-label="add to playlist" onClick={handleAddToPlaylist}>
      <PlaylistAddIcon sx={{ color: '#8F4700' }} fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylistIcon;
