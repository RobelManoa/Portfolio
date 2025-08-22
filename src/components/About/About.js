import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  LinearProgress,
  Tooltip,
  Chip,
  useTheme,
  useMediaQuery,
  alpha,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMui,
  SiFigma,
  SiAdobephotoshop,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiPostman,
  SiCodeceptjs,
  SiCisco,
} from "react-icons/si";
import { FaBriefcase, FaCertificate, FaGraduationCap } from "react-icons/fa";

const skills = [
  { label: "ReactJS", type: "Frontend", icon: <SiReact /> },
  { label: "NextJS", type: "Frontend", icon: <SiNextdotjs /> },
  { label: "ReactNative", type: "Frontend", icon: <SiReact /> },
  { label: "JavaScript", type: "Frontend", icon: <SiJavascript /> },
  { label: "TypeScript", type: "Frontend", icon: <SiTypescript /> },
  { label: "Node.js", type: "Backend", icon: <SiNodedotjs /> },
  { label: "Express", type: "Backend" },
  { label: "MongoDB", type: "Backend", icon: <SiMongodb /> },
  { label: "MySQL", type: "Backend", icon: <SiMysql /> },
  { label: "PHP", type: "Backend", icon: <SiPhp /> },
  { label: "HTML", type: "Frontend", icon: <SiHtml5 /> },
  { label: "CSS", type: "Frontend", icon: <SiCss3 /> },
  { label: "TailwindCSS", type: "Frontend", icon: <SiTailwindcss /> },
  { label: "MUI", type: "Frontend", icon: <SiMui /> },
  { label: "Figma", type: "Outils", icon: <SiFigma /> },
  { label: "Adobe XD", type: "Outils" },
  { label: "Postman", type: "Outils", icon: <SiPostman /> },
  { label: "Visual Studio Code", type: "Outils", icon: <SiCodeceptjs /> },
  { label: "Cursor", type: "Outils" },
  { label: "Cisco Packet Tracer", type: "Outils", icon: <SiCisco /> },
  { label: "Adobe Photoshop", type: "Outils", icon: <SiAdobephotoshop /> },
];
const variants = {
  fadeUp: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } },
  stagger: { visible: { transition: { staggerChildren: 0.08 } } },
  hoverLift: { whileHover: { y: -4, transition: { type: "spring", stiffness: 300 } } },
};

const groupBy = (arr, key) =>
  arr.reduce((acc, item) => ((acc[item[key]] = acc[item[key]] || []).push(item), acc), {});

const About = () => {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const skillsByCat = groupBy(skills, "cat");

  return (
    <Box
      id="about"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
        background: `linear-gradient(180deg, ${alpha(theme.palette.primary.main, 0.03)} 0%, transparent 60%)`,
      }}
    >
      {/* Blobs animés en arrière-plan */}
      <Box
        component={motion.div}
        aria-hidden
        initial={{ scale: 0.9, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
        sx={{
          position: "absolute",
          top: -80,
          left: -80,
          width: 260,
          height: 260,
          borderRadius: "50%",
          filter: "blur(60px)",
          background: alpha(theme.palette.primary.main, 0.25),
        }}
      />
      <Box
        component={motion.div}
        aria-hidden
        initial={{ scale: 1.1, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "mirror" }}
        sx={{
          position: "absolute",
          bottom: -100,
          right: -80,
          width: 320,
          height: 320,
          borderRadius: "50%",
          filter: "blur(70px)",
          background: alpha(theme.palette.secondary.main, 0.25),
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        {/* HERO — Avatar glassmorphism */}
        <Box
          component={motion.div}
          variants={variants.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          sx={{
            mx: "auto",
            textAlign: "center",
            mb: { xs: 6, md: 8 },
            position: "relative",
          }}
        >
          <Card
            component={motion.div}
            {...variants.hoverLift}
            elevation={0}
            sx={{
              mx: "auto",
              px: { xs: 3, md: 5 },
              py: { xs: 3, md: 4 },
              maxWidth: 860,
              borderRadius: 5,
              backdropFilter: "blur(12px)",
              background: alpha(theme.palette.background.paper, 0.7),
              border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
            }}
          >
            <Avatar
              sx={{
                width: 120,
                height: 120,
                mx: "auto",
                mb: 2,
                border: `4px solid ${alpha(theme.palette.primary.main, 0.4)}`,
                boxShadow: `0 10px 30px ${alpha(theme.palette.primary.main, 0.25)}`,
                bgcolor: alpha(theme.palette.primary.main, 0.15),
                color: theme.palette.primary.main,
                fontWeight: 800,
                fontSize: 36,
              }}
            >
              RA
            </Avatar>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                letterSpacing: -0.5,
                mb: 1,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              À propos de moi
            </Typography>

            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 820, mx: "auto", lineHeight: 1.7 }}
            >
              Je suis <Box component="span" sx={{ color: "primary.main", fontWeight: 700 }}>Robel Fy Manoa Andrianvalona</Box>,
              Développeur Full Stack, Formateur et Enseignant à Madagascar. Spécialisé en
              <Box component="span" sx={{ color: "primary.main", fontWeight: 700 }}> Frontend</Box> et compétent en
              <Box component="span" sx={{ color: "secondary.main", fontWeight: 700 }}> Backend</Box>.
              J’ai livré des projets pour des entreprises et je prépare le lancement de ma startup.
            </Typography>

            <Box sx={{ mt: 2, display: "flex", gap: 1, justifyContent: "center", flexWrap: "wrap" }}>
              <Chip label="Disponible en freelance" color="success" variant="outlined" />
              <Chip label="Open to Remote" color="primary" variant="outlined" />
            </Box>
          </Card>
        </Box>

        <Grid container spacing={4}>
          {/* TIMELINE interactive */}
          <Grid item xs={12} md={6}>
            <Card
              elevation={0}
              sx={{
                p: 3,
                height: "100%",
                borderRadius: 4,
                background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(
                  theme.palette.primary.light,
                  0.06
                )} 100%)`,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: "primary.main", display: "flex", alignItems: "center", gap: 1 }}>
                  <FaGraduationCap /> Parcours & Expériences
                </Typography>

                <Timeline position={downMd ? "right" : "alternate"} sx={{ p: 0, m: 0 }}>
                  {/* Étape Académique */}
                  <TimelineItem>
                    {!downMd && (
                      <TimelineOppositeContent color="text.secondary">
                        2020 – Présent
                      </TimelineOppositeContent>
                    )}
                    <TimelineSeparator>
                      <TimelineDot
                        color="primary"
                        component={motion.div}
                        whileHover={{ scale: 1.15 }}
                        sx={{ boxShadow: 2 }}
                      >
                        <FaGraduationCap size={14} />
                      </TimelineDot>
                      <TimelineConnector sx={{ bgcolor: "primary.light" }} />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="subtitle1" fontWeight={700} color="primary.main">
                        Parcours académique
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                        Diplome de Technicien Superieur (DTS) en Informatique - Licence professionnel en Informatique dans le Parcours Génie Logiciel - Master 1 - Master 2 (en cours)
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>

                  {/* Formations */}
                  <TimelineItem>
                    {!downMd && (
                      <TimelineOppositeContent color="text.secondary">
                        2021 – 2023
                      </TimelineOppositeContent>
                    )}
                    <TimelineSeparator>
                      <TimelineDot
                        color="secondary"
                        component={motion.div}
                        whileHover={{ scale: 1.15 }}
                        sx={{ boxShadow: 2 }}
                      >
                        <FaCertificate size={14} />
                      </TimelineDot>
                      <TimelineConnector sx={{ bgcolor: "secondary.light" }} />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="subtitle1" fontWeight={700} color="secondary.main">
                        Formations & Ateliers
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                        Hacking Éthique - Développement Web - Maintenance & Réseaux <br/> Relation Client - Informatique Bureautique - Robotique
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>

                  {/* Pro */}
                  <TimelineItem>
                    {!downMd && (
                      <TimelineOppositeContent color="text.secondary">
                        2022 – Présent
                      </TimelineOppositeContent>
                    )}
                    <TimelineSeparator>
                      <TimelineDot
                        color="success"
                        component={motion.div}
                        whileHover={{ scale: 1.15 }}
                        sx={{ boxShadow: 2 }}
                      >
                        <FaBriefcase size={14} />
                      </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="subtitle1" fontWeight={700} color="success.main">
                        Parcours professionnel
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                        Freelance - Formateur et Enseignant - Développeur Full Stack - Chef de Projet IT · Administrateur Réseaux et Systèmes - Integrateur Web - Support Technique - Designer UI/UX
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </CardContent>
            </Card>
          </Grid>

          {/* COMPÉTENCES — cartes + jauges */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card elevation={4} sx={{ borderRadius: 3, p: 2 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                    ⚡ Compétences
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                    {skills.map((skill) => (
                      <Chip
                        key={skill.label}
                        icon={skill.icon}
                        label={skill.label}
                        variant="outlined"
                        sx={{
                          transition: "transform 0.2s, box-shadow 0.2s",
                          "&:hover": { transform: "scale(1.1)", boxShadow: 3 }
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
