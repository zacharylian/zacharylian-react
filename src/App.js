import { Route, Routes } from 'react-router-dom';
import './App.css';
import HideOnScroll from './components/Navbar';

function App() {
  const title = "Welcome to my page!";
  // cannot output objects and boolean

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HideOnScroll/>} />
      </Routes>
      <h1>{ title }</h1>
      <p>good morning</p>
    </div>
  );
}

export default App;
