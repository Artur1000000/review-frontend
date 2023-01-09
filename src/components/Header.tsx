import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { ThemeContext } from "./CustomTheme";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import LanguageMode from "./LanguageMode";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";

const drawerWidth = "100%";
const pages = ["films", "games", "books"];

export default function Header() {
  const {t} = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { handleTheme, theme, color } = useContext<any>(ThemeContext);

  const handleDrawerToggle = (e: any) => {
    if (e.target.tagName === "A") {
      return setMobileOpen((prevState) => !prevState);
    }
    if (e.target.tagName === "SVG") {
      return setMobileOpen((prevState) => !prevState);
    }
    if (e.target.tagName !== "SPAN") {
      return setMobileOpen((prevState) => !prevState);
    }
    if (e.target.tagName === "SPAN" && e.target.innerHTML !== "theme") {
      return setMobileOpen((prevState) => !prevState);
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <IconButton color={color} aria-label="add to shopping cart">
        <CloseIcon />
      </IconButton>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to="/" style={{ textDecoration: "none", color: color }}>
          LOGO
        </Link>
      </Typography>
      <Divider />
      <List>
        {pages.map((page: string) => (
          <ListItem key={page} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>
                <Link
                  to={`/${page}`}
                  style={{
                    textDecoration: "none",
                    color: color,
                    textTransform: "capitalize",
                  }}
                >
                  {`${t(page)}`}
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText onClick={handleTheme} primary={t("theme")} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <Link to="/auth" style={{ textDecoration: "none", color: color }}>
                <Button color="inherit">{t("login")}</Button>
              </Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar component="nav" color="inherit" position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "left",
              display: { xs: "none", sm: "block" },
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: color }}>
              LOGO
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {pages.map((item) => (
              <Button key={item}>
                <Link
                  to={`/${item}`}
                  style={{ textDecoration: "none", color: color }}
                >
                  {`${t(item)}`}
                </Link>
              </Button>
            ))}
            <LanguageMode />
            <IconButton onClick={handleTheme}>{theme}</IconButton>
            <Link to="/auth" style={{ textDecoration: "none", color: color }}>
              <Button color="inherit">{t("login")}</Button>
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
              position: "absolute",
              right: "20px",
            }}
          >
            <LanguageMode />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor={"left"}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
