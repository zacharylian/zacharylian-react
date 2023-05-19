import React, { useRef, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home/home';
import About from './pages/about/about';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';
import { motion, useInView, useAnimation } from 'framer-motion';

function App() {
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
      <Layout>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="./pages/about" element={<About />} />
            <Route path="./pages/projects" element={<Projects />} />
            <Route path="./pages/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Layout>
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
          <About />
          <Projects />
          <Contact />
        </motion.div>
      </div>
    </React.Fragment>
  );
}

export default App;
