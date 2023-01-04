import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import ModalBook from "../ModalBook";
import grad from "./../Asset/grad.png";
import birth from "./../Asset/birth.png";
import weeding from "./../Asset/weeding.png";
import bussiness from "./../Asset/bussiness.png";
import svg from "./../Asset/tp.png";


function Service() {
  return (
    <div id="service">
      <Box sx={{/* overflow: "hidden" */}} marginY={10}>
        <Typography
          variant="h2"
          textAlign="center"
          color="#545fc4"
          marginY={0}
          fontFamily="poppins"
        >
          Service
        </Typography>
     <Container
        sx={{
          display: "flex",
         gap: {xs:5, sm:20},
          marginY:{xs:3,sm:10},
          justifyContent:{ sm:"space-between"},
          flexDirection:{xs:'column',md:'row',sm:'column'},
          alignItems:{sm:'center',}  ,
          Width:'100%',
          
        }}>
           <Box sx={{width:{sm:'50%'},display:{xs:'none', sm:'block'}}}>
            <img
              src={svg}
              alt="camera"
              style={{
                borderRadius: 10,
                background: "linear-gradient(blue, pink)",
                maxWidth:'100%'
              }}
            />
          </Box>
      <Box sx={{display:"flex",gap:3}}>
        <Box sx={{width:{xs:"50px",sm:'100px'},height:{xs:'50px',sm:'80px'},bgcolor:'#569668',borderRadius:1}}>
          <img src={grad} alt='graduation' width='100%' height='100%'/>
        </Box>
        <Box sx={{width:{xs:"50px",sm:'100px'},height:{xs:'50px',sm:'80px'},bgcolor:'#569668',borderRadius:1}}>
          <img src={birth} alt='graduation' width='100%' height='100%'/>
        </Box>
        <Box sx={{width:{xs:"50px",sm:'100px'},height:{xs:'50px',sm:'80px',},bgcolor:'#569668',borderRadius:1}}>
          <img src={weeding} alt='graduation' width='100%' height='100%'/>
        </Box>
        <Box sx={{width:{xs:"50px",sm:'100px'},height:{xs:'50px',sm:'80px'},bgcolor:'#569668',borderRadius:1}}>
          <img src={bussiness} alt='graduation' width='100%' height='100%'/>
        </Box>
      </Box>
     </Container>
      </Box>
    </div>
  );
}

export default Service;
