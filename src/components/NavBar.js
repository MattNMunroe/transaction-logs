import React from "react";
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    render(){
        return(
         <nav>
            <h1><Link classname="home" to="/">BudgetTales!</Link></h1>
            <h3>
                <Link className="transactions-list" to="/transactions">Transactions</Link>
            </h3>
            <h3>
                <Link className="new-transaction-form" to="/transactions/new">New Entry</Link>
            </h3>
            <h3>
                <Link className="home" to="/">Home</Link>
            </h3>
         </nav>
        )
    }
}

export default NavBar