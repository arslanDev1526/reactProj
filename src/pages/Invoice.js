import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";

const Invoice = () => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
            }}
            alt="The house from the offer."
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvzAEGxePPxNOLvg8J5AhXBg-AHMmmbbcJkA&usqp=CAU"
          />
          <CardContent sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center'}}>
            <Typography variant="h4">Special offer</Typography>

            <Typography fontSize={15} sx={{my:3}} variant="p">
              5000Rs per month for Subscription click below{" "}
            </Typography>

            <Button variant="contained">Subscribbe </Button>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button sx={{mx:1}} size="large" color="primary">
            For Detail
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Invoice;
