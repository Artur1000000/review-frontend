import React from "react";
import ArticlePreview from "../components/ArticlePreview";
import { Grid } from "@mui/material";

export default function MainPage() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={8}>
        <ArticlePreview />
      </Grid>
      <Grid item xs={8}>
        <ArticlePreview />
      </Grid>
      <Grid item xs={8}>
        <ArticlePreview />
      </Grid>
      <Grid item xs={8}>
        <ArticlePreview />
      </Grid>
      <Grid item xs={8}>
        <ArticlePreview />
      </Grid>
      <Grid item xs={8}>
        <ArticlePreview />
      </Grid>
      <Grid item xs={8}>
        <ArticlePreview />
      </Grid>
      <Grid item xs={8}>
        <ArticlePreview />
      </Grid>
      <Grid item xs={8}>
        <ArticlePreview />
      </Grid>
      <Grid item xs={8}>
        <ArticlePreview />
      </Grid>
    </Grid>
  );
}
