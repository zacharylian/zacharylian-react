import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Socials from './components/Sidebar';

function App() {
  const title = "Welcome to my page!";
  // cannot output objects and boolean

  return (
    <div className="App">
      <Socials />
      <Routes>
        <Route path="/" element={<Navbar/>} />
      </Routes>
      <h1>{ title }</h1>
      <p>good morning</p>
      
    </div>
  );
}

export default App;
