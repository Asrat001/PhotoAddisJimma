import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import React from 'react'
import {GrSend} from 'react-icons/gr'
import {AiFillPhone} from 'react-icons/ai'
import {BsTelegram} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import contactus from './Asset/contact-us-vector.png'
import { Stack } from '@mui/system'

function Contacts() {
  return (
    <div id='contact'>
      <Box sx={{marginTop:5}}>
      <Typography variant="h2" sx={{ color: "#545fc4", textAlign: "center" , fontFamily:'poppins', marginTop:'5',fontSize:{xs:'50px',sm:'70px'}}}>Contact Us</Typography>
        <Box display='flex'justifyContent='space-evenly' alignItems='center' gap={3}  sx={{ marginX:4,
                }}>
            <Box sx={{
                //"& .MuiTextField-root": { m: 1, width: "40ch" ,}
                width:400,
                color:'GrayText'
            }}>
<Typography variant='h3'marginY={1} fontFamily='poppins' color='GrayText'>Contact</Typography>
<TextField
          required
          id="outlined-required-static"
          label="Name"
           focused
          fullWidth
          fontFamily='poppins'
          
          
          
        /><br/>
        <br/>
        <TextField
          required
          id="outlined-required-static"
          label="Email"
           focused
          fullWidth 
          fontFamily='poppins'       />
        <br/>
        <br/>
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
           focused
          fullWidth
          fontFamily='poppins'
        /><br/>
        <br/>
        <Button variant="contained" sx={{ background: "#545fc4" }} endIcon={<GrSend size={20}/>}>
        Send 
        </Button>
     
            </Box>
            <Box sx={{display:{xs:'none',md:'block'} }} >
              <img src={contactus} width={400} alt="contact us "/>
              <Stack direction='row' spacing={6} alignItems='center' justifyContent='center' marginLeft={10}>
<IconButton color='primary' back size='large'>
  
  <AiFillPhone/>

</IconButton>
<IconButton color='primary' back size='large'>
  
  <BsTelegram/>

</IconButton>
<IconButton color='primary' back size='large'>
  
  <AiFillInstagram/>

</IconButton>
</Stack>
            </Box>
        </Box>
        </Box>
    </div>
  )
}

export default Contacts