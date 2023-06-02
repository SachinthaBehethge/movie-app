import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

// const movie1 = {
//   Title: "Batman v Superman: Dawn of Justice (Ultimate Edition)",
//   Year: "2016",
//   imdbID: "tt18689424",
//   Type: "movie",
//   Poster: "N/A",
// };

const Movie = ({ movie }) => {
  return (
    <Grid item xs={12} sm={6} md={3} key={movie.imbdID}>
      <Card sx={{ maxWidth: 300, m: 5, height: 350 }}>
        <CardActionArea>
          <Typography gutterBottom variant="span" component="div">
            {movie.Year}
          </Typography>
          <CardMedia
            component="img"
            height="140"
            image={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/300"
            }
            alt={movie.Title}
          />
          <CardContent>
            <Typography gutterBottom variant="span" component="div">
              {movie.Type}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {movie.Title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Movie;
