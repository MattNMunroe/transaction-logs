import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AllTransactions from './components/AllTransactions';
import IndividualTransaction from './components/IndividualTransaction';
import CreateNewTransaction from './components/CreateNewTransaction'
import NavBar from './components/NavBar';
import WelcomePage from './components/WelcomePage';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<WelcomePage/>}/>
          <Route path="/transactions" element={<AllTransactions/>}/>
          <Route path="/transactions/:id" element={<IndividualTransaction/>}/>
          <Route path="/transactions/new" element={<CreateNewTransaction/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
