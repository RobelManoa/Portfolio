import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaBehance,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alertOpen, setAlertOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 Ici tu pourras brancher un backend ou EmailJS pour envoyer réellement les mails
    console.log("Données envoyées :", formData);

    setAlertOpen(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Box id="contact" sx={{ py: 12, backgroundColor: "background.default" }}>
      <Container maxWidth="md">
        {/* ---- Titre ---- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h4"
            color="primary"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Me Contacter
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            paragraph
          >
            Une question, une collaboration ou un projet en tête ?  
            Remplis le formulaire ou utilise mes contacts directs
          </Typography>
        </motion.div>

        {/* ---- Formulaire ---- */}
        <Card
          elevation={6}
          sx={{
            mt: 4,
            borderRadius: 3,
            background: "linear-gradient(135deg, #ffffff, #f8f9fa)",
          }}
        >
          <CardContent>
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Nom"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    required
                    variant="outlined"
                  />
                </Grid>
                <br/>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={5}
                    fullWidth
                    required
                    variant="outlined"
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  mt: 4,
                  py: 1.5,
                  fontWeight: "bold",
                  borderRadius: 2,
                  background: "linear-gradient(90deg, #1976d2, #00bcd4)",
                  "&:hover": {
                    background: "linear-gradient(90deg, #1565c0, #0097a7)",
                  },
                }}
              >
              Envoyer le message
              </Button>
            </Box>
          </CardContent>
        </Card>

        {/* ---- Réseaux & contacts ---- */}
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Typography variant="body1" gutterBottom>
            Ou contacte-moi directement via
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 3,
              mt: 2,
            }}
          >
            <IconButton component="a" href="tel:+261341040801" sx={{ color: "#2e7d32" }}>
              <MdPhone size={30} />
            </IconButton>
            <IconButton
              component="a"
              href="mailto:manoarobel@outlook.fr"
              sx={{ color: "#d32f2f" }}
            >
              <MdEmail size={30} />
            </IconButton>
            <IconButton
              component="a"
              href="tel:+261341040801"
              target="_blank"
              sx={{ color: "#25D366" }}
            >
              <FaWhatsapp size={30} />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/manoa-robel-1b2468271/"
              target="_blank"
              sx={{ color: "#0A66C2" }}
            >
              <FaLinkedin size={30} />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.facebook.com/andriana.robel"
              target="_blank"
              sx={{ color: "#1877F2" }}
            >
              <FaFacebook size={30} />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/RobelManoa"
              target="_blank"
              sx={{ color: "#333" }}
            >
              <FaGithub size={30} />
            </IconButton>
          </Box>
        </Box>

        {/* ---- Snackbar feedback ---- */}
        <Snackbar
          open={alertOpen}
          autoHideDuration={4000}
          onClose={() => setAlertOpen(false)}
        >
          <Alert
            onClose={() => setAlertOpen(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            ✅ Merci pour ton message, je te répondrai bientôt !
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;
