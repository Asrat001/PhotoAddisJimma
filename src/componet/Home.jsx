import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import foto from "./../Asset/foto.jpg";
import service from "./../Asset/service.jpg";
import grad from "./../Asset/grad.png";
import birth from "./../Asset/birth.png";
import weeding from "./../Asset/weeding.png";
import bussiness from "./../Asset/bussiness.png";


function Home() {
  return (
    <div id="aboutus">
      <Box sx={{ overflowX: "hidden" }}>
        <Box sx={{ marginY: 10 }}>
          <Typography
            variant="h2"
            sx={{
              color: "#545fc4",
              textAlign: "center",
              fontFamily: "poppins",
            }}
          >
            About Us
          </Typography>
          <Container
            sx={{
              display: "flex",
              gap: { xs: 5, sm: 20 },
              marginY: { xs: 3, sm: 10 },
              justifyContent: { sm: "space-between" },
              flexDirection: { xs: "column", md: "row", sm: "column" },
              alignItems: { sm: "center" },
              Width: "100%",
            }}
          >
            <Box sx={{ width: { sm: "50%" } }}>
              <img
                src={foto}
                alt="camera"
                style={{
                  borderRadius: 10,
                  background: "linear-gradient(blue, pink)",
                  maxWidth: "100%",
                }}
              />
            </Box>
            <Box sx={{ width: { sm: "50%" } }}>
              <Typography
                variant="h2"
                fontFamily="Poppins"
                sx={{ fontSize: { xs: "40px", sm: "60px" } }}
              >
                Photo Addis{" "}
              </Typography>
              <Typography variant="body1 " sx={{ color: "#0C1F09" }}>
                This business is a family business which is started by my father
                photo Alemayehu since 1971 G.C. And now the name change into
                Photo Addis Jimma comes with a new digital technology Starting
                0n 1995 G.c till now it gives a different types of photographic
                services and printing Banner. rem!
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  display: { xs: "none", sm: "block" },
                  marginY: 2.5,
                  color: "#0C1F09",
                  fontFamily: "poppins",
                }}
              >
                This business is a family business which is started by my father
                photo Alemayehu since 1971 G.C. And now the name change into
                Photo Addis Jimma comes with a new digital technology Starting
                0n 1995 G.c till now it gives a different types of photographic
                services and printing Banner. rem!
              </Typography>
              <Button
                variant="contained"
                sx={{ background: "#545fc4", my: "15px" }}
              >
                Read more
              </Button>
            </Box>
          </Container>
        </Box>

        <Box sx={{ marginY: 10 }}>
          <Typography
            variant="h2"
            sx={{
              color: "#545fc4",
              textAlign: "center",
              fontFamily: "poppins",
              fontSize: { xs: "50px", sm: "70px" },
            }}
          >
            Service we Provide
          </Typography>
          <Container
            sx={{
              display: "flex",
              gap: { xs: 10, sm: 20 },
              marginY: { xs: 4, sm: 10 },
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row", sm: "column" },
              alignItems: "center",
              Width: "100%",
            }}
          >
            <Box sx={{ width: { sm: "50%" } }}>
              <Typography
                variant="h2"
                fontFamily="poppins"
                sx={{ textAlign: { xs: "center", sm: "start" } }}
              >
                we ofer{" "}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#0C1F09",
                  fontFamily: "poppins",
                  textAlign: { xs: "center", sm: "start" },
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam dolores accusantium dignissimos aperiam nesciunt
                consequuntur quia excepturi temporibus quam. Labore deserunt
                itaque possimus. Iste alias totam laboriosam ea doloribus minima
                esse voluptas eligendi, sequi, officia cumque. Numquam,
                obcaecati! Sapiente voluptas debitis molestiae laudantium quo.
                Ratione in impedit velit dolorum rem!
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginY: 2.5,
                  color: "#0C1F09",
                  fontFamily: "poppins",
                  display: { xs: "none", sm: "block" },
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. heh
                hfhghrfv hcjhiurvitbjvjtyij ehjbfehbfrh photo addis
              </Typography>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  rowGap: 10,
                  borderRadius: 2,
                }}
              >
                <img src={grad} alt="img" style={{ width: 110, height: 100 }} />
                <img
                  src={birth}
                  alt="img"
                  style={{ width: 110, height: 100 }}
                />
                <img
                  src={weeding}
                  alt="img"
                  style={{ width: 110, height: 100 }}
                />
                <img
                  src={bussiness}
                  alt="img"
                  style={{ width: 110, height: 100 }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                width: { sm: "50%" },
              }}
            >
              <img
                src={service}
                alt="camera"
                style={{
                  borderRadius: 10,
                  background: "linear-gradient(blue, pink)",
                  maxWidth: "100%",
                }}
              />
            </Box>
          </Container>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
