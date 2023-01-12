import { Paper, Button, Grid, Typography, Box, Container,  } from '@mui/material'
import React, { useState } from 'react'
import Birthday from './../Asset/bday.jpg'
import wedding from './../Asset/wedding.jpg'
import grad from './../Asset/merkat.jpg'
import Wedding from './LightBox/Wedding'
import Birth from './LightBox/Birth'
import Grad from './LightBox/Grad'
import BridalShower from './LightBox/BridalShower'
import Baner from './LightBox/Baner'



function Gallary() {
  const [open , setOpen]=useState(false)
  return (
    <div id='gallary'>
      
      <Box width='93%'>

      
      <Typography variant='h2' textAlign='center'color='#545fc4' fontFamily="poppins"> Gallery</Typography>
      <Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
  margin={0}
  padding={0}
  spacing={1}
  
  sx={{display:{md:'flex'}}}
 
>
  

  
  <Grid item xs={4}>
    <Paper elevation={16}  sx={{
      
      height:400,
      bgcolor:'#569668',
      padding:2,
      textAlign:'center',
      borderRadius:3,
      marginBottom:3,
     width:{md:880},
     mx:1
    
    }}>
      <Typography variant='h5' fontFamily='poppins' color='white'>Birthday Pictures</Typography>
      <img src={Birthday} alt='birthday img' width='100%' height={300} style={{borderRadius:'10px'}}/>
      <Button variant="contained" color="success"sx={{mt:3}}  onClick={() => setOpen(true)}>
              See More
            </Button>
<Birth open={open} close={()=>setOpen(false)}/>
    </Paper>
  </Grid>
  <Grid item xs={4}>
    <Paper elevation={16} sx={{
      bgcolor:'primary.main',
   
      
      height:400,
      bgcolor:'#569668',
      padding:2,
      textAlign:'center',
      borderRadius:3,
      width:{md:880},
      mx:1
    }}>
    <Typography variant='h5' fontFamily='poppins' color='white' >Graduation Pictures</Typography>
    <img src={wedding} alt='birthday img' width='90%' height={300} style={{borderRadius:'10px'}}/>
    <Button variant="contained" color="success" sx={{mt:3}}onClick={()=>setOpen(true)}>
              See More
            </Button>
            <Grad open={open} close={()=>setOpen(false)}/>
    </Paper>
  </Grid>
  <Grid item xs={4}>
    <Paper elevation={16} sx={{
      bgcolor:'primary.main',
   
      
      height:400,
      bgcolor:'#569668',
      padding:2,
      textAlign:'center',
      borderRadius:3,
      width:{md:880},
      mx:1
    }}>
    <Typography variant='h5' fontFamily='poppins' color='white' >Graduation Pictures</Typography>
    <img src={grad} alt='birthday img' width='100%' height={300} style={{borderRadius:'10px'}}/>
    <Button variant="contained" color="success" sx={{mt:3}}onClick={()=>setOpen(true)}>
              See More
            </Button>
            <Grad open={open} close={()=>setOpen(false)}/>
    </Paper>
  </Grid>

</Grid>
</Box>

    </div>
  )
}

export default Gallary