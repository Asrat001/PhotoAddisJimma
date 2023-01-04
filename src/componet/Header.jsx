import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";
import addis from ".././Asset/addis.png";

const drawerWidth = 240;
const navItems = [
  { id: 1, name: "about us", to: "aboutus" },
  { id: 2, name: "Gallary", to: "gallary" },
  { id: 3, name: "service", to: "service" },
  { id: 4, name: "Contact", to: "contact" },
];
const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "white",
  fontFamily: "poppins",
  fontSize: 18,
};
const linkStyleM = {
  margin: "1rem",
  textDecoration: "none",
  color: "#545fc4",
  fontFamily: "poppins",
  fontSize: 18,
};

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }} fontFamily="poppins">
        Photo Addis
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                to={item.to}
                style={linkStyleM}
                onClick={() => setMobileOpen(false)}
                smooth={true}
              >
                {" "}
                {item.name}{" "}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", overflowX: "hidden" }}>
      <AppBar
        component="nav"
        sx={{ bgcolor: "#569668", maxWidth: "100%", overflow: "hidden" }}
      >
        <Toolbar>
        
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <img
              src={addis}
              alt=""
              style={{ width: "100px", height: "100px", borderRadius: "100%" }}
            />
          </Box>
          <Typography
            variant="h6"
            component="div"
            fontFamily="poppins"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" }, ml: 2 }}
          >
            Photo Addis
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item.id} sx={{ color: "#fff" }}>
                <Link
                  to={item.to}
                  style={linkStyle}
                 
                  smooth={true}
                >
                  {" "}
                  {item.name}{" "}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
