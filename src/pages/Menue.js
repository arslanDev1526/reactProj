import React from "react";
import {
  Box,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";

const handleClick = () => { 
console.log ('it partially working')
}

const Menue = () => {
  return (
    <>
      <Typography variant="h2" padding={3} textAlign="center">
        {" "}
        Weekly Menue{" "}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "80px",
          m: 6,
        }}
      >
        <Card sx={{ maxWidth: 250 }}>
          <CardActionArea>
            <CardMedia>
              <Box
                component="img"
                sx={{
                  height: 233,
                  width: 350,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src="https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900"
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Pizza
              </Typography>
              <Typography variant="h5"> Monday </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              detail
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 250 }}>
          <CardActionArea>
            <CardMedia>
              <Box
                component="img"
                sx={{
                  height: 233,
                  width: 350,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src="https://media.istockphoto.com/photos/burrito-with-grilled-chicken-and-vegetables-picture-id596382080?k=20&m=596382080&s=612x612&w=0&h=JGZuCBT2csSbWnl5-rOYSXGQeuTEt9BMlr4Hz3g1y_M="
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Shwrama
              </Typography>
              <Typography variant="h5">Tuesday</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button onClick={handleClick} size="small" color="primary">
              detial
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 250 }}>
          <CardActionArea>
            <CardMedia>
              <Box
                component="img"
                sx={{
                  height: 233,
                  width: 350,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThe2WStr0p-NsgQZkpZV8aMw8cxiYvOwMLc_tmwsli&s"
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Burger
              </Typography>
              <Typography variant="h5">Wednesday</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              detial
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 250 }}>
          <CardActionArea>
            <CardMedia>
              <Box
                component="img"
                sx={{
                  height: 233,
                  width: 350,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNo3kTDfaGUXmovcuIoCggpJSqntBITJd0qg&usqp=CAU"
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Fries
              </Typography>
              <Typography variant="h5">Thursday</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              detial
            </Button>
          </CardActions>
        </Card>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "80px",
          m: 6,
        }}
      >
        <Card sx={{ maxWidth: 250 }}>
          <CardActionArea>
            <CardMedia>
              <Box
                component="img"
                sx={{
                  height: 233,
                  width: 350,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src="https://kfoods.com/images1/newrecipeicon/pakwan-house-chicken-karahi-recipe_14563.jpg"
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Krahi
              </Typography>
              <Typography variant="h5">Friady</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              detial
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 250 }}>
          <CardActionArea>
            <CardMedia>
              <Box
                component="img"
                sx={{
                  height: 233,
                  width: 350,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src="https://www.masala.tv/wp-content/uploads/2016/05/Masalaydaar-Daal-Mash.jpg"
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Daal Mash
              </Typography>
              <Typography variant="h5">Saturday</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              detial
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 250 }}>
          <CardActionArea>
            <CardMedia>
              <Box
                component="img"
                sx={{
                  height: 233,
                  width: 350,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKKwTS1TKu4B14HZKDH62_wjmUcyr943JHA&usqp=CAU"
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Daal Anda
              </Typography>
              <Typography variant="h5">Sunday</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              detial
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 250 }}>
          <CardActionArea>
            <CardMedia>
              <Box
                component="img"
                sx={{
                  height: 233,
                  width: 350,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKc2ovKzY2Z66TrE0MF25UJchv90jR706zg&usqp=CAU"
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Special day
              </Typography>
              <Typography variant="h5">Price 3000Rs</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              detial
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default Menue;
