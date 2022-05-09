import React from "react";
import Testimonials from "../Testimonials";
import Mission from "../Mission";
import Hero from "../components/Hero";
import About from "../About.jsx";
import Blog from '../Blog'
import Steps from "../Steps";
import { motion } from "framer-motion";
import ScrollToTop from "./ScrollToTop";

function Home() {
  return (
    <>
      <motion.div initial="hidden" animate="show">
        <ScrollToTop />
        <Hero />
        <About />
        <Mission />
        <Steps />
        <Testimonials />
        <Blog />
      </motion.div>

    </>
  );
}

export default Home;
