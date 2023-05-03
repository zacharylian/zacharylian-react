import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Notes from './pages/notes';
import Create from './pages/create';

function App() {
  const title = "Welcome!";
  // cannot output objects and boolean

  return (
    <div className="App">
      <Navbar />
      <h1>{ title }</h1>

      <Router>
        <Routes>
          <Route exact path="/">
            <Notes /> 
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
