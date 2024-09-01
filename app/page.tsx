"use client";

import {
  AppBar,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import { Github, Linkedin, Mail, Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = styled(AppBar)({
  backgroundColor: "#2E7D32",
  width: "100%",
  margin: 0,
  padding: 0,
});

const HeroSection = styled(Box)({
  width: "100%",
  height: "100vh",
  backgroundColor: "#FFFFFF",
  color: "#2E7D32",
  textAlign: "center",
  margin: 0,
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const AboutSection = styled(Box)({
  padding: "50px",
  boxSizing: "border-box",
  backgroundColor: "#E8F5E9",
});

const AboutContent = styled(Box)({
  textAlign: "left",
});

const AboutImage = styled("img")({
  width: "100%",
  height: "auto",
});

const HowItWorksSection = styled(Box)({
  backgroundColor: "#FFFFFF",
  padding: "50px 0",
  textAlign: "center",
  width: "100%",
  margin: 0,
  boxSizing: "border-box",
});

const CardContainer = styled(Box)({
  perspective: "1000px",
  margin: "20px",
  cursor: "pointer",
  width: "300px",
  height: "200px",
  position: "relative",
});

const Card = styled(Box)({
  width: "100%",
  height: "100%",
  position: "relative",
  transformStyle: "preserve-3d",
  transition: "transform 0.6s",
  "&:hover": {
    transform: "rotateY(180deg)",
  },
});

const CardSide = styled(Box)({
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

const CardFront = styled(CardSide)({
  backgroundColor: "#4CAF50",
  color: "white",
});

const CardBack = styled(CardSide)({
  backgroundColor: "#66BB6A",
  color: "white",
  transform: "rotateY(180deg)",
});

const NumberCircle = styled(Box)({
  width: "40px",
  height: "40px",
  backgroundColor: "white",
  color: "#4CAF50",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  marginBottom: "10px",
});

const Footer = styled(Box)({
  backgroundColor: "#2E7D32",
  color: "white",
  padding: "24px 30px",
  textAlign: "center",
  width: "100%",
  boxSizing: "border-box",
});

const FooterLink = styled("a")({
  color: "#2E7D32",
  backgroundColor: "white",
  padding: "8px",
  borderRadius: "50%",
  display: "inline-block",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "#4CAF50",
  },
});

export default function Home() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar position="fixed" sx={{ width: "100%" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: isMobile ? "0 6px" : "0 40px",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: "500",
              color: "#FFFFFF",
            }}
          >
            EcoLearn
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                onClick={toggleMenu}
                sx={{
                  padding: "20px",
                }}
              >
                <Menu />
              </IconButton>
              <Drawer
                anchor="right"
                open={menuOpen}
                onClose={closeMenu}
                sx={{
                  "& .MuiDrawer-paper": {
                    backgroundColor: "#2E7D32",
                    color: "white",
                  },
                }}
              >
                <List>
                  <ListItem
                    button
                    onClick={closeMenu}
                    component={Link}
                    href="#home"
                  >
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem
                    button
                    onClick={closeMenu}
                    component={Link}
                    href="/chat"
                  >
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#4CAF50",
                        "&:hover": { backgroundColor: "#45A049" },
                        color: "#ffffff",
                        fontWeight: "500",
                        width: "100%",
                      }}
                    >
              
                    </Button>
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
            
          
            </Box>
          )}
        </Toolbar>
      </Navbar>

      {/* Hero Section */}
      <HeroSection id="home">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "700",
            fontSize: { xs: "2.5rem", md: "3.75rem" },
          }}
        >
          Learn <span style={{ color: "#4CAF50" }}>Sustainably</span> with EcoLearn
        </Typography>
        <Typography
          variant="h5"
          component="p"
          gutterBottom
          sx={{
            fontWeight: "400",
            fontSize: { xs: "1.25rem", md: "1.5rem" },
          }}
        >
          Discover eco-friendly courses and make a positive impact on the environment.
        </Typography>
        <Typography
          variant="body1"
          component="p"
          gutterBottom
          sx={{
            fontWeight: "400",
            fontSize: { xs: "1rem", md: "1.1rem" },
            maxWidth: "600px",
            marginTop: "20px",
          }}
        >
          Join our community of eco-conscious learners and gain the skills to create a greener future.
        </Typography>
        <Link href="/chat">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4CAF50",
              "&:hover": { backgroundColor: "#45A049" },
              color: "#ffffff",
              mt: 2,
              fontWeight: "500",
              fontSize: { xs: "14px", md: "16px" },
            }}
          >
           Get started
          </Button>
        </Link>
      </HeroSection>

      {/* About Section */}
      <AboutSection id="about">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <AboutContent>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: "700",
                  color: "#2E7D32",
                }}
              >
                About EcoLearn
              </Typography>
              <Typography
                variant="body1"
                component="p"
                gutterBottom
                sx={{
                  fontWeight: "400",
                  color: "#333333",
                }}
              >
                EcoLearn is a revolutionary online learning platform dedicated to sustainable education. 
                Our courses are designed to empower individuals with the knowledge and skills needed to 
                address environmental challenges and promote eco-friendly practices in various industries.
              </Typography>
            </AboutContent>
          </Grid>
          <Grid item xs={12} md={6}>
            <AboutImage
              src="images/imag-copy.png"
              alt="Eco-friendly Education Illustration"
            />
          </Grid>
        </Grid>
      </AboutSection>

      {/* How It Works Section */}
      <HowItWorksSection id="working">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: "700",
            color: "#2E7D32",
          }}
        >
          How It Works
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* Cards... */}
        </Grid>
      </HowItWorksSection>

      {/* Footer */}
      <Footer>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="body1">
              &copy; {new Date().getFullYear()} EcoLearn. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} textAlign={{ xs: "center", md: "right" }}>
            <Box
              display="flex"
              justifyContent={{ xs: "center", md: "flex-end" }}
              mt={{ xs: 2, md: 0 }}
            >
              <FooterLink
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </FooterLink>
              <Box mx={2}>
                <FooterLink
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={24} />
                </FooterLink>
              </Box>
              <FooterLink href="mailto:info@ecolearn.com">
                <Mail size={24} />
              </FooterLink>
            </Box>
          </Grid>
        </Grid>
      </Footer>
    </>
  );
}