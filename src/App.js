import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';

function App() {
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
      <Home />
      <About />
      <Projects />
      <Contact />
    </React.Fragment>
  );
}

export default App;
