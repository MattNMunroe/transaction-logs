import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AllTransactions from './components/AllTransactions';
import IndividualTransaction from './components/IndividualTransaction';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AllTransactions/>}/>
          <Route path="/:id" element={<IndividualTransaction/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
