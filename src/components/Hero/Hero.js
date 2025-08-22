import React from "react";
import { Box, Typography, Button, Container, Grid, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import profile from "../../assets/images/imga1.jpg";

const Hero = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                background: `linear-gradient(135deg, ${theme.palette.background.default}, ${theme.palette.primary.light}15)`,
                position: "relative",
                overflow: "hidden",
                px: 2,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center" justifyContent="center">
                    {/* Colonne pour l'image - à gauche */}
                    <Grid item xs={12} md={5}>
                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ display: "flex", justifyContent: "center" }}
                        >
                            <Box
                                sx={{
                                    position: "relative",
                                    display: "inline-block",
                                }}
                            >
                                <Box
                                    component="img"
                                    src={profile}
                                    alt="Robel illustration"
                                    sx={{
                                        width: "100%",
                                        maxWidth: "350px",
                                        borderRadius: "50%",
                                        boxShadow: "0px 8px 30px rgba(0,0,0,0.2)",
                                        transition: "transform 0.5s",
                                        "&:hover": {
                                            transform: "scale(1.05)",
                                        },
                                    }}
                                />
                                {/* Glow effect autour de l'image */}
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "50%",
                                        background: `radial-gradient(circle, ${theme.palette.primary.main}20, transparent 70%)`,
                                        zIndex: -1,
                                    }}
                                />
                            </Box>
                        </motion.div>
                    </Grid>
                    
                    {/* Colonne pour le texte - à droite */}
                    <Grid item xs={12} md={7}>
                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography
                                variant="h2"
                                gutterBottom
                                sx={{
                                    fontWeight: "bold",
                                    lineHeight: 1.2,
                                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    mb: 2,
                                }}
                            >
                                Salut, je suis Robel Fy Manoa Andrianavalona
                            </Typography>

                            <Typography
                                variant="h5"
                                color="text.secondary"
                                gutterBottom
                                sx={{ mb: 3 }}
                            >
                                Développeur Full Stack
                            </Typography>

                            <Typography
                                variant="body1"
                                color="text.secondary"
                                paragraph
                                sx={{ 
                                    lineHeight: 1.8, 
                                    fontSize: "1.1rem", 
                                    mb: 4,
                                    maxWidth: "100%",
                                }}
                            >
                                Développeur et Designer en Freelance, je crée des
                                expériences web modernes et performantes.
                                Je combine <strong>développement backend robuste</strong>,
                                <strong> expertise frontend</strong> et une touche de
                                <strong> design créatif</strong> pour transformer des idées en
                                produits concrets.
                                Mon objectif : aider entreprises et startups à bâtir des solutions
                                digitales élégantes, intuitives et innovante ainsi que durables.
                            </Typography>

                            <Box sx={{ 
                                display: "flex", 
                                flexWrap: "wrap", 
                                gap: 2,
                                justifyContent: { xs: "center", md: "flex-start" }
                            }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        py: 1.5,
                                        px: 4,
                                        fontWeight: "bold",
                                        borderRadius: 4,
                                        fontSize: "1rem",
                                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                        boxShadow: "0px 4px 20px rgba(0,0,0,0.15)",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            transform: "translateY(-3px)",
                                            boxShadow: "0px 8px 30px rgba(0,0,0,0.25)",
                                        },
                                    }}
                                >
                                    Me Contacter
                                </Button>

                                <Button
                                    variant="outlined"
                                    size="large"
                                    sx={{
                                        py: 1.5,
                                        px: 4,
                                        fontWeight: "bold",
                                        borderRadius: 4,
                                        fontSize: "1rem",
                                        border: `2px solid ${theme.palette.secondary.main}`,
                                        color: theme.palette.secondary.main,
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            background: `${theme.palette.secondary.main}10`,
                                            transform: "translateY(-3px)",
                                        },
                                    }}
                                >
                                    Voir mes projets
                                </Button>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;