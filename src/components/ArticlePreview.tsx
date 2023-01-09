import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardHeader, Rating } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function ArticlePreview() {
  const {t} = useTranslation()
  return (
    <Card sx={{ maxWidth: 800 }}>
      <CardHeader
        title="First Name"
        subheader={
          <Rating
            readOnly={true}
            name="customized-10"
            defaultValue={2}
            max={10}
          />
        }
      />
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{t("learnMore")}</Button>
      </CardActions>
    </Card>
  );
}
