
import {  Grid, Typography, } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {BsFacebook} from 'react-icons/bs';
import {FaInstagramSquare} from 'react-icons/fa';
import {BsTelegram} from 'react-icons/bs';
import {IoLogoYoutube} from 'react-icons/io';
import ModalBook from "../ModalBook";

function Footer() {
  return (
    <Box sx={{background:"#569668", textAlign:'center', fontFamily:'poppins'}}>
      <Box sx={{display:{xs:'none',sm:'block'}}}>

      
<Grid container spacing={2} sx={{textAlign:'center',padding:3,marginTop:30}} >
  <Grid item xs={4}>
    <Box>
        <Typography variant="h5" sx={{color:'black',padding:0.9,fontWeight:'bold',fontFamily:'poppins'}}> We Deliver on Time</Typography>
        <Typography variant="body1" sx={{marginY:4, fontFamily:'poppins'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore mollitia commodi praesentium corrupti exercitationem nobis provident corporis in nulla non quam rem itaque beatae sapiente, placeat eveniet fugiat. Rem, </Typography>
    </Box>
  </Grid>
  <Grid item xs={4}>
    <Box > 
        <Typography variant="h5"sx={{padding:0.9,fontWeight:'bold',color:'black', fontFamily:'poppins'}}>Expect Perfect Work from Us</Typography>
        <Typography variant="body1" sx={{marginY:4,fontFamily:'poppins'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat dolore suscipit asperiores exercitationem id fuga corporis laudantium velit cupiditate molestiae beatae non dicta, quos architecto nisi incidunt enim commodi </Typography>
    </Box>
  </Grid>
  <Grid item xs={4}>
    <Box>
    <Typography variant="h5"sx={{padding:0.9, fontWeight:'bold',color:'black',fontFamily:'poppins'}}>Book Now </Typography>
    <Typography variant="body1" sx={{marginY:4, fontFamily:'poppins'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eligendi accusamus, quae dicta amet dolorem saepe ab. Numquam nobis perspiciatis quod fugit ipsa, temporibus porro repellat, quas voluptate quasi reprehenderit.</Typography>
    <ModalBook />
    </Box>
  </Grid>
</Grid>
</Box>
<Box sx={{marginTop:5}}>
<h3>Our socials</h3>
<Box sx={{display:'flex', gap:5,justifyContent:'center',alignItems:'center',marginTop:3}}>
<a href='https://www.google.com'target="_blank" rel='noreferrer'><IoLogoYoutube size={40}  /></a>
<a href="https://t.me/photoAddis_jimma"target="_blank" rel='noreferrer'><BsTelegram size={40}/></a>
<a href="https://www.instagram.com"target="_blank" rel='noreferrer'><FaInstagramSquare size={40}/></a>
<a href="https://www.facebook.com/profile.php?id=100087378250982"target="_blank" rel='noreferrer'><BsFacebook size={40}/></a>
</Box>
</Box>
</Box>

  );
}

export default Footer;
