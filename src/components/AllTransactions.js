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

  //add amount total per id (identification)
  //every new entry is to subtract/add from the amount of the id

  return (
    <div>
      {transactions.map((transaction, index) => {
        return (
          <div key={index}>
            <h1>{transaction.date}</h1>
            <h3>{transaction.type}</h3>
            <h3>{transaction.from}</h3>
            <h3>{transaction.amount}</h3>
            <h2>{transaction.comment}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default AllTransactions;
