import React, { useRef, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Socials from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/home/home';
import About from './pages/about/about';
import Experience from './pages/experience/experience';
import Contact from './pages/contact/contact';
import { motion, useInView, useAnimation } from 'framer-motion';

const App = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="./home" element={<Home />}>
        <Route path="./about" element={<About />} />
        <Route path="./experience" element={<Experience />} />
        <Route path="./contact" element={<Contact />} />
        </Route>
      </Routes>
      <Socials />
      <div ref={ref}>
        <motion.div
          variants ={{
            hidden: {opacity: 0, y: 75},
            visible: {opacity: 1, y: 0}
          }}
          initial="hidden"
          animate={mainControls}
          transition={{duration: 1, delay: 0.8}}
        >
          <Home />
          <hr/>
          <About />
          <hr/>
          <Experience />
          <hr/>
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </React.Fragment> 
  );
}

export default App;
