import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { motion } from "framer-motion";
import img1 from "../../assets/imgstock.jpg";
import img2 from "../../assets/imgmedicapp.jpg";
import img3 from "../../assets/imgtrouvetoit.jpg";
import img4 from "../../assets/imgltp.jpg";
import img5 from "../../assets/imgtrade.jpg";
import img6 from "../../assets/imgparking.jpg";
import img7 from "../../assets/imgcommerce.jpg";

const projects = [
  {
    title: "Application de gestion de stock",
    description: "Une application mobile et web complète pour gérer les stocks et les ventes d’une entreprise, facilitant le suivi en temps réel et les prises de décision. L'application comprend une partie pour les administrateurs et une autre pour les employés afin de bien séparer les rôles.",
    image: img1,
    tech: ["ReactNative, Node.js, MongoDB"],
    link: "#",
  },
  {
    title: "Application de Géolocalisation des prestataires de santé à Madagascar",
    description: "Une application mobile permettant aux utilisateurs de localiser facilement les prestataires de santé à Madagascar, avec des fonctionnalités de recherche avancée et des informations détaillées sur chaque prestataire. Integrant aussi une assistante virtuelle pour répondre aux questions de santé courantes et aussi pour la facilitation de la recherche des services de santé à proximité.",
    image: img2,
    tech: ["ReactNative, Node.js, MongoDB"],
    link: "#",
  },
  {
    title: "Application de Géolocalisation Immobilère et Foncier à Madagascar",
    description: "Une application mobile qui aide les utilisateurs à trouver des biens immobiliers à Madagascar, avec des options de filtrage avancées et des cartes interactives. L'application intègre également des outils financiers pour aider les utilisateurs à évaluer leur capacité d'achat et à planifier leurs investissements immobiliers. Elle offre une expérience utilisateur fluide et intuitive, facilitant la recherche et la gestion des biens immobiliers. L'application possedes une intelligence artificielle pour suggérer des biens en fonction des préférences de l'utilisateur.",
    image: img3,
    tech: ["ReactNative, Node.js, MongoDB"],
    link: "#",
  },
  {
    title: "Logiciel de gestion des élèves et des notes",
    description: "Un logiciel de gestion scolaire permettant aux enseignants de gérer les élèves, les cours, les absences, les retards et les notes, avec des fonctionnalités demander par l'établissement pour l'amélioration des gestions de ses élèves.",
    image: img4,
    tech: ["HTML, CSS, JavaScript, PHP, MySQL"],
    link: "#",
  },
  {
    title: "Automatisation d'une plateforme de Trading",
    description: "Un projet d'automatisation d'une plateforme de trading pour faciliter le suivi des transactions et l'analyse du marché permettant aux traders d'accomplir plusieurs tâches de manière automatisée comme quand est ce qu'il faut acheter ou vendre un actif, et aussi de suivre les tendances du marché.",
    image: img5,
    tech: ["C#, NinjaScript"],
    link: "#",
  },
  {
    title: "Gestion de Parking",
    description: "Un logiciel de gestion de parking permettant aux responsables de gérer les entrées et les sorties des véhicules, de suivre les paiements et de générer des rapports sur l'occupation du parking.",
    image: img6,
    tech: ["Java, Spring Boot, MySQL"],
    link: "#",
  },
  {
    title: "Site E-commerce",
    description: "Un site e-commerce complet avec gestion des produits, des utilisateurs, des commandes et des paiements en ligne.",
    image: img7,
    tech: ["Laravel, MySQL, HTML, CSS, JavaScript, Bootstrap"],
    link: "#",
  },
];


const uniqueTechs = [
  ...new Set(projects.flatMap((p) => p.tech)),
];

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState("All");
  const [openModal, setOpenModal] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  const handleFilter = (tech) => {
    setSelectedTech(tech);
  };

  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(selectedTech));

  const handleOpenModal = (project) => {
    setModalProject(project);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalProject(null);
  };

  return (
    <Box id="projects" sx={{ py: 12, backgroundColor: "background.default" }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h4"
            color="primary"
            gutterBottom
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            Projets & Réalisations
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            paragraph
            sx={{ textAlign: "center", mb: 4 }}
          >
            Voici quelques projets que j’ai réalisés, que ce soit en freelance, à l’université ou personnellement.
          </Typography>

          {/* Filtres */}
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Chip
              label="All"
              onClick={() => handleFilter("All")}
              color={selectedTech === "All" ? "primary" : "default"}
              sx={{ mx: 0.5, cursor: "pointer" }}
            />
            {uniqueTechs.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                onClick={() => handleFilter(tech)}
                color={selectedTech === tech ? "primary" : "default"}
                sx={{ mx: 0.5, cursor: "pointer" }}
              />
            ))}
          </Box>
        </motion.div>

        {/* Grid projets */}
        <Grid container spacing={4}>
          {filteredProjects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    boxShadow: 3,
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                >
                  <Box sx={{ overflow: "hidden" }}>
                    <CardMedia
                      component="img"
                      height="180"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        transition: "transform 0.5s",
                        "&:hover": { transform: "scale(1.05)" },
                      }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                      {project.title}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 1 }}>
                      {project.tech.map((t) => (
                        <Chip key={t} label={t} size="small" />
                      ))}
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleOpenModal(project)}
                      sx={{
                        mt: "auto",
                        background: "linear-gradient(90deg, #1976d2, #00bcd4)",
                        "&:hover": {
                          background: "linear-gradient(90deg, #1565c0, #00acc1)",
                        },
                      }}
                    >
                      Voir le projet
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Modal */}
        {modalProject && (
          <Dialog open={openModal} onClose={handleCloseModal} maxWidth="sm" fullWidth>
            <DialogTitle>{modalProject.title}</DialogTitle>
            <DialogContent>
              <Box component="img" src={modalProject.image} alt={modalProject.title} width="100%" sx={{ mb: 2 }} />
              <Typography variant="body1" paragraph>{modalProject.description}</Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {modalProject.tech.map((t) => (
                  <Chip key={t} label={t} />
                ))}
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseModal} color="primary">Fermer</Button>
            </DialogActions>
          </Dialog>
        )}
      </Container>
    </Box>
  );
};

export default Projects;
