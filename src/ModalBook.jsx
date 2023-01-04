import { Button, Modal, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import {AiFillPhone} from 'react-icons/ai'
import {BsTelegram} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

function ModalBook(props) {
  const [open,setOpen]=useState(false)
  const HandelOpen=()=>{
      setOpen(true)
  }
  const HandelClose=()=>{
      setOpen(false)
  }

 
  return (
    <div>
       <Button variant='contained' sx={{ background: "#545fc4" }} onClick={HandelOpen}>
              Book Now
            </Button>
<Modal
open={open}
onClose={HandelClose}
sx={{display:'flex',justifyContent:'center', alignItems:'center', }}>
  <Paper sx={{width:600, height:300,
  background:'#241e34',textAlign:'center',color:'white',borderRadius:4}}>
    <Typography variant='h5'marginTop={4} fontFamily='poppins'>Book </Typography>
    <Typography variant='body2'fontFamily='poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus deleniti fugiat nesciunt, quod nemo a explicabo consequuntur optio reprehenderit </Typography>
    <Box marginTop={4} display='flex' gap={3} justifyContent='center'alignItems='center'>
    <Box>
    <AiFillPhone size={16}/>
    <p>call us:+251988464949</p>
    </Box>
    <Box>
      <BsTelegram size={16}/>
      <p>DM us on telegram </p>
    </Box>
    <Box>
      <AiFillInstagram size={20}/>
      <p>DM us On instagram</p>
    </Box>
    </Box>

  </Paper>

</Modal>
    </div>
  )
}

export default ModalBook