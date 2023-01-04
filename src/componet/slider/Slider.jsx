import { IconButton } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Stack } from "@mui/system";
import { AiFillPhone } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

function Slider() {
  const items = [
    { id: 8, src: require("../../Asset/addis.png"), title: "oromo" },
    {
      id: 1,
      src: require("./../../Asset/oromo2.jpg"),
      title: "girl",
    },
    { id: 2, src: require("./../../Asset/gurage.jpg"), title: "omo vally" },
    {
      id: 3,
      src: require("./../../Asset/girlwithcamera.jpg"),
      title: "gurage",
    },
    {
      id: 4,
      src: require("./../../Asset/gurage.jpg"),
      title: "gurage",
    },
    { id: 5, src: require("./../../Asset/gurage2.jpg"), title: "gurage" },
    { id: 6, src: require("./../../Asset/oromogirls.jpg"), title: "oromo" },
    { id: 7, src: require("./../../Asset/oromo2.jpg"), title: "oromo" },
  ];
  return (
    <Carousel>
      {items.map((item) => (
        <Box
          sx={{
            textAlign: "center",
            gap:15
          }}
        >
          <img
            src={item.src}
            alt={item.title}
            style={{ width: "100%", height: '80vh' }}
          />
          <Stack
            direction="row"
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            <IconButton color="primary" back size="large">
           <a href="tel:+2519243676376" style={{textdecoration:'none'}}>
           <AiFillPhone />
           </a>
                
                 
             
            </IconButton>
            <IconButton color="primary" back size="large">
              <a href="https://t.me/photoAddis_jimma" target="_blank" rel='noreferrer'>
              <BsTelegram />
              </a>
             
             
            </IconButton>
            <IconButton color="primary" back size="large">
              <a href="https://www.facebook.com/profile.php?id=100087378250982" target="_blank" rel='noreferrer' >
              <AiFillInstagram />
              </a>
            
            </IconButton>
          </Stack>
        </Box>
      ))}
    </Carousel>
  );
}

export default Slider;
