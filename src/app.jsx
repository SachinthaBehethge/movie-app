import {
  Box,
  FormControl,
  Typography,
  Input,
  Button,
  Grid,
} from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import Movie from "./components/movie";

// 71d83499
// http://www.omdbapi.com/?i=tt3896198&apikey=71d83499

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=71d83499";
// const movie1 = {
//   Title: "Batman v Superman: Dawn of Justice (Ultimate Edition)",
//   Year: "2016",
//   imdbID: "tt18689424",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg",
// };

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("batman");
  }, []);
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          variant="h2"
          fontFamily={"sans-serif"}
          gutterBottom
          textAlign="center"
        >
          My Movies
        </Typography>

        <FormControl
          fullWidth
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 2,
          }}
        >
          <Grid container justifyContent={"center"} spacing={0}>
            <Grid item md={8}>
              <Input
                sx={{
                  minWidth: 0,
                  width: { lg: 540, md: 350 },
                  ml: { lg: 40, sm: 10 },
                  mt: 1,
                }}
                className="searchTerm"
                id="searchTerm"
                placeholder="Search Movies Here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Grid>

            <Grid item md={2}>
              <Button
                sx={{ width: 50, ml: 0 }}
                variant="outlined"
                color="error"
                onClick={(e) => {
                  searchMovies(searchTerm);
                }}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </FormControl>
        {movies?.length > 0 ? (
          <Grid
            container
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            {movies.map((movie) => (
              <Movie movie={movie} />
            ))}
          </Grid>
        ) : (
          <Box sx={{ m: 15 }}>
            <Typography variant="h3"> No Movies Found</Typography>
          </Box>
        )}
        {/* <Movie movie1={movie1} /> */}
      </Box>
    </>
  );
};

export default App;
