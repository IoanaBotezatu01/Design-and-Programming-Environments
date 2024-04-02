import './App.css';
import Home from './components/Home';
import Edit from './components/Edit';
import Add from './components/Add';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import View from './components/View';

function App() {
  
  return (
    <div className="App" >
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/create" element={<Add />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/view" element={<View/>}/>
        </Routes>
      </Router>
    </div>
 
  );

}

export default App;
