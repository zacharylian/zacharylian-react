import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const title = "Welcome!";
  // cannot output objects and boolean

  return (
    <div className="App">
      <Navbar />
      <h1>{ title }</h1>

      <Routes>
        <Route path="/" element={<Navbar/>} />
      </Routes>
      
    </div>
  );
}

export default App;
