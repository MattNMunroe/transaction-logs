import { useEffect, useState } from "react";
import "./AllTransactions.css"

const AllTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const API = process.env.REACT_APP_API;
    const allTransactionsRoute = `${API}/transactions`;
    fetch(allTransactionsRoute)
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  console.log(transactions);

const handleDelete = () => {
  transactions.splice(1, 0)
  return transactions
}

  return (
    <div className="transaction-list">
      {transactions.map((transaction, index) => {
        return (
          <div key={index}>
            <h3>Total = {transaction.amount}</h3>
            <h1>{transaction.date}</h1>
            <h3>{transaction.type}</h3>
            <h3>{transaction.from}</h3>
            <h3>{transaction.amount}</h3>
            <h2>{transaction.comment}</h2>
            <button onClick={handleDelete}>Delete Post</button>
          </div>
        );
      })}
    </div>
  );
};

export default AllTransactions;
