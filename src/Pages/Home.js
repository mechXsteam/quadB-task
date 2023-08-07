// MUI imports

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MovieIcon from "@mui/icons-material/Movie";

import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Movie verse
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Album({ data }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <MovieIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Movie Verse
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Movie Verse
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Discover a captivating movie gallery web app, featuring a vast
              collection of films across genres. Browse, explore, and immerse
              yourself in the world of cinema like never before!
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {data.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {/* show name */}
                      {card.show.name}
                    </Typography>
                    <Typography>
                      {/* Show the rating if there it is, otherwise display NA */}
                      <ThumbUpIcon fontSize="small" /> &nbsp; Ratings:{" "}
                      {card.show.rating.average !== null
                        ? card.show.rating.average
                        : "NA"}
                    </Typography>
                    {/* Showing all the genres */}
                    <Stack direction={"row"}>
                      {card.show.genres.map((genre) => (
                        <Typography sx={{ mr: 1 }}>#{genre}</Typography>
                      ))}
                    </Stack>
                    {/* status of the web series */}
                    <Typography>{card.show.status}</Typography>
                    {/* date of premier */}
                    <Typography>Premiered on: {card.show.premiered}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">
                      {/* linking each card to its detail page */}
                      <Link className="no-link-style" to={`${card.show.id}`}>
                        View
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          All rights reserved
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
