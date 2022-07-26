import { useEffect, useState } from "react";

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

  return (
    <div>
      {transactions.map((transaction, index) => {
        return (
          <div>
            <h1>{transaction.date}</h1>
            <h3>{transaction.type}</h3>
            <h3>{transaction.from}</h3>
            <h3>{transaction.amount}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default AllTransactions;
