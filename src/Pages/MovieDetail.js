import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MovieIcon from "@mui/icons-material/Movie";

import BookTicketForm from "./BookTicketForm";

import { useParams } from "react-router-dom";

const defaultTheme = createTheme();

export default function MovieDetail({ data }) {
  // catching the id from the url
  const { id } = useParams();

  //   filtering out the desired movie
  const movieDetails = data.filter((movie) => movie.show.id == id);
  const movie = movieDetails[0];

  //   Because the summary is not in the text form, therefore we've to inject HTML into the component
  const summaryHtml = { __html: movie.show.summary };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={5}
          sx={{
            backgroundImage: `url(${movie.show.image.original})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <MovieIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {/* show name */}
              {movie.show.name}
            </Typography>
            <Typography
              component="div"
              variant="body1"
              //   injecting the HTML summary
              dangerouslySetInnerHTML={summaryHtml}
              sx={{
                backgroundColor: "lightgray",
                padding: 2,
                borderRadius: 10,
              }}
            />

            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Grid container>
                {/* modal ticket booking form */}
                <BookTicketForm movie={movie} />
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
