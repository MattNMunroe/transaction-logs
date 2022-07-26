import React from "react";
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    render(){
        return(
         <nav>
            <label>BudgetTales!</label>
            <h1>
                <Link className="transactions-list" to="/transactions">Transactions</Link>
            </h1>
            <h1>
                <Link className="new-transaction-form" to="/transactions">New Entry</Link>
            </h1>
            <h1>
                <Link className="home" to="/">Home</Link>
            </h1>
         </nav>
        )
    }
}

export default NavBar