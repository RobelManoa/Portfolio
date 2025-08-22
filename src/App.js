import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <Header />
      <Box sx={{ pt: 8 }}>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Box>
    </>
  );
}

export default App;
