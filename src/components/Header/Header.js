import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  Box,
  SvgIcon,
} from "@mui/material";
import { Link } from "react-scroll";

// Icône Menu SVG alternative (évite d'installer @mui/icons-material)
const MenuIcon = () => (
  <SvgIcon>
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </SvgIcon>
);

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "À propos", link: "about" },
    { text: "Projets", link: "projects" },
    { text: "Contact", link: "contact" },
  ];

  const drawer = (
    <Box sx={{ width: 250, p: 2 }} onClick={handleDrawerToggle}>
      <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {menuItems.map((item) => (
          <Link
            key={item.text}
            to={item.link}
            smooth={true}
            duration={600}
            offset={-70}
            spy={true}
            activeClass="active"
            className="nav-link"
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            <Button fullWidth sx={{ justifyContent: "flex-start", color: "text.primary" }}>
              {item.text}
            </Button>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" color="inherit" elevation={1}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography
            variant="h6"
            component="a"
            href="#"
            sx={{
              textDecoration: "none",
              color: "primary.main",
              fontWeight: "bold",
            }}
          >
            Robel Manoa
          </Typography>

          {/* Desktop menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {menuItems.map((item) => (
              <Link
                key={item.text}
                to={item.link}
                smooth={true}
                duration={600}
                offset={-70}
                spy={true}
                activeClass="active"
                className="nav-link"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                <Button sx={{ color: "text.primary", position: "relative" }}>
                  {item.text}
                </Button>
              </Link>
            ))}
          </Box>

          {/* Mobile menu */}
          <IconButton
            color="primary"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { md: "none" } }}
      >
        {drawer}
      </Drawer>

      {/* Styles pour animation soulignement */}
      <style>{`
        .nav-link button::after {
          content: '';
          display: block;
          width: 0;
          height: 2px;
          background: #1976d2; /* ton bleu primaire */
          transition: width 0.3s;
          margin-top: 2px;
        }
        .nav-link.active button::after {
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default Header;