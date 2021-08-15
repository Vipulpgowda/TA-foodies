import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Home/>
      </Router>
    </div>
  );
}

export default App;
