import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AllTransactions from './components/AllTransactions';
import IndividualTransaction from './components/IndividualTransaction';
import CreateNewTransaction from './components/CreateNewTransaction'
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<AllTransactions/>}/>
          <Route path="/:id" element={<IndividualTransaction/>}/>
          <Route path="/transactions" element={<CreateNewTransaction/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
