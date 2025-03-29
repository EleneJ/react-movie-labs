import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import YouTubeIcon from "@mui/icons-material/YouTube";  // You can use the YouTube icon or any icon you prefer
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";

// Modal to show the trailer
const WatchTrailerIcon = ({ trailerKey }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton aria-label="watch trailer" onClick={handleClickOpen}>
        <YouTubeIcon color="primary" fontSize="large" />
      </IconButton>

      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle>Watch Trailer</DialogTitle>
        <DialogContent>
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="Movie Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default WatchTrailerIcon;
